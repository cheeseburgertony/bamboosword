import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'
import Icon from '../Icon/icon'

const meta: Meta<typeof Upload> = {
  title: 'Upload',
  component: Upload,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof meta>

const checkSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false
  } else {
    return true
  }
}

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', { type: file.type })
  return Promise.resolve(newFile)
}

export const Default: Story = {
  render: () => (
    <Upload
      action='https://run.mocky.io/v3/34786f50-6906-4010-87fd-2a8d83b7f967'
      name='fileName'
      data={{ 'key': 'value' }}
      headers={{ 'X-Powered-By': 'bamboosword' }}
      accept='.jpg'
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>点击或者拖动到此区域进行上传</p>
    </Upload>
  )
}