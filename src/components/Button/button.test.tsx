import { fireEvent, render, screen } from "@testing-library/react"
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button"

const defaultProps = {
  // jest提供的模拟触发后调用一个函数(便于测试捕获)
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass',
  children: 'test'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
  children: 'disabled'
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    render(<Button {...defaultProps}>Nice</Button>)
    // 获取到文本叫Nice的元素
    const element = screen.getByText('Nice') as HTMLButtonElement
    // 判断元素是否被渲染在页面上
    expect(element).toBeInTheDocument()
    // 判断元素标签
    expect(element.tagName).toEqual('BUTTON')
    // 判断元素是否包含这些类
    expect(element).toHaveClass('btn btn-default')
    // 判断disabled属性是否为false
    expect(element.disabled).toBeFalsy()
    // 模拟触发点击
    fireEvent.click(element)
    // 判断触发回调后函数是否被调用
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    render(<Button {...testProps}>Nice</Button>)
    // 获取到文本叫Nice的元素
    const element = screen.getByText('Nice')
    // 判断元素是否被渲染在页面上
    expect(element).toBeInTheDocument()
    // 判断元素标签
    expect(element.tagName).toEqual('BUTTON')
    // 判断元素是否包含这些类
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    render(<Button btnType={'link'} href="https://www.baidu.com">Link</Button>)
    const element = screen.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>Nice</Button>)
    // 获取到文本叫Nice的元素
    const element = screen.getByText('Nice') as HTMLButtonElement
    // 判断元素是否被渲染在页面上
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
