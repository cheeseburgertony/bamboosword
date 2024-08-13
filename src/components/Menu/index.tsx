import { FC } from 'react'
import OriginMenu, { MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './sub-menu'
import MenuItem, { MenuItemProps } from './menu-item'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

export const Menu = OriginMenu as IMenuComponent

Menu.Item = MenuItem
Menu.SubMenu = SubMenu

export default Menu;