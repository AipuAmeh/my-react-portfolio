import { Link } from 'react-router-dom';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
    list: {
        listStyleType: 'none',
        display: "flex",
        flex: "wrap",
        justifyContent: "space-between"
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
    icon: {
        height: '2.5em'
    }
}

export default function Footer() {
    return (
        <footer className="social-sites " >
            <ul className='footer-list' style={style.list}>
                <li>
                <Link
                style={style.link} 
                to='https://twitter.com/home?lang=en'><FontAwesomeIcon style={style.icon} icon={faTwitter} /></Link>
                    </li>
                <li>
                <Link 
                style={style.link}  
                to='https://github.com/AipuAmeh'><FontAwesomeIcon style={style.icon} icon={faGithub} /></Link>
                </li>
                <li>
                <Link 
                style={style.link} 
                to='https://www.linkedin.com/in/aipu-ameh-74928522a/'><FontAwesomeIcon style={style.icon} icon={faLinkedin} /></Link>
                </li>
            </ul>
        </footer>
    )
}