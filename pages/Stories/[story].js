import Link from 'next/link'
import Layout from '../Layout';
import { useRouter } from 'next/router'
import { useEffect, useContext, useState } from 'react'
import { AppState } from '../../context/AppState'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import * as styles_var from '../../Styles/Variables'
import Masonry from 'react-masonry-css'
import Gallery_View_Style from '../../Styles/GalleryViewStyle'
import MainGridStyle from '../../Styles/MainGridStyle'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//JSON Image data
import stories_data from '../../public/json/stories_data.json'

export async function getStaticProps({ params }) {

  const thisGallery = params.story;

  const gridStyle = stories_data.stories.[thisGallery].thumbs;
  const layoutStyle = stories_data.stories.[thisGallery].layout;

  return {
    props: {
      storyTitle: thisGallery,
      storyStyle: gridStyle,
      storyLayout: layoutStyle
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {

  // Get the paths we want to pre-render based on posts
  const paths = Object.entries(stories_data.stories).map(([key]) => ({
    params: { story: key },
  }))
  // console.log(paths);

  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}

const breakpointColumnsObj = {
  default: 3,
  2160: 2,
  [styles_var.tabletSizeValue]: 1
};

const singleBreakpoint = {
  default: 1
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
}

const subVariant = {
  initial: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.3 }
  },
  enter: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 }
  }
}

const width = 800;
let widthinpx = `${width}px`

export default function Story({ storyTitle, storyStyle, storyLayout }) {

  const { navMenu, showAnimations } = useContext(AppState)
  const [openMenu, setOpenMenu] = navMenu
  const [toggleAnimate, setAnimate] = showAnimations

  const router = useRouter()

  let paths = []

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY
    const screenWidth = window.innerWidth

    if ((offset > 1) && (screenWidth < styles_var.tabletSizeValue) && (screenWidth < styles_var.desktopSizeValue)) {
      setScrolled(true);
    } else if ((offset > 113) && (screenWidth < styles_var.desktopSizeValue)) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    // Always do navigations after the first render
    //router.push('/?counter=10', undefined, { shallow: true })
    setOpenMenu(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

  })

  let stickyNavClass = []
  let stickyNavAidClass = []


  if (scrolled) {
    stickyNavClass.push('sticky-nav')
    stickyNavAidClass.push('sticky-nav-aid')
  }

  const arrowStyleActive = {
    color: styles_var.coral_color
  }

  const arrowStyleInactive = {
    color: styles_var.black_color
  }

  function galleryPathCheck() {
    paths = Object.entries(stories_data.stories).map(([key]) => { return (key) })
    const index = paths.indexOf(storyTitle)
    const size = paths.length

    if (index == 0) {
      return ["start", 0]
    } else if (index == size - 1) {
      return ["end", size - 1]
    } else {
      return ["mid", index]
    }
  }

  function arrowButtonState(direction) {

    const indexCheck = galleryPathCheck()

    if ((indexCheck[0] == "start") && (direction == "left")) {
      return arrowStyleInactive
    } else if ((indexCheck[0] == "end") && (direction == "right")) {
      return arrowStyleInactive
    } else {
      return arrowStyleActive
    }
  }

  function goToGalleryButton(event, direction) {

    const indexCheck = galleryPathCheck()

    if ((direction == "right") && (indexCheck[0] != "end")) {
      router.push(`/Stories/[story]`, `/Stories/${paths[(indexCheck[1] + 1)]}`)
    } else if ((direction == "left") && (indexCheck[0] != "start")) {
      router.push(`/Stories/[story]`, `/Stories/${paths[(indexCheck[1] - 1)]}`)
    } else {
      // console.log("click");
    }

  }

  const GalleryImages = stories_data.stories.[storyTitle].images.map((imageData, index) => {

    return (
      <div key={index}
        className={storyLayout == "column" ? "grid-item-single" : "grid-item"}
        // onClick={() => push(element.image, element.alt)}
        onClick={() => {
          // setOpenImgPreview(!openImgPreview)
          // push(element.image, element.alt)
          //Call another function here
          // imageClick(element.image, element.alt)
        }}
      >
        <img src={imageData.image} alt={imageData.alt} />
      </div>
    );
  });

  return (
    <Gallery_View_Style>

      <motion.div
        className={`gallery-header ${stickyNavClass}`}
        variants={subVariant}
        initial="initial"
        animate="enter"
        exit="initial"
      >
        <button
          className="gallery-button"
          onClick={(e) => goToGalleryButton(e, "left")}
        >
          <ArrowBackIcon className="button-area" style={arrowButtonState("left")} />
        </button>
        <div>
          <p>{stories_data.stories.[storyTitle].title}</p>
        </div>
        <button
          className="gallery-button"
          onClick={(e) => goToGalleryButton(e, "right")}
        >
          <ArrowForwardIcon className="button-area" style={arrowButtonState("right")} />
        </button>
      </motion.div>

      <div className="description">
        {stories_data.stories.[storyTitle].description == "" ?
          ""
          :
          <p>{stories_data.stories.[storyTitle].description}</p>
        }

      </div>

      <motion.div
        variants={toggleAnimate ? mainVariant : null}
        initial="initial"
        animate="enter"
        exit="initial"
      >
        <MainGridStyle className={`${stickyNavAidClass} content`}>
          <Masonry
            breakpointCols={storyLayout == "column" ? singleBreakpoint : breakpointColumnsObj}
            className="grid"
            columnClassName={storyLayout == "column" ? "grid-column-single" : "grid-column"}
          >
            {GalleryImages}
          </Masonry>
        </MainGridStyle>
      </motion.div>

    </Gallery_View_Style>
  )
}