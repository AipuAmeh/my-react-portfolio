import { Link, useLocation } from 'react-router-dom'

const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    },
    }

function Nav() {
    const currentPage = useLocation().pathname

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-5">
        <div className="container-fluid">
          <Link className="navbar-brand">
            Aipu Ameh
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={styles.nav}>
              
              <li className="nav-item">
                <Link 
                to='/'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'} aria-current="page">
                  About Me
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                to='/portfolio'
                className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
              </li>

              <li className="nav-item">
                <Link
                to='/contact' 
                className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
              </li>
              
              <li className="nav-item">
                <Link
                to='/resume' 
                className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;