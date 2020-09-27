import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import styled from 'styled-components'
import * as styles_var from '../Styles/Variables'

export default function About() {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    return (
        <About_Style>
            {/* <h1>This is About me &#128521;</h1> */}
            <div className="card-div">
                <div>
                    <h1>Hmm. This page is also under construction. Please check back soon.</h1>
                </div>
            </div>
        </About_Style>
    )
}

const About_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.card-div {
    background: ${styles_var.white_color};
    margin: 2rem;
    border-radius: 0.5rem;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  



}

@media only screen and (min-width: ${styles_var.desktop}) {



}
`;