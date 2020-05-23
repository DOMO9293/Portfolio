import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "../../styles";

const Globals = createGlobalStyle`
/*  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap'); */
 /* :root{
   --color:red;
 } */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
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
  color:var(--color);
  background-color:${setColor.mainWhite};
  font-family: ${setFont.main}
}
Canvas{
  height:100vh;
}

h1{
  font-size:3em;
  line-height:1.2;
  display: inline;
  position: absolute;
  top: 60px;
  left: 60px;
  font-family: ${setFont.main}
}
h2{
  font-size:2em;margin-bottom:0.75em
}
h3{
  font-size:1.5em;line-height:1;margin-bottom:1em
}h4{
  font-size:1.2em;line-height:1.2;margin-bottom:1.25em;font-weight:bold;
}h5{
  font-size:1em;margin-bottom:1.5em;font-weight: bold;
}h6{
  font-size:1em;font-weight: bold;
}
p{
  line-height:1.5;margin:0 0 1.5 0;
}
a{
  
}
`;

export default Globals;
