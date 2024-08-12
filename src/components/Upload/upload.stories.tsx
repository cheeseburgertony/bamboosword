import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'
import Icon from '../Icon/icon'
import Button from '../Button/button'

const meta: Meta<typeof Upload> = {
  title: 'Upload',
  component: Upload,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof meta>

export const SimpleUpload: Story = {
  render: (args) => (
    <Upload
      {...args}
      action='https://run.mocky.io/v3/34786f50-6906-4010-87fd-2a8d83b7f967'
    >
      <Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button>
    </Upload>
  )
}
SimpleUpload.storyName = '普通的Upload组件'

export const CheckUpload: Story = {
  render: (args) => {
    const checkFileSize = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert('file too big')
        return false;
      }
      return true;
    }
    return (
      <Upload
        {...args}
        action='https://run.mocky.io/v3/34786f50-6906-4010-87fd-2a8d83b7f967'
        beforeUpload={checkFileSize}
      >
        <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能上传大于50Kb！的文件 </Button>
      </Upload>
    )
  }
}
CheckUpload.storyName = '上传前检查文件大小'

export const DragUpload: Story = {
  render: (args) => {
    return (
      <Upload
        {...args}
        action='https://run.mocky.io/v3/34786f50-6906-4010-87fd-2a8d83b7f967'
        name="fileName"
        multiple
        drag
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>点击或者拖动到此区域进行上传</p>
      </Upload>
    )
  }
}
DragUpload.storyName = '拖动上传'
