import { useEffect, useContext, useState } from 'react'
import { AppState } from '../context/AppState'
import Link from 'next/link'
import * as styles_var from '../Styles/Variables'
import MainGridStyle from '../Styles/MainGridStyle'
import { useRouter } from 'next/router'
import Preview from './Preview'
import Masonry from 'react-masonry-css'
import { motion } from "framer-motion"

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
  default: 3,
  2160: 2,
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

export default function Highlights() {

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

  return (
    <MainGridStyle>

      <motion.div
        variants={mainVariant}
        initial="initial"
        animate="enter"
        exit="initial"
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="grid"
          columnClassName="grid-column"
        >
          {HighlightsImages}
        </Masonry>
      </motion.div>

    </MainGridStyle>
  )
}