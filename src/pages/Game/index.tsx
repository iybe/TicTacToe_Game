import React, { useState } from 'react';

import { Content, Tabuleiro, LinhaTabuleiro, Celula } from './style';

const Game: React.FC = () => {
  const [estadoCelulas, setEstadoCelulas] = useState(new Array(9).fill(0));

  return (
    <Content>
      <Tabuleiro>
        <LinhaTabuleiro>
          <Celula
            onClick={e => {
              e.currentTarget.innerHTML = 'X';
            }}
          />
          <Celula />
          <Celula />
        </LinhaTabuleiro>
        <LinhaTabuleiro>
          <Celula />
          <Celula />
          <Celula />
        </LinhaTabuleiro>
        <LinhaTabuleiro>
          <Celula />
          <Celula />
          <Celula />
        </LinhaTabuleiro>
      </Tabuleiro>
    </Content>
  );
};

export default Game;
