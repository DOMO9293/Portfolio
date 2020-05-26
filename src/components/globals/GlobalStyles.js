import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "../../styles";

const Globals = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  cursor: none;
}
.scrollArea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}

 body{
  font-size:100%;
  background-color:${setColor.mainWhite};
  font-family: ${setFont.main}
}
Canvas{
  height:100vh;
}

`;

export default Globals;
