import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'

export default function About() {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
      }, [])

    return (
            <div>
                {/* <h1>This is About me &#128521;</h1> */}
                <h1>Hmm. This page is also under construction. Please check back soon.</h1>
            </div>
    )
}