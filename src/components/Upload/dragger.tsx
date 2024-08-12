import classNames from 'classnames';
import React, { memo, useState } from 'react'

interface DraggerProps {
  onFile: (file: FileList) => void;
  children: React.ReactNode;
}

const Dragger: React.FC<DraggerProps> = memo((props) => {
  const { children, onFile } = props
  const [dragOver, setDragOver] = useState(false)
  const classes = classNames('bamboosword-uploader-dragger', {
    'is-dragover': dragOver
  })

  // 拖动事件
  const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  // 拖动放入事件
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }

  return (
    <div
      className={classes}
      onDragOver={e => handleDrag(e, true)}
      onDragLeave={e => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
})

export default Dragger