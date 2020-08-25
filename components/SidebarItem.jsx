import Link from 'next/link'
import Style from '../Styles/SidebarItem_Style'

function SidebarItem(props) {
    return (
        <Style>
            <Link href={props.link}>
                <a>
                    <li>
                        <p className="sidebar-item hover-transition">{props.item}</p>
                        {/* <h2 className="sidebar-item hover-transition"><Link href={props.link}><a>{props.item}</a></Link></h2> */}
                    </li>
                </a>
            </Link>
        </Style>
    )
}

export default SidebarItem
