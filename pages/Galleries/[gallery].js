import Link from 'next/link'
import Layout from '../Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../../context/AppState'
import styled from 'styled-components';
import * as styles_var from '../../Styles/Variables'

export default function Contact() {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    return (
        <Gallery_Style>
            {/* <h1>079me</h1> */}
            <h2>This is a specific route</h2>
        </Gallery_Style>
    )
}

const Gallery_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {



}

@media only screen and (min-width: ${styles_var.tablet}) {  



}

@media only screen and (min-width: ${styles_var.desktop}) {



}
`;