import Head from 'next/head'
import { useRouter, useContext } from 'next/router'
import { motion } from "framer-motion"
import Sidebar from '../components/Sidebar'
import { AppState } from '../context/AppState'

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

export default function Layout(props) {

  const router = useRouter()

  return (
      <div className="container">
        <Head>
          <title>Y O M I .</title>
          <link rel="icon" href="/favicon.ico" />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>

        <main>
          <nav>
            <Sidebar />
          </nav>

          <div className="content-area">
            {/* <div id="main-content" exit={{ opacity: 0 }} transition={{ duration: 2 }}> */}
            <div
              id="main-content"
              // key={router.route}
            >
              {props.children}
            </div>
          </div>

        </main>
      </div>
  )
}