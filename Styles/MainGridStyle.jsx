import styled from 'styled-components';
import * as styles_var from './Variables'

const MansoryStyle = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.grid {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.grid-item {
  width: 100%;
}

.grid-item img {
  width: 100%;
  margin-bottom: -5px;
}

}


@media only screen and (min-width: ${styles_var.tablet}) {

.grid-item {
  width: 50%;
}

}

@media only screen and (min-width: ${styles_var.desktop}) {

}

`;

export default MansoryStyle