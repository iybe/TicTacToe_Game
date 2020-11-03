import React, { useState } from 'react';

import checarVitoria from '../../utils/checarVitoria';

import imageX from '../../assets/JogodaVelha01.jpg';
import imageO from '../../assets/JogodaVelha02.jpg';

import { Content, Tabuleiro, LinhaTabuleiro, Celula, Header } from './style';

const Game: React.FC = () => {
  const [estadoCelulas, setEstadoCelulas] = useState(new Array(9).fill(0));
  const [bordaCelulas, setBordaCelulas] = useState(new Array(9).fill(0));
  const [jogadorAtual, setJogadorAtual] = useState(1);
  const [jogoAcabou, setJogoAcabou] = useState(false);
  const [message, setMessage] = useState(`Vez do jogador 1`);

  function handleCelula(id: number): void {
    if (jogoAcabou) {
      return;
    }
    if (id < 0 || id > 8) {
      return;
    }
    if (estadoCelulas[id] === 0) {
      const estadoCelulasAtual = estadoCelulas.map((atual, index) =>
        index === id ? jogadorAtual : atual,
      );

      setEstadoCelulas(estadoCelulasAtual);

      const celulasVitoria = checarVitoria(estadoCelulasAtual);

      if (celulasVitoria.length === 3) {
        setBordaCelulas(
          bordaCelulas.map((_, index) =>
            celulasVitoria.includes(index) ? 1 : 0,
          ),
        );

        setMessage(`Jogador ${jogadorAtual} VENCEU!`);
        setJogoAcabou(true);
        return;
      }

      if (!estadoCelulasAtual.includes(0)) {
        setJogoAcabou(true);
        setMessage('Empate');
        return;
      }

      setJogadorAtual(jogadorAtual === 1 ? 2 : 1);
      setMessage(`Vez do jogador ${jogadorAtual === 1 ? 2 : 1}`);
    }
  }

  function handleImagemJogador(id: number): string {
    if (estadoCelulas[id] === 1) {
      return imageX;
    }
    return imageO;
  }

  function handleReinicio() {
    setEstadoCelulas(new Array(9).fill(0));
    setBordaCelulas(new Array(9).fill(0));
    setJogadorAtual(1);
    setJogoAcabou(false);
    setMessage(`Vez do jogador 1`);
  }

  return (
    <Content>
      <Header>
        <p>{message}</p>
        {jogoAcabou ? (
          <button type="button" onClick={handleReinicio}>
            Reiniciar
          </button>
        ) : (
          ''
        )}
      </Header>
      <Tabuleiro>
        <LinhaTabuleiro>
          <Celula
            bordas={bordaCelulas[0]}
            onClick={() => {
              handleCelula(0);
            }}
          >
            {estadoCelulas[0] ? (
              <img src={handleImagemJogador(0)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
          <Celula
            bordas={bordaCelulas[1]}
            onClick={() => {
              handleCelula(1);
            }}
          >
            {estadoCelulas[1] ? (
              <img src={handleImagemJogador(1)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
          <Celula
            bordas={bordaCelulas[2]}
            onClick={() => {
              handleCelula(2);
            }}
          >
            {estadoCelulas[2] ? (
              <img src={handleImagemJogador(2)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
        </LinhaTabuleiro>
        <LinhaTabuleiro>
          <Celula
            bordas={bordaCelulas[3]}
            onClick={() => {
              handleCelula(3);
            }}
          >
            {estadoCelulas[3] ? (
              <img src={handleImagemJogador(3)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
          <Celula
            bordas={bordaCelulas[4]}
            onClick={() => {
              handleCelula(4);
            }}
          >
            {estadoCelulas[4] ? (
              <img src={handleImagemJogador(4)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
          <Celula
            bordas={bordaCelulas[5]}
            onClick={() => {
              handleCelula(5);
            }}
          >
            {estadoCelulas[5] ? (
              <img src={handleImagemJogador(5)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
        </LinhaTabuleiro>
        <LinhaTabuleiro>
          <Celula
            bordas={bordaCelulas[6]}
            onClick={() => {
              handleCelula(6);
            }}
          >
            {estadoCelulas[6] ? (
              <img src={handleImagemJogador(6)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
          <Celula
            bordas={bordaCelulas[7]}
            onClick={() => {
              handleCelula(7);
            }}
          >
            {estadoCelulas[7] ? (
              <img src={handleImagemJogador(7)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
          <Celula
            bordas={bordaCelulas[8]}
            onClick={() => {
              handleCelula(8);
            }}
          >
            {estadoCelulas[8] ? (
              <img src={handleImagemJogador(8)} alt="icone jogador" />
            ) : (
              ''
            )}
          </Celula>
        </LinhaTabuleiro>
      </Tabuleiro>
    </Content>
  );
};

export default Game;
