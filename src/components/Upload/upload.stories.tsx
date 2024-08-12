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

export const Default: Story = {
  render: () => (
    <Upload
      action='https://jsonplaceholder.typicode.com/posts'
      onProgress={action('progess')}
      onSuccess={action('success')}
      onError={action('error')}
    />
  )
}