import Head from 'next/head'
import { useRouter } from 'next/router'
import { createContext } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import GlobalStyle from '../Styles/GlobalStyles'
import Sidebar from '../components/Sidebar_component/Sidebar'
import Highlights from './Highlights'
import Layout from './Layout'

export default function Home() {

  const router = useRouter()

  // refactor branch

  return (
        <AnimatePresence>

        <Highlights />
        
        </AnimatePresence>
  )
}
