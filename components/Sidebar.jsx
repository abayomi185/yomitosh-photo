import Link from 'next/link'
import Sidebar_Style from '../Styles/Sidebar_Style.jsx'
import SidebarItem from './SidebarItem'
import SocialIcons from './SocialIcons'

function Sidebar() {
    return (
        <Sidebar_Style>
            <div className="sidebar">

            <div className="sidebar-brand">
                <Link href="/"><a className="brand-link hover-transition"><h1 className="brand-name">Yomi.</h1></a></Link>
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
