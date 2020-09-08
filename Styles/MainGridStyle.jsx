import styled from 'styled-components';
import * as styles_var from './Variables'

const MansoryStyle = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.flex-grid {
  /* display: flex;
  flex-direction: column; */
  /* flex-wrap: wrap; */
  /* min-height: 10000px; */
}

.grid {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.grid-item {
  width: 100%;
  display: inline-block;
}

.grid-item img {
  width: 100%;
  margin-bottom: -5px;
}

}


@media only screen and (min-width: ${styles_var.tablet}) {

.flex-grid {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* max-height: 2000px; */
}

.grid-item {
  width: 50%;
}

}

@media only screen and (min-width: ${styles_var.desktop}) {

}

`;

export default MansoryStyle