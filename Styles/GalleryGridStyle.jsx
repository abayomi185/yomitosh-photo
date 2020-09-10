import styled from 'styled-components';
import * as styles_var from './Variables'

const GalleryMansoryStyle = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {



}


@media only screen and (min-width: ${styles_var.tablet}) {

.gallery-grid {
  display: flex;
  width: auto;
}

.gallery-grid-column {
    margin: 0;
}

.gallery-item {
    background: white;
    margin: 15px;
}

.rectangle {
    height: 200px;
    width: 100%;
    background-color: #555;
}


}

@media only screen and (min-width: ${styles_var.desktop}) {

}

`;

export default GalleryMansoryStyle