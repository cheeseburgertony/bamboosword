import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'

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
      action='https://jsonplaceholder.typicode.com/posts'
      onChange={action('onChange')}
      beforeUpload={filePromise}
    />
  )
}