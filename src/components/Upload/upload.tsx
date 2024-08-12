import React, { ChangeEvent, memo, useRef, useState } from 'react'
import axios from 'axios';
import UploadList from './upload-list';
import Dragger from './dragger';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /** 必选参数, 上传的地址 */
  action: string;
  /** 上传的文件列表,*/
  defaultFileList?: UploadFile[];
  /** 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /** 文件上传时的钩子 */
  onProgress?: (percentage: number, file: File) => void;
  /** 文件上传成功时的钩子 */
  onSuccess?: (data: any, file: File) => void;
  /** 文件上传失败时的钩子 */
  onError?: (err: any, file: File) => void;
  /** 文件状态改变时的钩子，上传成功或者失败时都会被调用	 */
  onChange?: (file: File) => void;
  /** 文件列表移除文件时的钩子 */
  onRemove?: (file: UploadFile) => void;
  /** 设置上传的请求头部 */
  headers?: { [key: string]: any };
  /** 上传的文件字段名 */
  name?: string;
  /** 上传时附带的额外参数 */
  data?: { [key: string]: any };
  /** 支持发送 cookie 凭证信息 */
  withCredentials?: boolean;
  /** 可选参数, 接受上传的文件类型 */
  accept?: string;
  /** 是否支持多选文件 */
  multiple?: boolean;
  /** 是否支持拖拽上传 */
  drag?: boolean;
  children?: React.ReactNode
}

/**
 * 通过点击或者拖拽上传文件
 * ### 引用方法
 * 
 * ~~~js
 * import { Upload } from 'bamboosword'
 * ~~~
 */
export const Upload: React.FC<UploadProps> = memo((props) => {
  const {
    action,
    defaultFileList,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
    headers,
    name = 'file',
    data,
    withCredentials,
    accept,
    multiple,
    drag,
    children
  } = props
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

  const inputRef = useRef<HTMLInputElement>(null)

  // 更新上传列表方法
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }

  // 点击上传
  const handleClick = () => {
    if (inputRef.current) inputRef.current.click()
  }

  // 选择文件
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    // 上传文件
    uploadFilesHandle(files)
    // 清空选择
    if (inputRef.current) inputRef.current.value = ''
  }

  // 上传文件详细过程
  const post = (file: File) => {
    // 一开始的状态
    let _file: UploadFile = {
      uid: Date.now() + 'uplpad-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList(prevList => [_file, ...prevList])
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      // 上传百分比 
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / (e.total ?? 1)) || 0
        if (percentage < 100) {
          // 更新状态
          updateFileList(_file, { percent: percentage, status: 'uploading' })
          if (onProgress) onProgress(percentage, file)
        }
      },
      withCredentials
    }).then(res => {
      console.log(res);
      updateFileList(_file, { status: 'success', response: res.data })
      if (onSuccess) onSuccess(res.data, file)
      if (onChange) onChange(file)
    }).catch(err => {
      console.error(err);
      updateFileList(_file, { status: 'error', error: err })
      if (onError) onError(err, file)
      if (onChange) onChange(file)
    })
  }

  // 文件上传
  const uploadFilesHandle = (files: FileList) => {
    // 转成真实的数组
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        // 没有beforeUpload直接上传文件
        post(file)
      } else {
        // 有beforeUpload，根据返回的类型做不同的操作
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }

  // 删除文件
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList => {
      return prevList.filter(item => item.uid !== file.uid)
    }))
    if (onRemove) onRemove(file)
  }

  return (
    <div className='bamboosword-upload-component'>
      <div className="bamboosword-upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {
          drag ? (
            <Dragger onFile={files => uploadFilesHandle(files)}>
              {children}
            </Dragger>
          ) : children
        }
        <input
          className='bamboosword-file-input'
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
})

export default Upload