import React, { memo, useContext } from 'react'
import { MenuContext } from './menu';
import classNames from 'classnames';
import { MenuItemProps } from './menu-item';

export interface SubMenuProps {
  index?: number;
  title?: string;
  className?: string;
  children?: React.ReactNode
}

const SubMenu: React.FC<SubMenuProps> = memo((props) => {
  const { className, index, title, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem') {
        return childrenElement
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component')
      }
    })
    return (
      <ul className='bamboosword-submenu'>
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
        {title}
      </div>
        {renderChildren()}
    </li>
  )
})

SubMenu.displayName = 'SubMenu'

export default SubMenu