import React from 'react';

import Game from './pages/Game';

import Global from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Game />
      <Global />
    </>
  );
};

export default App;
