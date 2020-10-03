import Link from 'next/link'
import Layout from './Layout';
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import { AnimatePresence } from 'framer-motion'
import GalleryGridStyle from '../Styles/GalleryGridStyle'
import * as styles_var from '../Styles/Variables'
import Masonry from 'react-masonry-css'

//JSON Image data
import galleries_data from '../public/json/galleries_data.json'
import galleries_data2 from '../public/json/old_galleries_data.json'

const breakpointColumnsObj = {
    default: 4,
    2160: 3,
    1366: 2,
    [styles_var.tabletSizeValue]: 1
};

export default function Galleries(props) {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    const router = useRouter()

    const currentPath = router.pathname

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
    }, [])

    function goToGallery(title) {
        router.push({
            pathname: `${currentPath}/${title}`,
            // pathname: `${currentPath}/Gallery`,
            // query: {title: title}
        })
    }

    const Galleries = Object.entries(galleries_data.galleries).map(([key, value]) => {
        // console.log(key);
        // console.log(value.thumbnail_images);
        return (
            <div key={key}
                // className="grid-item"
                className="gallery-item"
                // onClick={() => push(element.image, element.alt)}
                onClick={() => {
                    // setOpenImgPreview(!openImgPreview)
                    // push(element.image, element.alt)
                    //Call another function here
                    // imageClick(element.image, element.alt)
                    goToGallery(key)
                }}
            >
                <div className="rectangle">
                    {value.thumbnail_images.map((thumbnail, index) => {
                        return (
                            <div key={index} className="thumbnail-div" style={{ backgroundImage: `url(${thumbnail})` }}>
                                {/* <img className={`image${index}`} src={thumbnail} /> */}
                            </div>
                        )
                    })}

                </div>
                <h1 className="hover-transition">{key}</h1>
            </div>
        );
    });

    return (

        <GalleryGridStyle>
            {/* <h1>This is my domain!</h1> */}
            {/* <h1>It seems like I'm still developing this page. Please check again soon.</h1> */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="gallery-grid"
                columnClassName="gallery-grid-column"
            >
                {Galleries}
            </Masonry>
        </GalleryGridStyle>

    )
}