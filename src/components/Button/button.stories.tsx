import { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  title: 'Button组件',
  component: Button
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Button'
  }
}
Default.storyName = '默认按钮样式'

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}

export const Primary: Story = {
  args: {
    btnType: 'primary',
    children: 'Primary Button'
  }
}

export const Danger: Story = {
  args: {
    btnType: 'danger',
    children: 'Danger Button'
  }
}

export const Link: Story = {
  args: {
    btnType: 'link',
    href: 'https://www.baidu.com',
    children: 'Link Button'
  }
}
