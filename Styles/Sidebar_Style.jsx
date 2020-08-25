import styled from 'styled-components'
// import * as styles_var from './Variables'

const sidebar = styled.div`

@media only screen and (min-device-width: ${styles_var.mobile}) {

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.black_color};
}

.sidebar-items {
  padding-bottom: 0.5rem;
}

.sidebar-brand {
  padding: 1.2rem;
}

.brand-link {
  color: ${styles_var.coral_color};
  text-decoration: none;
}

.brand-link:hover {
  color: ${styles_var.black_color};
}

.brand-name {
  text-align: left;
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  font-size: 2rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.sidebar-footer {
  text-align: center;
  flex-shrink: 0;
  margin-bottom: 2rem;
  display: none;
}

}

@media only screen and (min-device-width: ${styles_var.tablet}) {  

.brand-name {
  text-align: center;
  margin: 0;
  font-size: 2.5rem;
}

}

@media only screen and (min-device-width: ${styles_var.desktop}) {

.sidebar{
  /* flex-direction: column; */
  width: 240px;
  height: 100vh;
}

.sidebar-brand {
  padding: 4rem;
}

.sidebar-items {
  flex: 1 0 auto;
  padding-bottom: 1rem;
}

.sidebar-footer {
  display: block;
}

.copyright-text {
  font-size: 0.7rem;
}

}


`;

export default sidebar