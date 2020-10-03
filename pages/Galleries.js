import Link from 'next/link'
import Layout from './Layout';
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import { motion } from 'framer-motion';
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

const mainVariant = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.9,
    transition: { ease: "easeOut", duration: 0.3 }
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5 }
  }
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
      <motion.button key={key}
        className="gallery-item"
        onClick={() => { goToGallery(key) }}
      >
        <div className="rectangle">
          {value.thumbnail_images.map((thumbnail, index) => {
            return (
              <div key={index} className="thumbnail-div" style={{ backgroundImage: `url(${thumbnail})` }} />
            )
          })}

        </div>
        <h1 className="hover-transition">{value.title}</h1>
      </motion.button>
    );
  });

  return (

    <GalleryGridStyle>
      {/* <h1>This is my domain!</h1> */}
      {/* <h1>It seems like I'm still developing this page. Please check again soon.</h1> */}

      <motion.div
        variants={mainVariant}
        initial="initial"
        animate="enter"
        exit="initial"
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery-grid"
          columnClassName="gallery-grid-column"
        >
          {Galleries}
        </Masonry>
      </motion.div>
    </GalleryGridStyle>

  )
}