import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components';
import * as styles_var from '../Styles/Variables'

function SidebarItem(props) {

  const router = useRouter()

  let path = props.link

  function checkPath() {
    
    if (router.pathname != "/") {
      path = path.replace("/", "");
      // console.log(path);
    }

    if (router.pathname.includes(path) && (path != "")) {
      return ("active-item")
    } else {
      return ""
    }

  }

  function changeRoute() {
    router.push(`${props.link}`)
  }

  return (
    <SidebarItem_Style>
      {/* <Link href={props.link} >
        <a> */}
        <button
          onClick={changeRoute}
        >
          {/* <li className={`hover-transition ${router.pathname == props.link ? "active-item" : ""}`}> */}
          <li className={`hover-transition ${checkPath()}`}>
            <p className="sidebar-item">{props.item}</p>
            {/* <h2 className="sidebar-item hover-transition"><Link href={props.link}><a>{props.item}</a></Link></h2> */}
          </li>
        </button>
        {/* </a>
      </Link> */}
    </SidebarItem_Style>
  )
}

export default SidebarItem


//------------------Styles------------------

export const SidebarItem_Style = styled.div`

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
  padding: 7px 5px;
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
  /* font-size: 1rem; */
  padding: 2.5% 0 2.5% 20%;
  color: ${styles_var.black_color};
  text-align: left;
}

p:hover {
  color: ${styles_var.white_color};
}

}

`;