import { fireEvent, render, screen } from "@testing-library/react"
import Menu, { MenuProps } from "./menu"
import MenuItem from "./menu-item"
import SubMenu from "./sub-menu"
// import { wait } from "@testing-library/user-event/dist/utils"


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
      <SubMenu title="dropdown">
        <MenuItem>
          drop1
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}

// const createStyleFile = () => {
//   const cssFile: string = `
//     .bamboosword-submenu {
//       display: none;
//     }
//     .bamboosword-submenu.menuopened{
//       display: block;
//     }
//   `
//   const style = document.createElement('style')
//   style.type = 'text/css'
//   style.innerHTML = cssFile
//   return style
// }


describe('test Menu and MenuItem component', () => {
  it('should render correct Menu and MenuItem based on default props', () => {
    render(generateMenu(testProps));
    const menuElement = screen.getByTestId('test-menu');
    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');
    // expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
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
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('should render vertical mode when mode is set to vertival', () => {
    render(generateMenu(testVerProps));
    const menuElement = screen.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it('should show dropdonw items when hover on subMenu', async () => {
    // const wrapper = render(generateMenu(testProps));
    // wrapper.container.append(createStyleFile())
    // expect(screen.getByText('drop1')).not.toBeVisible()
    // const dropdownElement = screen.getByText('dropdown')
    // await wait(() => {
    //   expect(screen.queryByText('drop1')).toBeVisible()
    // })
    // fireEvent.click(screen.getByText('drop1'))
    // expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    // fireEvent.mouseLeave(dropdownElement)
    // await wait(() => {
    //   expect(screen.queryByText('drop1')).not.toBeVisible()
    // })
  })
})