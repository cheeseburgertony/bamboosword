import { Meta, StoryFn } from '@storybook/react'

import Button from './button'

const buttonMeta: Meta<typeof Button> = {
  title: 'Button组件',
  component: Button
}
export default buttonMeta


export const Default: StoryFn<typeof Button> = () => (
  <Button>Default Button</Button>
)
Default.storyName = '默认按钮样式'

export const ButtonWithSize: StoryFn<typeof Button> = () => (
  <>
    <Button size='lg'>Large Button</Button>
    <Button size='sm'>Small Button</Button>
  </>
)
ButtonWithSize.storyName = '不同尺寸的按钮'

export const ButtonWithType: StoryFn<typeof Button> = () => (
  <>
    <Button btnType='primary'>Primary Button</Button>
    <Button btnType='danger'>Danger Button</Button>
    <Button btnType='link' href='https://www.baidu.com'>Link Button</Button>
  </>
)
ButtonWithType.storyName = '不同类型的按钮'
