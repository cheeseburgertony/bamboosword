import classNames from 'classnames';
import React, { createContext, memo, useState } from 'react'
import { MenuItemProps } from './menu-item';

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
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
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

  // 判断传入的children是否符合规定
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 自动添加index
        return React.cloneElement(childElement, { index })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
})

export default Menu