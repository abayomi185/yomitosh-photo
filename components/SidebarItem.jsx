import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components';
import * as styles_var from '../Styles/Variables'

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
        <SidebarItem_Style>
            <Link href={props.link} shallow >
                <a>
                    {/* <li className={`hover-transition ${router.pathname == props.link ? "active-item" : ""}`}> */}
                    <li className={`hover-transition ${checkPath()}`}>
                        <p className="sidebar-item">{props.item}</p>
                        {/* <h2 className="sidebar-item hover-transition"><Link href={props.link}><a>{props.item}</a></Link></h2> */}
                    </li>
                </a>
            </Link>
        </SidebarItem_Style>
    )
}

export default SidebarItem


//------------------Styles------------------

const SidebarItem_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

li {
  
}

li:hover {
  background-color: ${styles_var.coral_color};
}

.active-item {
  background-color: ${styles_var.coral_color};
}

p {
  font-size: 1rem;
  margin: 0;
  padding: 2.5% 0 2.5% 0;
  color: ${styles_var.black_color};
  text-align: center;
}

a {
  color: ${styles_var.black_color};
  text-decoration: none;
}

p:hover {
  color: ${styles_var.white_color};
}

}

@media only screen and (min-width: ${styles_var.tablet}) {

.active-item {
  p {
    color: ${styles_var.black_color};
    border-bottom: 3px solid ${styles_var.coral_color};
  }

  background-color: ${styles_var.white_color};

}

li:hover {
    background-color: ${styles_var.white_color};
}

p {
  padding: 7px;
}

p:hover {
  color: ${styles_var.lightgray_color};
}

}

@media only screen and (min-width: ${styles_var.desktop}) {

.active-item {
  p {
    color: ${styles_var.white_color};
    border-bottom: none;
  }

  background-color: ${styles_var.coral_color};

}

li {
  margin: 0 20px;
}

li:hover {
    background-color: ${styles_var.coral_color};
}

p {
  font-size: 1rem;
  padding: 2.5% 0 2.5% 20%;
  color: ${styles_var.black_color};
  text-align: left;
}

p:hover {
  color: ${styles_var.white_color};
}

}

`;