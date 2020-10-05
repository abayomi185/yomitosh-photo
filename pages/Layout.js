import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { motion } from "framer-motion"
import Sidebar from '../components/Sidebar'
import { AppState } from '../context/AppState'

const mainVariant = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.9,
    transition: { ease: "easeOut", duration: 0.3, delay: 0.2 }
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5 }
  }
};

export default function Layout(props) {

  const router = useRouter()

  const { navMenu, showPreview, showAnimations } = useContext(AppState)
  const [toggleAnimate, setAnimate] = showAnimations

  return (
      <div className="container">
        <Head>
          <title>Y O M I .</title>
          <meta name="description" content="Photography Journey by Yomi." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* <meta name="robots" content="index, nofollow" /> */}
          <link rel="icon" href="/favicon.ico" />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>

        <main>
          <nav>
            <Sidebar />
          </nav>

          <div className="content-area">
            {/* <div id="main-content" exit={{ opacity: 0 }} transition={{ duration: 2 }}> */}
            <motion.div
              id="main-content"
              // key={router.route}
              // variants={mainVariant}
              // initial="initial"
              // animate="enter"
              // exit="initial"
            >
              {props.children}
            </motion.div>
          </div>

        </main>
      </div>
  )
}