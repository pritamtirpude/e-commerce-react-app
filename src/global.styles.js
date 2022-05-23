import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  padding: 20px 40px;
  
  @media screen and (max-width: 800px) {
      padding: 10px;
  }
}

a{
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
