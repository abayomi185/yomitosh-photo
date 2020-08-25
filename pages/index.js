import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../Styles/Global_Style'
import Sidebar from '../components/Sidebar'
import { variables } from '../Styles/Variables'

export default function Home() {
  return (
    <ThemeProvider theme={variables}>
    {/* <ThemeProvider theme={{ mode: 'light' }}></ThemeProvider> */}
      <GlobalStyle />
      <div className="container">
        <Head>
          <title>Y O M I .</title>
          <link rel="icon" href="/favicon.ico" />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&amp;family=Roboto+Slab:wght@300&amp;display=swap" rel="stylesheet"></link>
        </Head>
        <main>
          <Sidebar />
          <h1>This is main</h1>
        </main>

        <footer>
        </footer>
      </div>
    </ThemeProvider>
  )
}
