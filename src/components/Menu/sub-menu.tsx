import React, { memo, useContext, useState } from 'react'

import { MenuContext } from './menu';
import classNames from 'classnames';
import { MenuItemProps } from './menu-item';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';


export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode
}

const SubMenu: React.FC<SubMenuProps> = memo((props) => {
  const { className, index, title, children } = props

  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as string[]
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false

  const [menuOpen, setMenuOpen] = useState(isOpened)

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
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

    const childrenComponent = React.Children.map(children, (child, i) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childrenElement, { index: `${index}-${i}` })
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component')
      }
    })
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation='zoom-in-top'
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon='angle-down' className='arrow-icon' />
      </div>
      {renderChildren()}
    </li>
  )
})

SubMenu.displayName = 'SubMenu'

export default SubMenu