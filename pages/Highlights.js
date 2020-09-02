import { useEffect, useContext, useState } from 'react'
import { AppState } from '../context/AppState'
import Link from 'next/link'
import * as styles_var from '../Styles/Variables'
import MainGridStyle from '../Styles/MainGridStyle'
import Masonry from 'react-masonry-component'


//Experimental------------------

// import MagicGrid from "magic-grid-react"

// import StackGrid from "react-stack-grid"

//---------------------------------


//JSON Image data
import highlights_data from '../public/json/highlights_data.json'

const masonryOptions = {
    transitionDuration: 200,
    itemSelector: '.grid-item',
    // columnWidth: 500,
    percentPosition: true,
    gutter: 0,
    // fitWidth: true
    // stagger: 100
};

export default function Highlights() {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    const HighlightsImages = highlights_data.Highlights.map((element, index) => {
        return (
            <div key={index} className="grid-item">
                <Link href="Preview" image={element.image} altText={element.alt} shallow >
                    <a>
                        <img src={element.image} />
                    </a>
                </Link>
            </div>
        );
    });


    //Experimental-----------



    //-------------------------


    return (
        <MainGridStyle>
            <Masonry
                className={'grid'}
                elementType={'div'}
                options={masonryOptions}
            // disableImagesLoaded={false} // default false
            // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            // imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {HighlightsImages}
            </Masonry>
        </MainGridStyle>
    )
}