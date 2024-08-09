import classNames from 'classnames';
import React, { createContext, memo, useState } from 'react'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void

// Menu的props类型
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  children?: React.ReactNode
}

// Menu的context类型
interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
// 创建Menu的context，方便传递给子组件
export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = memo((props) => {
  const { className, defaultIndex = 0, mode = 'horizontal', style, children, onSelect } = props
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const classes = classNames('bamboosword-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setActiveIndex(index)
    if (onSelect) onSelect(index)
  }

  // context传递的值
  const passedContext: IMenuContext = {
    index: activeIndex,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
})

export default Menu