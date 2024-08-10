import React, { memo } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left'
interface CustomProps {
  animation?: AnimationName;
  children?: React.ReactNode
}

type TransitionProps = CustomProps & CSSTransitionProps


const Transition: React.FC<TransitionProps> = memo((props) => {
  const { children, animation, classNames, ...restProps } = props

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      unmountOnExit
      appear
      {...restProps}
    >
      {children}
    </CSSTransition>
  )
})


export default Transition