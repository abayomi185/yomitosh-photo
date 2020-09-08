import { useEffect, useContext, useState } from 'react'
import { AppState } from '../context/AppState'
import Link from 'next/link'
import * as styles_var from '../Styles/Variables'
import MainGridStyle from '../Styles/MainGridStyle'
import Masonry from 'react-masonry-component'
import { useRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Preview from './Preview'

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

    const { navMenu, showPreview } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    const [openImgPreview, setOpenImgPreview] = showPreview

    let imageKey = 0

    const router = useRouter()

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    function push(imageURL, altText) {
        router.push({
            pathname: "/",
            query: { imageURL: imageURL, altText: altText }
        }, undefined, { shallow: true })
    }

    const HighlightsImages = highlights_data.Highlights.map((element, index) => {
        return (
            <div key={index}
                className="grid-item"
                // onClick={() => push(element.image, element.alt)}
                onClick={()=> {
                    setOpenImgPreview(!openImgPreview)
                    push(element.image, element.alt)
                    //Call another function here
                }}
            >
                <img src={element.image} />
            </div>
        );
    });


    //Experimental-----------



    //-------------------------


    return (
        <MainGridStyle>
            {/* <Masonry
                className={'grid'}
                elementType={'div'}
                options={masonryOptions}
            // disableImagesLoaded={false} // default false
            // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            // imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {HighlightsImages}
            </Masonry> */}

            <div className="flex-grid">
                {HighlightsImages}
            </div>

            {openImgPreview ? <Preview />: ""}

        </MainGridStyle>
    )
}