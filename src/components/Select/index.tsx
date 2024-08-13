import { FC } from 'react'

import OriginSelect, { SelectProps } from './select'
import Option, { SelectOptionProps } from './option'

export * from './select'
export * from './option'

export type ISelectComponent = FC<SelectProps> & {
  Option: FC<SelectOptionProps>
}

export const Select = OriginSelect as ISelectComponent
Select.Option = Option

export default Select;