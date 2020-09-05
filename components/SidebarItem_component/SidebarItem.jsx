import { useRouter } from 'next/router'
import Link from 'next/link'
import Style from './SidebarItem.styled'

function SidebarItem(props) {

    const router = useRouter()

    let path = props.link

    function pathStringCheck() {
        if (props.link.charAt(props.link.length-1) == "/") {
            // console.log(props.link.charAt(props.link.length-1));
            path = props.link.slice(props.link.length-1)
            // console.log(path);
        }
    }

    function checkPath() {

        pathStringCheck()

        if ((router.pathname == path) || (router.pathname == path + "Preview" )) {
            return ("active-item")
        } else {
            return ""
        }
    }

    return (
        <Style>
            <Link href={props.link} shallow >
                <a>
                    {/* <li className={`hover-transition ${router.pathname == props.link ? "active-item" : ""}`}> */}
                    <li className={`hover-transition ${checkPath()}`}>
                        <p className="sidebar-item">{props.item}</p>
                        {/* <h2 className="sidebar-item hover-transition"><Link href={props.link}><a>{props.item}</a></Link></h2> */}
                    </li>
                </a>
            </Link>
        </Style>
    )
}

export default SidebarItem
