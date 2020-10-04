import { useEffect, useContext, useState } from 'react'
import { AppState } from '../context/AppState'
import Link from 'next/link'
import * as styles_var from '../Styles/Variables'
import MainGridStyle from '../Styles/MainGridStyle'
import { useRouter } from 'next/router'
import Preview from './Preview'
import Masonry from 'react-masonry-css'

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

const breakpointColumnsObj = {
    [styles_var.tabletSizeValue]: 1
};

console.log(breakpointColumnsObj);

export default function CollectionView() {

    const { navMenu, showPreview } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    const [openImgPreview, setOpenImgPreview] = showPreview

    const router = useRouter()

    const currentPath = router.pathname

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

    function imageClick(image, alt) {

        push(image, alt)
        setOpenImgPreview(!openImgPreview)
        goBack()
    }

    function goBack() {
        if (openImgPreview == true) {
            router.push({
                pathname: currentPath
            })
        }
    }

    const HighlightsImages = highlights_data.Highlights.map((element, index) => {
        return (
            <div key={index}
                className="grid-item"
                // onClick={() => push(element.image, element.alt)}
                onClick={() => {
                    // setOpenImgPreview(!openImgPreview)
                    // push(element.image, element.alt)
                    //Call another function here
                    // imageClick(element.image, element.alt)
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

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="grid"
                columnClassName="grid-column"
            >
                {HighlightsImages}
            </Masonry>

            <div className="grid-container">
                
                {/* <div className="flex-grid">
                    {HighlightsImages}
                </div> */}

                {/* {openImgPreview ? <Preview backFunc={goBack} /> : <div className="flex-grid">
                    {HighlightsImages}
                </div>} */}
            </div>


        </MainGridStyle>
    )
}