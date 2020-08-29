import styled from 'styled-components';
import * as styles_var from '../../Styles/Variables'

const socialIcons = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.social-icon {
  padding: 0 0.1rem;
}

.social-icon:hover {
  color: ${styles_var.coral_color} !important;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  

}
@media only screen and (min-width: ${styles_var.desktop}) {

.icons {
  text-align: center;
  padding-bottom: 0.2rem;
}

}

`;

export default socialIcons