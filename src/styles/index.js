import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  * {
      border: 0;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    html,
    body,
    #root {
      height: 100%;
      font-family: 'Quicksand', sans-serif;
      font-size: 62.5%; /* A cada 1rem equivale a 10px */
      background-color: #FFFDD0;
    }

    body {
      text-rendering: optimizeLegibility !important;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      background: #eee;
    }
`;