import { useRouter } from 'next/router'
import Link from 'next/link'
import Style from './SidebarItem.styled'

function SidebarItem(props) {

    const router = useRouter()

    return (
        <Style>
            <Link href={props.link} shallow >
                <a>
                    <li className={`hover-transition ${router.pathname == props.link ? "active-item" : ""}`}>
                        <p className="sidebar-item">{props.item}</p>
                        {/* <h2 className="sidebar-item hover-transition"><Link href={props.link}><a>{props.item}</a></Link></h2> */}
                    </li>
                </a>
            </Link>
        </Style>
    )
}

export default SidebarItem
