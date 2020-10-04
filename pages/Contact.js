import Link from 'next/link'
import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import styled from 'styled-components'
import * as styles_var from '../Styles/Variables'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SendIcon from '@material-ui/icons/Send';
import Icon from '@material-ui/core/Icon';
import { motion } from 'framer-motion';

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

export default function Contact() {

  const { navMenu, showAnimations } = useContext(AppState)
  const [openMenu, setOpenMenu] = navMenu
  const [toggleAnimate, setAnimate] = showAnimations

  const instagram = "https://instagram.com/yomi185"
  const mail = "mailto:yomitosh.photo@gamil.com"

  const iconStyle = {
    color: styles_var.darkgray_color,
    fontSize: 50
  }

  useEffect(() => {
    // Always do navigations after the first render
    //router.push('/?counter=10', undefined, { shallow: true })
    setOpenMenu(false)
  }, [])

  return (
    <Contact_Style>
      <motion.div
        variants={toggleAnimate ? mainVariant : null}
        initial="initial"
        animate="enter"
        exit="initial"
      >
        <div className="contact">
          <div className="card-div">
            {/* <h1>079me</h1> */}
            {/* <h2>Web development isn't as easy as I thought. Please check this page again soon.</h2>
                        <h1>You can contact me on instagram in the mean time. <a href="instagram.com/yomi185">@Yomi185</a></h1> */}

            <div className="socials-group">

              <a href={instagram} >
                <div className="social">
                  <div>
                    <InstagramIcon
                      className="icon-class hover-transition"
                      style={iconStyle}
                    />
                  </div>
                  <p>Instagram</p>
                </div>
              </a>

              <a href={mail} >
                <div className="social">
                  <div>
                    <MailOutlineIcon
                      className="icon-class hover-transition"
                      style={iconStyle}
                    />
                  </div>
                  <p>E-mail</p>
                </div>
              </a>

            </div>

            <div className="form">
              <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
                <div class="form-group">
                  <div class="form-row">

                    <div class="form-input-div">
                      {/* <input type="text" name="name" class="form-control" placeholder="Full Name" required /> */}
                      <TextField
                        id="outlined-basic"
                        label="name"
                        variant="outlined"
                        fullWidth
                        style={{ borderColor: styles_var.black_color }}

                      />
                    </div>

                    <div class="form-input-div">
                      {/* <input type="email" name="email" class="form-control" placeholder="Email Address" required /> */}
                      <TextField
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                        fullWidth
                      />
                    </div>

                    <div class="form-group">
                      {/* <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea> */}
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={7}
                        variant="outlined"
                        fullWidth
                      />
                    </div>

                    {/* <button type="submit" class="form-button">Submit Form</button> */}
                    <Button
                      className="form-button"
                      variant="contained"
                      color="primary"
                      endIcon={<SendIcon />}
                      style={{ backgroundColor: styles_var.black_color }}
                      type="submit"
                    >
                      Send
                    </Button>

                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </motion.div>
    </Contact_Style>
  )
}

const Contact_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

a {
    text-decoration: none;
    color: black;
}

p {
    font-size: 1.1rem;
    white-space: nowrap;
}

.contact {
    display: flex;
    justify-content: center;
}

.card-div {
    background: ${styles_var.white_color};
    width: 700px;
    max-width: 700px;
    margin: 1rem 1rem;
    border-radius: 0.5rem;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.socials-group {
    display: flex;
    margin: auto;
}

.social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
    text-align: center;
    width: 85px;
    border-radius: 1rem;
}

.social:hover {
    background: ${styles_var.gray_highlight};
    color: ${styles_var.coral_color} !important;

.icon-class {
    color: ${styles_var.coral_color} !important;
}

}

.icon-class {
    padding: 0 0.1rem;
    margin-top: 5px;
}

.form {
    margin: auto;
    margin-top: 0.7rem;
    width: 210px;
}

.form-input-div {
    margin: 1rem 0;
    width: 100%;
}

.form-button {
    margin: 1rem 0;
    width: 100%;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {


}

@media only screen and (min-width: ${styles_var.desktop}) {

.card-div {
  margin: 2rem 1rem;
}

}
`;