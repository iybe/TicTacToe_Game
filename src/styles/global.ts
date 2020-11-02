import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #262626;
    color: white;
    -webkit-font-smoothing: antialiased;
  }
`;

export default Global;
