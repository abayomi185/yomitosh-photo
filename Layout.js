import Head from 'next/head'
import { useRouter } from 'next/router'
import Sidebar from '../components/Sidebar_component/Sidebar'

export default function Layout({children}) {

  const router = useRouter()

  return (
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
          <div id="main-content">
            {/* <h1>This is main and this is main two and this is main three</h1> */}
            {children}
          </div>
        </main>

        <footer>
        </footer>
      </div>
  )
}