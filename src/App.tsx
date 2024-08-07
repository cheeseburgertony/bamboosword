import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button>default</Button>
      <Button btnType={ButtonType.Primary}>primary</Button>
      <Button btnType={ButtonType.Danger}>danger</Button>
      <Button size={ButtonSize.Large}>large</Button>
      <Button size={ButtonSize.Small}>small</Button>
      <Button disabled>disabled btn</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com'>link</Button>
      <Button btnType={ButtonType.Link} disabled href='https://www.baidu.com'>disabled link</Button>
    </div>
  );
}

export default App;
