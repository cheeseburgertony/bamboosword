import { FC } from 'react'
import OriginForm from './form'
import Item, { FormItemProps } from './form-item'

export * from './form'
export * from './form-item'

export type IFormComponent = typeof OriginForm & {
  Item: FC<FormItemProps>
}

export const Form: IFormComponent = OriginForm as IFormComponent
Form.Item = Item

export default Form;