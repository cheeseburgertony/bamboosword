import React, { memo } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'


export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

export const Icon: React.FC<IconProps> = memo((props) => {
  const { theme, className, ...restProps } = props
  const classes = classNames('bamboosword-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
})

export default Icon