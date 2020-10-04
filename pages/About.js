import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import styled from 'styled-components'
import * as styles_var from '../Styles/Variables'
import AboutMD from './Markdown/About.md'
import { motion } from 'framer-motion';
import Switch from '@material-ui/core/Switch';

const mainVariant = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.9,
    transition: { ease: "easeOut", duration: 0.3 }
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5 }
  }
};

export default function About() {

  const { navMenu, showAnimations } = useContext(AppState)
  const [openMenu, setOpenMenu] = navMenu
  const [toggleAnimate, setAnimate] = showAnimations

  useEffect(() => {
    // Always do navigations after the first render
    //router.push('/?counter=10', undefined, { shallow: true })
    setOpenMenu(false)
  }, [])

  return (
    <About_Style>
      {/* <h1>This is About me &#128521;</h1> */}
      <motion.div
        variants={toggleAnimate ? mainVariant : null}
        initial="initial"
        animate="enter"
        exit="initial"
      >
        <div className="about">
          <div className="card-div">
            <div>
              {/* <h1>Hmm. This page is also under construction. Please check back soon.</h1> */}
              <AboutMD />
            </div>
            <br />
            <br />
            <div className="experimental-features">
              <div className="border">
                <div className="animations">
                  <p>enable fancy animations<br/><small>(experimental and does not persist)</small></p>
                  <Switch
                    checked={toggleAnimate}
                    onChange={() => { setAnimate(!toggleAnimate) }}
                    color="primary"
                    name="animateButton"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </About_Style>
  )
}

const About_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

a {
    /* text-decoration: none; */
    color: #156596;
}

p {
    font-size: 1.1rem;
}

.about {
    display: flex;
    justify-content: center;
}

.card-div {
    background: ${styles_var.white_color};
    max-width: 700px;
    margin: 1rem 1rem;
    border-radius: 0.5rem;
    padding: 2rem 1rem;
}

strong {
    font-weight: 400;
}

.experimental-features {
  text-align: center;

.border {
  background: linear-gradient(to right, red, orange);
  padding: 2px;
  display: inline-block;
  border-radius: 0.5rem;
}

}

.animations {
  display: inline-block;
  padding: 0.1rem 1rem;
  border: solid 2px transparent;
  border-radius: 0.5rem;
  background-color: white;
}

p {
  padding: 0.4rem 0;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  


}

@media only screen and (min-width: ${styles_var.desktop}) {


}

`;