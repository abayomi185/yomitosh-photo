import styled from 'styled-components';
import * as styles_var from './Variables'

const GalleryMansoryStyle = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

h1 {
    text-align: center;
    font-size: 2rem;
    padding: 3px 0;
}

.gallery-grid {
  display: flex;
  width: auto;
}

.gallery-grid-column {
    margin: 0;
    justify-content: center;
}

.gallery-item {
    background: white;
    margin: 15px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 7px 10px grey;
    transition: 0.2s;
    cursor: pointer;
}

.gallery-item:hover {
    h1 {
        color: ${styles_var.coral_color};
    }
}

.gallery-item:active {
  /* background-color: #3e8e41; */
  box-shadow: 0 2px 10px grey;
  transform: translateY(5px);
  transition: 0.2s;
  user-select: none;
}

.rectangle {
    height: 275px;
    width: 100%;
    background-color: #555;
    background-color: #fff;
    font-size: 0;
    /* overflow: hidden; */
}

.thumbnail-div {
    display: inline-block;
    width: 50%;
    height: 50%;
    background-size: cover;
    background-position: center center;
    margin: 0;
    
}

.thumbnail-div-single {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    margin: 0;
}

img {
    display: block;
    image-orientation: from-image;
}

.image0 {
    width: 100%;
}

.image1 {
    width: 100%;
}

.image2 {
    width: 100%;
}

.image3 {
    width: 100%;
}

}


@media only screen and (min-width: ${styles_var.tablet}) {




}

@media only screen and (min-width: ${styles_var.desktop}) {

.rectangle {
    height: 400px;
}

}

`;

export default GalleryMansoryStyle