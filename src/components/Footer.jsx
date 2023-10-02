import { Link } from 'react-router-dom';
const style = {
    list: {
        listStyleType: 'none',
        display: "flex",
        flex: "wrap",
        justifyContent: "space-between"
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: '1.25em'
    }
}

export default function Footer() {
    return (
        <footer className="social-sites " >
            <ul className='footer-list' style={style.list}>
                <li>
                <Link
                style={style.link} 
                to='https://twitter.com/home?lang=en'>Twitter</Link>
                    </li>
                <li>
                <Link 
                style={style.link}  
                to='https://github.com/AipuAmeh'>GitHub</Link>
                </li>
                <li>
                <Link 
                style={style.link} 
                to='https://www.linkedin.com/in/aipu-ameh-74928522a/'>LinkedIn</Link>
                </li>
            </ul>
        </footer>
    )
}