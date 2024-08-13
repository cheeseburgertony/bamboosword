import { FC } from 'react'
import OriginTabs, { TabsProps } from './tabs'
import TabItem, { TabItemProps } from './tab-item'

export type ITabsComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>
}

export const Tabs = OriginTabs as ITabsComponent
Tabs.Item = TabItem

export default Tabs