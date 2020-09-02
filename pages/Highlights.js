import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'
import MainGridStyle from '../Styles/MainGridStyle'
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Masonry from 'react-masonry-component'

//JSON Image data
import highlights_data from '../public/json/highlights_data.json'

const masonryOptions = {
    transitionDuration: 200,
    itemSelector: '.grid-item',
    // columnWidth: 200,
    percentPosition: true,
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
                <img src={element.image} />
            </div>
        );
    });

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