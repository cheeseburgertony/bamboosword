import { Meta, StoryObj } from '@storybook/react'
import { Menu } from './index'

const meta = {
  title: 'Menu',
  component: Menu,
  tags: ['autodocs']
} satisfies Meta<typeof Menu>
export default meta

type Story = StoryObj<typeof meta>

export const DefaultMenu: Story = {
  args: {
    defaultIndex: '0'
  },
  render: (args) => (
    <Menu {...args} defaultIndex='0'>
      <Menu.Item>
        Menu.Item 1
      </Menu.Item>
      <Menu.Item>
        Menu.Item 2
      </Menu.Item>
      <Menu.Item disabled>
        Disabled
      </Menu.Item>
      <Menu.SubMenu title='下拉选项'>
        <Menu.Item>
          下拉选项 1
        </Menu.Item>
        <Menu.Item>
          下拉选项 2
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
DefaultMenu.storyName = '默认Menu'

export const VerticalMenu: Story = {
  args: {
    defaultIndex: '0',
    mode: 'vertical'
  },
  render: (args) => (
    <Menu {...args} defaultIndex='0' mode='vertical'>
      <Menu.Item>
        Menu.Item 1
      </Menu.Item>
      <Menu.Item>
        Menu.Item 2
      </Menu.Item>
      <Menu.Item disabled>
        Disabled
      </Menu.Item>
      <Menu.SubMenu title='点击下拉选项'>
        <Menu.Item>
          下拉选项 1
        </Menu.Item>
        <Menu.Item>
          下拉选项 2
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
VerticalMenu.storyName = '纵向Menu'

export const VerticalOpenMenu: Story = {
  args: {
    defaultIndex: '0',
    mode: 'vertical',
    defaultOpenSubMenus: ['3']
  },
  render: (args) => (
    <Menu {...args} defaultIndex='0' mode='vertical' defaultOpenSubMenus={['3']} >
      <Menu.Item>
        Menu.Item 1
      </Menu.Item>
      <Menu.Item>
        Menu.Item 2
      </Menu.Item>
      <Menu.Item disabled>
        Disabled
      </Menu.Item>
      <Menu.SubMenu title='默认展开下拉选项'>
        <Menu.Item>
          下拉选项 1
        </Menu.Item>
        <Menu.Item>
          下拉选项 2
        </Menu.Item>
      </Menu.SubMenu>
    </Menu >
  )
}
VerticalOpenMenu.storyName = '纵向默认展开Menu'
