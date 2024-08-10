import React, { memo, useContext, useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('bamboosword-submenu', {
      'menu-opened': menuOpen
    })

    const childrenComponent = React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem') {
        return childrenElement
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
})

SubMenu.displayName = 'SubMenu'

export default SubMenu