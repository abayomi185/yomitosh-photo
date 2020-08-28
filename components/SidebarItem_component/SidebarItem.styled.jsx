import styled from 'styled-components';
import * as styles_var from '../../Styles/Variables'

const sidebarItem = styled.div`

@media only screen and (min-device-width: ${styles_var.mobile}) {

li {
  
}

li:hover {
  background-color: ${styles_var.coral_color};
}

.active-item {
  background-color: ${styles_var.coral_color};
}

p {
  font-size: 1rem;
  margin: 0;
  padding: 2.5% 0 2.5% 0;
  color: ${styles_var.black_color};
  text-align: center;
}

a {
  color: ${styles_var.black_color};
  text-decoration: none;
}

p:hover {
  color: ${styles_var.white_color};
}

}

@media only screen and (min-device-width: ${styles_var.tablet}) {

.active-item {
  p {
    color: ${styles_var.black_color};
    border-bottom: 3px solid ${styles_var.coral_color};
  }

  background-color: ${styles_var.white_color};

}

li:hover {
    background-color: ${styles_var.white_color};
}

p {
  padding: 7px;
}

}
@media only screen and (min-device-width: ${styles_var.desktop}) {

.active-item {
  p {
    color: ${styles_var.white_color};
    border-bottom: none;
  }

  background-color: ${styles_var.coral_color};

}

li:hover {
    background-color: ${styles_var.coral_color};
}

p {
  font-size: 1rem;
  margin: 0;
  padding: 2.5% 0 2.5% 20%;
  color: ${styles_var.black_color};
  text-align: left;
}

}

`;

export default sidebarItem