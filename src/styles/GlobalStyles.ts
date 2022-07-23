import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
${normalize}

*{
margin:0;
padding:0;
box-sizing:border-box;
}


html, border-style, #root{
  height: 100%;
}
*, button, input{
  border:0;
  outline:none;
  font-family: 'Roboto', sans-serif;
}
button{
  cursor:pointer;
}

--color: rgba(255, 255, 255, 0.8);
color: var(--color);

`;
