import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const DefaultIcon: Story = {
  render: (args: any) => (
    <>
      <Icon {...args} icon="house" size="3x" />
      <Icon {...args} icon="ghost" size="3x" />
      <Icon {...args} icon="bolt" size="3x" />
      <Icon {...args} icon="snowman" size="3x" />
    </>
  )
}
DefaultIcon.storyName = '默认图标'

export const ThemeIcon: Story = {
  render: (args: any) => (
    <>
      <Icon {...args} icon="house" size="3x" theme='primary' />
      <Icon {...args} icon="ghost" size="3x" theme='secondary' />
      <Icon {...args} icon="bolt" size="3x" theme='warning' />
      <Icon {...args} icon="snowman" size="3x" theme='info' />
    </>
  )
}
ThemeIcon.storyName = '不同主题的Icon'

export const CustomIcon: Story = {
  render: (args: any) => (
    <>
      <Icon {...args} icon="spinner" size="3x" theme="primary" spin />
      <Icon {...args} icon="spinner" size="3x" theme="success" pulse />
    </>
  )
}
CustomIcon.storyName = '更多行为的Icon'
