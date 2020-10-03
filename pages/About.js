import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import styled from 'styled-components'
import * as styles_var from '../Styles/Variables'
import AboutMD from './Markdown/About.md'

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
            <div className="about">
                <div className="card-div">
                    <div>
                        {/* <h1>Hmm. This page is also under construction. Please check back soon.</h1> */}
                        <AboutMD />
                    </div>
                </div>
            </div>
        </About_Style>
    )
}

const About_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

a {
    /* text-decoration: none; */
    color: #156596;
}

p {
    font-size: 1.1rem;
}

.about {
    display: flex;
    justify-content: center;
}

.card-div {
    background: ${styles_var.white_color};
    max-width: 700px;
    margin: 1rem 1rem;
    border-radius: 0.5rem;
    padding: 2rem 1rem;
}

strong {
    font-weight: 400;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  



}

@media only screen and (min-width: ${styles_var.desktop}) {




}
`;