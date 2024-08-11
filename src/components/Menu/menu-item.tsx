import classNames from 'classnames';
import React, { memo, useContext } from 'react'
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  /** 选项的自定义 style */
  style?: React.CSSProperties;
  /** 选项是否被禁用 */
  disabled?: boolean;
  /** 选项扩展的 className */
  className?: string;
  children?: React.ReactNode;
}


export const MenuItem: React.FC<MenuItemProps> = memo((props) => {
  const { className, disabled, index, style, children } = props
  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) context.onSelect(index)
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
})

MenuItem.displayName = 'MenuItem'

export default MenuItem