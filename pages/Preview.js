import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import styled from 'styled-components';
import * as styles_var from '../Styles/Variables'

export default function Preview(props) {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    const router = useRouter()
    const { imageURL, altText } = router.query

    // console.log(router.query);

    if (altText != "") {
        var imageCaption = altText
    }

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
        window.scrollTo(0, 0)
    }, [])

    return (
        <PreviewStyle>
            <div className="imagePreview">
                <p className="header">This is a large image view. <a onClick={() => router.back()}>Go Back</a></p>
                <img src={imageURL} />
                <p className="caption">{imageCaption}</p>
            </div>
        </PreviewStyle>
    )
}



//------------------Styles------------------

const PreviewStyle = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.header {
    position: fixed;
    top: 58.3px;
}

.imagePreview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 53px;
}

img {
    width: 100%;
}

p {
    padding: 1rem 0;
    background: ${styles_var.white_color};
    width: inherit;
    text-align: center;
}

.caption {
    /* font-weight: bold; */
}

a {
    text-decoration: underline;
}

a:hover {
 cursor:pointer;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {

.header {
    position: static;
}

.imagePreview {
    margin-top: 0px;
}

}

@media only screen and (min-width: ${styles_var.desktop}) {
}

`;