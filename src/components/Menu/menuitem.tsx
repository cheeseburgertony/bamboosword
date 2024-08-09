import classNames from 'classnames';
import React, { memo, useContext } from 'react'
import { MenuContext } from './menu';

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}


const MenuItem: React.FC<MenuItemProps> = memo((props) => {
  const { className, disabled, index, style, children } = props
  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-actived': context.index === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) context.onSelect(index)
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
})

export default MenuItem