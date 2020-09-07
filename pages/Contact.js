import Link from 'next/link'
import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'

export default function Contact() {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    return (
        <div>
            {/* <h1>079me</h1> */}
            <h2>Web development isn't as easy as I thought. Please check this page again soon.</h2>
            <h1>You can contact me on instagram in the mean time. <a href="instagram.com/yomi185">@Yomi185</a></h1>
        </div>
    )
}