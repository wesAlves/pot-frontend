import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    font-family: Roboto;

}
body{
  background: linear-gradient(180deg, #333333 0%, #000000 100%);
  height: 100vh;
}
`;
