import React, { useState, useContext, useEffect } from 'react';
import Layout from "./Layout";
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../Styles/GlobalStyles'
import { AppState } from "../context/AppState";
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import { initGA, logPageView } from '../utils/analytics'
import NProgress from 'nprogress'

import MainGridStyle from '../Styles/MainGridStyle'
import GalleryGridStyle from '../Styles/GalleryGridStyle'
import Gallery_View_Style from '../Styles/GalleryViewStyle'
import { Contact_Style } from './Contact'
import { About_Style } from './About'

export default function MyApp({ Component, pageProps, router }) {

  const [openMenu, setOpenMenu] = useState(false)
  const [openImgPreview, setOpenImgPreview] = useState(false)
  const [animate, setAnimations] = useState(false)

  // const router = useRouter()
  // console.log(Component);
  // console.log(Component.key);

  // const route = () => {
  //   if (router.route == "/") {
  //     return ""
  //   } else {
  //     return router.route
  //   }
  // }

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      // console.log(`Loading: ${url}`)
      NProgress.start()
      NProgress.set(0.5)
    })
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())

    if (!window.GA_INITIALIZED) {
      initGA("UA-131516762-1");
      window.GA_INITIALIZED = true;
    }

  }, [])

  // key={router.route == "/" ? "home" : router.route}

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <AppState.Provider
        value={{
          navMenu: [openMenu, setOpenMenu],
          showPreview: [openImgPreview, setOpenImgPreview],
          showAnimations: [animate, setAnimations],
        }}
      >
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </AppState.Provider>
    </ThemeProvider>
  )

}