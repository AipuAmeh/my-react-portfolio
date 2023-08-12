import { Link } from 'react-router-dom';
const style = {
    list: {
        listStyleType: 'none',
        display: "flex",
        flex: "wrap",
        justifyContent: "space-between"
    }
}

export default function Footer() {
    return (
        <footer className="social-sites" >
            <ul style={style.list}>
                <li>
                <Link
                to='https://twitter.com/home?lang=en'>Twitter</Link>
                    </li>
                <li>
                <Link to='https://github.com/AipuAmeh'>GitHub</Link>
                </li>
                <li>
                <Link to='https://www.linkedin.com/in/aipu-ameh-74928522a/'>LinkedIn</Link>
                </li>
            </ul>
        </footer>
    )
}