import Head from 'next/head'
import { useRouter } from 'next/router'
import { createContext } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../Styles/GlobalStyles'
import Sidebar from '../components/Sidebar_component/Sidebar'
import Highlights from './Highlights'

export default function Layout({ children }) {

  const router = useRouter()

  const appContext = createContext(null)

  // refactor branch

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <appContext.Provider value="experimental text">
        <AnimatePresence>

          <div className="container">
            <Head>
              <title>Y O M I .</title>
              <link rel="icon" href="/favicon.ico" />
              {/* Google Fonts */}
              <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&amp;family=Roboto+Slab:wght@300&amp;display=swap" rel="stylesheet"></link>
            </Head>

            <main>
              <nav>
                <Sidebar />
              </nav>


              <motion.div id="main-content" exit={{ opacity: 0 }} transition={{ duration: 2 }}>
                {/* <h1>This is main and this is main two and this is main three</h1> */}
                {router.pathname == "/" && <Highlights />}
                {children}
              </motion.div>
            </main>

            <footer>
            </footer>
          </div>

        </AnimatePresence>
      </appContext.Provider>
    </ThemeProvider>
  )
}
