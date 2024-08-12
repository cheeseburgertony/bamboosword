import { Meta, StoryObj } from '@storybook/react'
import { Form } from './form'

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  // args: {
  //   children: 'Default Button'
  // }
}
Default.storyName = '默认按钮样式'
