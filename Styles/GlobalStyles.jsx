import { createGlobalStyle } from 'styled-components';
import * as styles_var from './Variables'

const GlobalStyle = createGlobalStyle`
  
@media only screen and (min-width: ${styles_var.mobile}) {

/* 1 column grid */

html, body {
  font-family: 'Roboto Slab', serif;
  padding: 0;
  margin: 0;
  background-color: ${styles_var.pink_color};
  ${'' /* min-height: 100%; */}
  min-width: 320px;
}

body::-webkit-scrollbar {
  width: 0.5rem
}

body::-webkit-scrollbar-track {
  background: ${styles_var.pink_color};
}

body::-webkit-scrollbar-thumb {
  background: coral;
}

main {
  display: flex;
  flex-direction: column;
  ${'' /* height: 100vh; */}
}

nav {
  z-index: 1;
}

.content-area {
  display: flex;
  justify-content: center;
  width: 100%;
}

nav {
  z-index: 1;
}

.content-area {
  display: flex;
  justify-content: center;
  width: 100%;
}

#main-content {
  margin-top: 58.23px;
  transition-duration: 0.5s;
  ${'' /* justify-content: center; */}
  width: 100%;
}

.hover-transition {
  transition-duration: 0.3s;
}

${'' /* For transition testing purposes */}
.transition-group-appear {
  opacity: 0.01;
}

h1, h2, h3, h4, h5, h6, p, small {
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.5rem;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {
/* Tablet - 2 Column grid */

#main-content {
  margin-top: 0px;
}

}

/* Another possible breakpoint here - at 992px */

@media only screen and (min-width: ${styles_var.desktop}) {
/* Desktop */

html, body {
  min-height: 420px;
}

main {
  flex-direction: row;
}

#main-content {
  margin-left: 240px;
}

}

`;

export default GlobalStyle