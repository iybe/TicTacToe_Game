import styled, { css } from 'styled-components';

interface ICelulaData {
  bordas: number;
}

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
  }

  button {
    border-radius: 10px;
    padding: 7px 7px;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tabuleiro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 600px;
`;

export const LinhaTabuleiro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 600px;
`;

export const Celula = styled.div<ICelulaData>`
  background-color: white;
  width: 180px;
  height: 180px;
  color: black;
  border-radius: 20px;

  ${props =>
    props.bordas === 1
      ? css`
          border-color: green;
          border-style: solid;
          border-width: 7px;
        `
      : ''}

  img {
    width: 160px;
    height: 160px;

    ${props =>
      props.bordas === 1
        ? css`
            padding: 10px 10px;
          `
        : css`
            margin: 10px 10px;
          `}
  }
`;
