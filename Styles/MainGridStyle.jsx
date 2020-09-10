import styled from 'styled-components';
import * as styles_var from './Variables'

const MansoryStyle = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

/* .grid-container {
  width: 100%;
} */

.flex-grid {
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */

  /* display: flex;
  width: auto; */
}

.grid {
  /* width: 100%;
  margin: auto;
  display: flex;
  justify-content: center; */

    display: flex;
    width: auto;
}

/* .grid-item {
  width: 100%;
  display: inline-block;
}

.grid-item img {
  width: 100%;
  margin-bottom: -5px;
} */

.grid-column {
    margin: 0;
}

.grid-item {
    background: white;
    margin: 15px;
}

img {
    display: block;
    width: 100%;
    margin: 0;
}

}


@media only screen and (min-width: ${styles_var.tablet}) {

/* .flex-grid {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 2100px;
}

.grid-item {
  width: 50%;
} */

}

@media only screen and (min-width: ${styles_var.desktop}) {

}

`;

export default MansoryStyle