import React, { useState } from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menu-item';
import SubMenu from './components/Menu/sub-menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Transition from './components/Transition/transition';
library.add(fas)

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <Menu defaultIndex='0' onSelect={(index) => console.log(index)} defaultOpenSubMenus={['3']}>
        <MenuItem >
          cool link
        </MenuItem>
        <MenuItem disabled>
          cool link2
        </MenuItem>
        <MenuItem >
          cool link3
        </MenuItem>
        <SubMenu title='Subtitle'>
          <MenuItem>
            SubMenu1
          </MenuItem>
          <MenuItem>
            SubMenu2
          </MenuItem>
        </SubMenu>
      </Menu>

      <Button size='lg' btnType='primary' onClick={e => setShow(!show)}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-left'
      >
        <div>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
          <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-left'
        wrapper
      >
        <Button size='lg' btnType='default'>A Button</Button>
      </Transition>

    </div>
  );
}

export default App;
