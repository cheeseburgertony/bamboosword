import classNames from 'classnames';
import React, { createContext, memo, useState } from 'react'
import { MenuItemProps } from './menu-item';

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void

// Menu的props类型
export interface MenuProps {
  /** 默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  className?: string;
  /** 菜单类型 横向或者纵向 */
  mode?: MenuMode;
  style?: React.CSSProperties;
  /** 点击菜单项触发的回掉函数 */
  onSelect?: SelectCallback;
  /** 设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];
  children?: React.ReactNode;
}

// Menu的context类型
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
// 创建Menu的context，方便传递给子组件
export const MenuContext = createContext<IMenuContext>({ index: '0' })

/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * 
 * ```javascript
 * import { Menu } from 'bamboosword'
 * 
 * ```
*/
//然后可以使用 Menu.Item 和 Menu.Submenu 访问选项和子下拉菜单组件
export const Menu: React.FC<MenuProps> = memo((props) => {
  const { className, defaultIndex = '0', mode = 'horizontal', style, children, onSelect, defaultOpenSubMenus } = props
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const classes = classNames('bamboosword-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) => {
    setActiveIndex(index)
    if (onSelect) onSelect(index)
  }

  // context传递的值
  const passedContext: IMenuContext = {
    index: activeIndex,
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  // 判断传入的children是否符合规定
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 自动添加index
        return React.cloneElement(childElement, { index: index.toString() })
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