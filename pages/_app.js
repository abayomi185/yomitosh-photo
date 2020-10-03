import React, { useState, useContext } from 'react';
import Layout from "./Layout";
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../Styles/GlobalStyles'
import { AppState } from "../context/AppState";
// import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"

export default function MyApp({ Component, pageProps, router }) {

  const [openMenu, setOpenMenu] = useState(false)
  const [openImgPreview, setOpenImgPreview] = useState(false)

  // const router = useRouter()
  console.log(router.route);
  // console.log(Component.key);

  // const route = () => {
  //   if (router.route == "/") {
  //     return ""
  //   } else {
  //     return router.route
  //   }
  // }

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <AppState.Provider
        value={{
          navMenu: [openMenu, setOpenMenu],
          showPreview: [openImgPreview, setOpenImgPreview],
        }}
      >
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </AppState.Provider>
    </ThemeProvider>
  )

}