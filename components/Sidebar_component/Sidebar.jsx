import { useState, useContext, useEffect } from 'react';
import Link from 'next/link'
import { AppState } from '../../context/AppState'
import * as styles_var from '../../Styles/Variables'
import Sidebar_Style from './Sidebar.styled.jsx'
import BurgerMenu from '../Burger_component/Burger'
import SidebarItem from '../SidebarItem_component/SidebarItem'
import SocialIcons from '../SocialIcons_component/SocialIcons'

export default function Sidebar() {

    const { navMenu } = useContext(AppState)
    const [openMenu, setOpenMenu] = navMenu

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY
        const screenWidth = window.innerWidth
        if ((offset > 64.19) && (screenWidth < styles_var.desktopSizeValue)) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

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

    return (
        <Sidebar_Style openMenu={openMenu} setOpenMenu={setOpenMenu}>
            <div className="sidebar">

                <div className={`sidebar-mobile-top ${stickyNavAidClass}`}>
                    <div className="sidebar-brand">
                        <Link href="/"><a className="brand-link hover-transition"><h1 className="brand-name">Yomi.</h1></a></Link>
                    </div>
                    <div className="sidebar-burgermenu">
                        <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    </div>
                </div>


                <div className={`sidebar-items ${stickyNavClass}`}>
                    <ul>
                        <SidebarItem item="Highlights" link="/" />
                        <SidebarItem item="Galleries" link="/Galleries" />
                        <SidebarItem item="About Me" link="/About" route="About" />
                        <SidebarItem item="Contact" link="/Contact" />
                    </ul>
                </div>
                
                <div className="sidebar-footer hover-transition">
                    <div className="social-icons">
                        <SocialIcons />
                    </div>
                    <div className="sidebar-footer-text">
                        <small className="copyright-text">Copyright &copy; All rights reserved</small>
                    </div>
                </div>

            </div>
        </Sidebar_Style>

    )
}