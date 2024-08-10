import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menu-item';
import SubMenu from './components/Menu/sub-menu';

function App() {
  return (
    <div className="App">
      <Menu mode='vertical' defaultIndex={0} onSelect={(index) => console.log(index)}>
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


      <Button>default</Button>
      <Button btnType={ButtonType.Primary}>primary</Button>
      <Button btnType={ButtonType.Danger}>danger</Button>
      <Button size={ButtonSize.Large}>verylarge</Button>
      <Button size={ButtonSize.Small}>small</Button>
      <Button disabled>disabled btn</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com'>link</Button>
      <Button btnType={ButtonType.Link} disabled href='https://www.baidu.com'>disabled link</Button>
    </div>
  );
}

export default App;
