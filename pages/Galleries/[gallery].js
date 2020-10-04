import Link from 'next/link'
import Layout from '../Layout';
import { useRouter } from 'next/router'
import { useEffect, useContext, useState } from 'react'
import { AppState } from '../../context/AppState'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import * as styles_var from '../../Styles/Variables'
import Masonry from 'react-masonry-css'
import MainGridStyle from '../../Styles/MainGridStyle'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//JSON Image data
import galleries_data from '../../public/json/galleries_data.json'

export async function getStaticProps({ params }) {

  const thisGallery = params.gallery

  const gridStyle = galleries_data.galleries.[thisGallery].thumbs;
  const layoutStyle = galleries_data.galleries.[thisGallery].layout;

  return {
    props: {
      galleryTitle: thisGallery,
      galleryStyle: gridStyle,
      galleryLayout: layoutStyle
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {

  // Get the paths we want to pre-render based on posts
  const paths = Object.entries(galleries_data.galleries).map(([key]) => ({
    params: { gallery: key },
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

export default function Gallery({ galleryTitle, galleryStyle, galleryLayout }) {

  const { navMenu, showAnimations } = useContext(AppState)
  const [openMenu, setOpenMenu] = navMenu
  const [toggleAnimate, setAnimate] = showAnimations

  const router = useRouter()

  let paths = []

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY
    const screenWidth = window.innerWidth

    if ((offset > 1) && (screenWidth < styles_var.tabletSizeValue)) {
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
    paths = Object.entries(galleries_data.galleries).map(([key]) => { return (key) })
    const index = paths.indexOf(galleryTitle)
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
      router.push(`/Galleries/[gallery]`, `/Galleries/${paths[(indexCheck[1] + 1)]}`, {shallow: false})
    } else if ((direction == "left") && (indexCheck[0] != "start")) {
      router.push(`/Galleries/[gallery]`, `/Galleries/${paths[(indexCheck[1] - 1)]}`, {shallow: false})
    } else {
      // console.log("click");
    }

  }


  const GalleryImages = galleries_data.galleries.[galleryTitle].images.map((imageData, index) => {
    return (
      <div key={index}
        className={galleryLayout == "column" ? "grid-item-single" : "grid-item"}
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
    <Gallery_Style>
      {/* <h1>079me</h1> */}
      
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
          <p>{galleries_data.galleries.[galleryTitle].title} Gallery</p>
        </div>
        <button
          className="gallery-button"
          onClick={(e) => goToGalleryButton(e, "right")}
        >
          <ArrowForwardIcon className="button-area" style={arrowButtonState("right")} />
        </button>
      </motion.div>

      <div className="description">
        {galleries_data.galleries.[galleryTitle].description == "" ?
          ""
          :
          <p>{galleries_data.galleries.[galleryTitle].description}</p>
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
            breakpointCols={galleryLayout == "column" ? singleBreakpoint : breakpointColumnsObj}
            className="grid"
            columnClassName={galleryLayout == "column" ? "grid-column-single" : "grid-column"}
          >
            {GalleryImages}
          </Masonry>
        </MainGridStyle>
      </motion.div>

    </Gallery_Style>
  )
}

const Gallery_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.gallery-header {
    background-color: ${styles_var.white_color};
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    user-select: none;
    top: 57px;
}

.content {
  margin-top: 44px;
}

.gallery-button {
    width: 44px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: none;
    padding: 0;
    padding-top: 0.3rem;
}

.gallery-button:hover {
    background-color: ${styles_var.gray_highlight};
    transition: 0.1s ease-in-out
}

.gallery-button:active {
    /* transform: scale(0.7); */
    background-color: ${styles_var.white_color};

    .button-area {
        /* pointer-events: none; */
        transform: scale(0.7);
    }

}

.description {
    background-color: ${styles_var.white_color};

p {
    font-size: 0.9rem;
}

}

.button-area {
    /* background: red; */
}

p {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    text-align: center;
}

.sticky-nav {
  position: fixed;
  /* padding-bottom: 1rem; */
  transition-duration: 1.2s;
  top: 58.38px;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  

.gallery-header {
  position: relative;
  top: 0;
}

.content {
  margin-top: 0;
}

.sticky-nav {
  position: fixed;
  /* padding-bottom: 1rem; */
  transition-duration: 1.2s;
  top: 68px;
}

.sticky-nav-aid {
  margin-top: 45px;
}

p {
    padding: 0.5rem 2rem;
}

}

@media only screen and (min-width: ${styles_var.desktop}) {

.gallery-header {
    position: fixed;
    top: 0;
    /* width: inherit; */
    /* width: ${widthinpx} */
    width: calc(100% - 240px);
}

.description {
    margin-top: 60px;

p {
    font-size: 0.9rem;
}

}

.grid {
    margin-top: 0;
}

p {
    padding: 1rem 1rem;
}

.gallery-button {
    width: 60px;
    /* padding-top: 1.2rem; */
}

}
`;