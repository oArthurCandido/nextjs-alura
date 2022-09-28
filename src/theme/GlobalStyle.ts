 import { createGlobalStyle } from "styled-components";

  const GlobalStyle = createGlobalStyle`
 // [NextJS reset]
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    overflow: hidden;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content : flex-start; 
    flex-shrink: 0;
  }
  // Reset Styles
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `


export default GlobalStyle;
