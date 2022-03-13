import React, { useState } from 'react'
import My from "./components/My/My";

import Main from './components/Layout/Main';

import Header from './components/Layout/Header'
import Movies from './components/Movies/Movies'

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
      {myIsShown && <My onClose={closeMyHandler}/>}
      <Header onOpen={openMyHandler} />
      
      <Movies />
    </Main> 
  )
}

export default App;
