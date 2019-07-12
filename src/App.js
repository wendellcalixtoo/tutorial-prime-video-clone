import React, { Fragment } from 'react';
import GlobalStyle from "./styles/global"


import Header from "./components/Header/index";


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
