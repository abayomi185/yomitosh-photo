import React, { useState } from 'react';
import Link from 'next/link'
import Sidebar_Style from './Sidebar.styled.jsx'
import BurgerMenu from '../Burger_component/Burger'
import SidebarItem from '../SidebarItem_component/SidebarItem'
import SocialIcons from '../SocialIcons_component/SocialIcons'

function Sidebar() {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Sidebar_Style openMenu={openMenu} setOpenMenu={setOpenMenu}>
            <div className="sidebar">

            <div className="sidebar-mobile-top">
                <div className="sidebar-brand">
                    <Link href="/"><a className="brand-link hover-transition"><h1 className="brand-name">Yomi.</h1></a></Link>
                </div>
                <div className="sidebar-burgermenu">
                    <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                </div>
            </div>
            

            <div className="sidebar-items">
                <ul>
                    <SidebarItem item="Highlights" link="" />
                    <SidebarItem item="Galleries" link="" />
                    <SidebarItem item="About Me" link="" />
                    <SidebarItem item="Contact" link="" />
                </ul>
            </div>
            <div className="social-icons">
                <SocialIcons />
            </div>
            <div className="sidebar-footer">
                <small className="copyright-text">Copyright &copy; All rights reserved</small>
            </div>
        </div>
        </Sidebar_Style>
        
    )
}

export default Sidebar
