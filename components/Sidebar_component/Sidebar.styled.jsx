import styled from 'styled-components'
import * as styles_var from '../../Styles/Variables'

const sidebar = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: ${styles_var.white_color};
  position: fixed;
  width: 100%;
}

.sidebar-mobile-top {
  display: flex;
  justify-content: space-between;
  background: ${styles_var.white_color};
  z-index: 1;
}

.sidebar-items {
  padding-bottom: 0.5rem;
  z-index: -1;
  position: absolute;
  /* -webkit-transform: translate3d(0, 0, 0); */
  transform: ${({ openMenu }) => openMenu ? 'translateY(58px)' : 'translateY(-200px)' };
  width: 100%;
  background: ${styles_var.white_color};
  transition: 0.4s ease-in-out;
}

.sidebar-brand {
  padding: 0.7rem 1.2rem;
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
  font-size: 1.7rem;
  transition-duration: 0.5s;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.sidebar-footer {
  display: none;
}

.sidebar-footer-text {
  text-align: center;
  flex-shrink: 0;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  

.sidebar{
  position: relative;
  /* overflow-y: hidden; */
}

.sidebar-items {
  padding-bottom: 0.5rem;
  z-index: 0;
  position: relative;
  transform: translateY(0px);
}

.brand-name {
  text-align: center;
  margin: 0;
  font-size: 2.5rem;
}

.sidebar-mobile-top {
  justify-content: center;
}

.sidebar-items {
  display: block;
  height: 2.8rem;
}

.sticky-nav {
  position: fixed;
  padding-top: 1rem;
  /* transition-duration: 0.2s; */
}

.sticky-nav-aid {
  /* margin-bottom: 52.8px; */
}

.sidebar-burgermenu {
  display: none;
}

ul {
  display: flex;
  justify-content: space-evenly;
  margin: 0 12rem;
}

}

@media only screen and (min-width: ${styles_var.desktop}) {

.sidebar{
  /* flex-direction: column; */
  position: fixed;
  width: 240px;
  height: 100%;
  /* transform-style: flat; */
}

.sidebar-mobile-top {
  display: block;
}

.sidebar-brand {
  padding: 4rem 3.9rem;
}

.sidebar-items {
  height: auto;
  flex: 1 0 auto;
  padding-bottom: 1rem;
}

.sidebar-footer {
  flex-shrink: 0;
  margin-bottom: 2rem;
  display: block;
}

.copyright-text {
  font-size: 0.7rem;
}

ul {
  display: block;
  margin: 0;
}

}


`;

export default sidebar