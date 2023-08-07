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
                <li>Twitter</li>
                <li>Github</li>
                <li>LinkedIn</li>
            </ul>
        </footer>
    )
}