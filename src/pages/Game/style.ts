import styled from 'styled-components';

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

export const Celula = styled.div`
  background-color: #e6e6e6;
  width: 180px;
  height: 180px;

  align-items: center;
  font-size: 180px;
  color: black;

  border-radius: 20px;
`;
