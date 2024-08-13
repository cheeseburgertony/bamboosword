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
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '是否禁用 Input',
      type: { name: 'boolean', required: false },
    },
    size: {
      control: 'select',
      options: ['lg', 'sm'],
      description: '设置 input 大小，支持 lg 或者是 sm',
      type: { name: 'string', required: false },
    },
    icon: {
      control: 'text',
      description: '添加图标，在右侧悬浮添加一个图标，用于提示',
      type: { name: 'string', required: false },
    },
    prepend: {
      control: 'text',
      description: '添加前缀 用于配置一些固定组合',
      type: { name: 'string', required: false },
    },
    append: {
      control: 'text',
      description: '添加后缀 用于配置一些固定组合',
      type: { name: 'string', required: false },
    },
    onChange: {
      action: 'onChange',
      description: '当输入框内容变化时的回调函数',
      type: { name: 'function', required: false },
    },
  },
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
