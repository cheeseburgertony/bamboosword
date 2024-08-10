import { fireEvent, render, screen } from "@testing-library/react"
import Menu, { MenuProps } from "./menu"
import MenuItem from "./menu-item"


const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
    </Menu>
  )
}


describe('test Menu and MenuItem component', () => {
  it('should render correct Menu and MenuItem based on default props', () => {
    render(generateMenu(testProps));
    const menuElement = screen.getByTestId('test-menu');
    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');
    expect(menuElement).toBeInTheDocument();
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  })
  it('click item should change active and call the right callback', () => {
    render(generateMenu(testProps));
    const thirdItem = screen.getByText('xyz')
    const activeElement = screen.getByText('active')
    const disabledElement = screen.getByText('disabled')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })
  it('should render vertical mode when mode is set to vertival', () => {
    render(generateMenu(testVerProps));
    const menuElement = screen.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical')
  })
})