import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
--white: #E9E8E6;
--black:#161B20;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:"Roboto", Arial, sans-serif;
}
html{ 
  @media(max-width:1080px){
    font-size:93.75%; //15px
  }
  @media(max-width:720px){
    font-size:87.5%; //14px
  }    
}  
body {
  width: 100%;
  overflow-x: hidden;
}
`;
