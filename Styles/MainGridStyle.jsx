import styled from 'styled-components';
import * as styles_var from './Variables'

const MansoryStyle = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

/* .grid-container {
  width: 100%;
} */

/* .flex-grid {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  display: flex;
  width: auto;
} */

.grid {
  /* width: 100%;
  margin: auto;
  display: flex;
  justify-content: center; */

    display: flex;
    width: auto;
    transition: 0.2s;
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

.grid-column-single {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.grid-item {
    margin: 15px;
}

.grid-item-single {
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

.grid-item {
    margin: 0;
}

.grid-item-single {
    margin: 7px;
    max-width: 500px;

img {
    border-radius: 0.5rem;
}

}


}

@media only screen and (min-width: ${styles_var.desktop}) {

.grid-item-single {
    max-width: 700px;
}
  
}

`;

export default MansoryStyle