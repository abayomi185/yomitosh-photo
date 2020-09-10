import Link from 'next/link'
import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import { AnimatePresence } from 'framer-motion'
import GalleryGridStyle from '../Styles/GalleryGridStyle'
import * as styles_var from '../Styles/Variables'
import Masonry from 'react-masonry-css'

//JSON Image data
import galleries_data from '../public/json/gallery_data.json'

const breakpointColumnsObj = {
    default: 1,
    [styles_var.tabletSizeValue]: 2,
    [styles_var.mobileSizeValue]: 1
};

export default function Galleries(props) {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    const Galleries = galleries_data.galleries.map((element, index) => {
        return (
            <div key={index}
                // className="grid-item"
                className="gallery-item"
                // onClick={() => push(element.image, element.alt)}
                onClick={() => {
                    // setOpenImgPreview(!openImgPreview)
                    // push(element.image, element.alt)
                    //Call another function here
                    // imageClick(element.image, element.alt)
                }}
            >
                <div className="rectangle"> </div>
                <h1>{element.title}</h1>
            </div>
        );
    });


    return (

        <GalleryGridStyle>
            {/* <h1>This is my domain!</h1> */}
            {/* <h1>It seems like I'm still developing this page. Please check again soon.</h1> */}
            <Masonry
                breakpointCols={2}
                className="gallery-grid"
                columnClassName="gallery-grid-column"
            >
                {Galleries}
            </Masonry>
        </GalleryGridStyle>

    )
}