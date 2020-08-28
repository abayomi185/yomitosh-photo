import Link from 'next/link'
import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import { AnimatePresence } from 'framer-motion';

export default function Galleries(props) {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
      }, [])

    return (
        <AnimatePresence exitBeforeEnter>
            <div>
                <h1>This is my domain!</h1>
            </div>
        </AnimatePresence>
    )
}