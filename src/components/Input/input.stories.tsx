import { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ]
} satisfies Meta<typeof Input>
export default meta

type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {
    placeholder: '漂亮的Input',
  }
}
DefaultInput.storyName = '默认的Input'

export const DisabledInput: Story = {
  args: {
    placeholder: 'Disabled Input',
    disabled: true
  }
}
DisabledInput.storyName = '被禁用的Input'

export const IconInput: Story = {
  args: {
    placeholder: 'Input With Icon',
    icon: 'search'
  }
}
IconInput.storyName = '带图标的Input'

export const SizeInput: Story = {
  render: (args) => (
    <>
      <Input
        {...args}
        defaultValue="Large Size"
        size="lg"
      />
      <Input
        {...args}
        placeholder="Small Size"
        size="sm"
      />
    </>
  )
}
SizeInput.storyName = '不同尺寸的Input'

export const PandInput: Story = {
  render: (args) => (
    <>
      <Input
        {...args}
        defaultValue="prepend text"
        prepend="https://"
      />
      <Input
        {...args}
        defaultValue="baidu"
        append=".com"
      />
    </>
  )
}
PandInput.storyName = '带前后缀的Input'
