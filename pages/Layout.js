import Head from 'next/head'
import { useRouter, useContext } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from '../components/Sidebar_component/Sidebar'
import { AppState } from '../context/AppState'

export default function Layout(props) {

  const router = useRouter()

  return (
    <>

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

          <div className="content-area">
            <motion.div id="main-content" exit={{ opacity: 0 }} transition={{ duration: 2 }}>
              {/* <h1>This is main and this is main two and this is main three</h1> */}
              {/* {router.pathname == "/" && <Highlights />} */}
              {props.children}
            </motion.div>
          </div>

        </main>
      </div>
    </>
  )
}