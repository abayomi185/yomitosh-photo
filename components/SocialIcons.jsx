import Link from 'next/link'
import styled from 'styled-components';
import * as styles_var from '../Styles/Variables'
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function SocialIcons(props) {

    const instagram = 'https://instagram.com/yomi185'
    const mail = 'mailto:yomitosh.photo@gamil.com'

    return (
        <SocialIcons_Style>
            <div className="icons">
                <a href={instagram} ><InstagramIcon className="social-icon hover-transition" style={{ color: styles_var.darkgray_color }}/></a>
                <a href={mail} ><MailOutlineIcon className="social-icon" style={{ color: styles_var.darkgray_color }} /></a>
            </div>
        </SocialIcons_Style>
    )
}

export default SocialIcons


//------------------Styles------------------

const SocialIcons_Style = styled.div`

@media only screen and (min-width: ${styles_var.mobile}) {

.social-icon {
  padding: 0 0.1rem;
}

.social-icon:hover {
  color: ${styles_var.coral_color} !important;
}

}

@media only screen and (min-width: ${styles_var.tablet}) {  

}
@media only screen and (min-width: ${styles_var.desktop}) {

.icons {
  text-align: center;
  padding-bottom: 0.2rem;
}

}

`;