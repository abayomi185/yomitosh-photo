import styled from 'styled-components';
import * as styles_var from './Variables'

const Gallery_View_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.gallery-header {
    background-color: ${styles_var.white_color};
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    user-select: none;
    top: 57px;
}

.content {
  margin-top: 0;
}

.gallery-button {
    width: 44px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: none;
    padding: 0;
    padding-top: 0.3rem;
}

.gallery-button:hover {
    background-color: ${styles_var.gray_highlight};
    transition: 0.1s ease-in-out
}

.gallery-button:active {
    /* transform: scale(0.7); */
    background-color: ${styles_var.white_color};

    .button-area {
        /* pointer-events: none; */
        transform: scale(0.7);
    }

}

.description {
    background-color: ${styles_var.white_color};
    margin-top: 36px;

p {
    font-size: 0.9rem;
}

}

.button-area {
    /* background: red; */
}

p {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    text-align: center;
}

.sticky-nav {
  position: fixed;
  /* padding-bottom: 1rem; */
  transition-duration: 1.2s;
  top: 58.38px;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  

.gallery-header {
  position: relative;
  top: 0;
}

.content {
  margin-top: 0;
}

.description {
    margin-top: 0;
}

.sticky-nav {
  position: fixed;
  /* padding-bottom: 1rem; */
  transition-duration: 1.2s;
  top: 68px;
}

.sticky-nav-aid {
  margin-top: 45px;
}

p {
    padding: 0.5rem 2rem;
}

}

@media only screen and (min-width: ${styles_var.desktop}) {

.gallery-header {
    position: fixed;
    top: 0;
    /* width: inherit; */
    width: calc(100% - 240px);
}

.description {
    margin-top: 60px;

p {
    font-size: 0.9rem;
}

}

.grid {
    margin-top: 0;
}

p {
    padding: 1rem 1rem;
}

.gallery-button {
    width: 60px;
    /* padding-top: 1.2rem; */
}

}
`;

export default Gallery_View_Style