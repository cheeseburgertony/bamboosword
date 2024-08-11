import { Meta, StoryObj } from '@storybook/react'
import { Menu } from './menu'
import MenuItem from './menu-item'
import SubMenu from './sub-menu'

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
      <MenuItem>
        MenuItem 1
      </MenuItem>
      <MenuItem>
        MenuItem 2
      </MenuItem>
      <MenuItem disabled>
        Disabled
      </MenuItem>
      <SubMenu title='下拉选项'>
        <MenuItem>
          下拉选项 1
        </MenuItem>
        <MenuItem>
          下拉选项 2
        </MenuItem>
      </SubMenu>
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
      <MenuItem>
        MenuItem 1
      </MenuItem>
      <MenuItem>
        MenuItem 2
      </MenuItem>
      <MenuItem disabled>
        Disabled
      </MenuItem>
      <SubMenu title='点击下拉选项'>
        <MenuItem>
          下拉选项 1
        </MenuItem>
        <MenuItem>
          下拉选项 2
        </MenuItem>
      </SubMenu>
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
    <Menu {...args} defaultIndex='0' mode='vertical' defaultOpenSubMenus={['3']}>
      <MenuItem>
        MenuItem 1
      </MenuItem>
      <MenuItem>
        MenuItem 2
      </MenuItem>
      <MenuItem disabled>
        Disabled
      </MenuItem>
      <SubMenu title='默认展开下拉选项'>
        <MenuItem>
          下拉选项 1
        </MenuItem>
        <MenuItem>
          下拉选项 2
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}
VerticalOpenMenu.storyName = '纵向默认展开Menu'
