import Layout from './Layout';
import { useEffect, useContext } from 'react'
import { AppState } from '../context/AppState'


export default function Highlights() {
    
    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })
        setOpenMenu(false)
      }, [])
      
    return (
        <div>
            <h1>This is highlights 1</h1>
            <h1>This is highlights 2</h1>
            <h1>This is highlights 3</h1>
            <h1>This is highlights 4</h1>
            <h1>This is highlights 5</h1>
            <h1>This is highlights 6</h1>
            <h1>This is highlights 7</h1>
            <h1>This is highlights 8</h1>
            <h1>This is highlights 9</h1>
            <h1>This is highlights 10</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
            <h1>This is highlights</h1>
        </div>
    )
}