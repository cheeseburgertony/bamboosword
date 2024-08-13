import { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './tabs'
import TabItem from './tab-item'
import Icon from '../Icon/icon'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  subcomponents: { 'TabItem': TabItem },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const DefaultTabs: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabItem label="选项卡一">This is content one</TabItem>
      <TabItem label="选项卡二">This is content two</TabItem>
      <TabItem label="用户管理">This is content three</TabItem>
    </Tabs>
  )
}
DefaultTabs.storyName = '默认的Tabs'

export const CardTabs: Story = {
  render: (args) => (
    <Tabs {...args} type="card">
      <TabItem label='card1'>This is card one</TabItem>
      <TabItem label="card2">This is content two</TabItem>
      <TabItem label="disabled" disabled>This is content three</TabItem>
    </Tabs>
  )
}
CardTabs.storyName = '选项卡样式的Tabs'

export const CustomTabs: Story = {
  render: (args) => (
    <Tabs {...args} type="card">
      <TabItem label={<><Icon icon="check-circle" />  自定义图标</>}>this is card one</TabItem>
      <TabItem label="tab2">this is content two</TabItem>
    </Tabs>
  )
}
CustomTabs.storyName = '自定义选项卡样式'

