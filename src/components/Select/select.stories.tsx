import { Meta, StoryObj } from '@storybook/react'
import { Select } from './select'
import Option from './option'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  render: (args) => (
    <Select
      {...args}
      placeholder="请选择"
    >
      <Option value="Hello" />
      <Option value="Hello2" />
      <Option value="Hello3" />
      <Option value="Disabled" disabled />
      <Option value="Hello5" />
    </Select>
  )
}
DefaultSelect.storyName = '默认的Select'

export const MultipleSelect: Story = {
  render: (args) => (
    <Select
      {...args}
      placeholder="支持多选的Select"
      multiple
    >
      <Option value="Hello" />
      <Option value="Hello2" />
      <Option value="Hello3" />
      <Option value="Bamboosword" />
      <Option value="Bamboosword2" />
    </Select>
  )
}
MultipleSelect.storyName = '支持多选的Select'

export const DisabledSelect: Story = {
  render: (args) => (
    <Select
      {...args}
      placeholder="被禁用了！"
      disabled
    >
      <Option value="Hello" />
      <Option value="Hello2" />
      <Option value="Hello3" />
    </Select>
  )
}
DisabledSelect.storyName = '被禁用的Select'

