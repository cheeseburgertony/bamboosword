import { Meta, StoryObj } from '@storybook/react'
import { Alert } from './alert'

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  render: (args) => (<Alert {...args} />)
}
export default meta

type Story = StoryObj<typeof meta>

export const DefaultAlert: Story = {
  args: {
    title: 'this is alert!'
  }
}
DefaultAlert.storyName = '基本Alert样式'

export const DescAlert: Story = {
  args: {
    title: '提示标题',
    description: 'this is a long description'
  }
}
DescAlert.storyName = '带描述的Alert'

export const StylesAlert: Story = {
  render: (args) => {
    return (
      <>
        <Alert {...args} title="this is Success" type="success"></Alert>
        <Alert {...args} title="this is Danger!" type="danger"></Alert>
        <Alert {...args} title="this is Warning!" type="warning" closable={false}></Alert>
      </>
    )
  }
}
StylesAlert.storyName = '不同样式的Alert'
