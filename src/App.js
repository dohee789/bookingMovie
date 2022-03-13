import React, { useState } from 'react'
import My from "./components/My/My";
import HeaderMy from './components/Layout/HeaderMy';
import Main from './components/Layout/Main';

const App = () => {
  const [myIsShown, setMyIsShown] = useState(false);

  const openMyHandler = () => {
    setMyIsShown(true);
    console.log('호출');
  };

  const closeMyHandler = () => {
    setMyIsShown(false);
    console.log("닫힘");
  }

  return (
    <Main>
      <HeaderMy onOpen={openMyHandler} />
      {myIsShown && <My onClose={closeMyHandler}/>}
    </Main>
  )
}

export default App;
