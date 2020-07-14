import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles';
import Principal from './views/Principal';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Principal />
    </BrowserRouter>
  );
}

export default App;
