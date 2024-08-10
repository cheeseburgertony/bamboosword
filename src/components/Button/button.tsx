import classNames from 'classnames';
import React, { memo } from 'react'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

// interface BaseButtonProps {
//   className?: string;
//   disabled?: boolean;
//   size?: ButtonSize;
//   btnType?: ButtonType;
//   children: React.ReactNode;
//   href?: string
// }

// 让组件能够获取到原生组件的属性
// type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
} & (React.ButtonHTMLAttributes<HTMLElement> & React.AnchorHTMLAttributes<HTMLElement>)


export const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    btnType = 'default',
    disabled = false,
    className,
    size,
    children,
    href,
    ...restProps
  } = props

  // btn btn-lg btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: (btnType === 'link') && disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )

  }
})

export default Button