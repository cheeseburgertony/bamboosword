import { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './index'
import Icon from '../Icon/icon'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  subcomponents: { 'TabItem': Tabs.Item as React.ComponentType<unknown>},
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof meta>

export const DefaultTabs: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Item label="选项卡一">This is content one</Tabs.Item>
      <Tabs.Item label="选项卡二">This is content two</Tabs.Item>
      <Tabs.Item label="用户管理">This is content three</Tabs.Item>
    </Tabs>
  )
}
DefaultTabs.storyName = '默认的Tabs'

export const CardTabs: Story = {
  render: (args) => (
    <Tabs {...args} type="card">
      <Tabs.Item label='card1'>This is card one</Tabs.Item>
      <Tabs.Item label="card2">This is content two</Tabs.Item>
      <Tabs.Item label="disabled" disabled>This is content three</Tabs.Item>
    </Tabs>
  )
}
CardTabs.storyName = '选项卡样式的Tabs'

export const CustomTabs: Story = {
  render: (args) => (
    <Tabs {...args} type="card">
      <Tabs.Item label={<><Icon icon="check-circle" />  自定义图标</>}>this is card one</Tabs.Item>
      <Tabs.Item label="tab2">this is content two</Tabs.Item>
    </Tabs>
  )
}
CustomTabs.storyName = '自定义选项卡样式'

