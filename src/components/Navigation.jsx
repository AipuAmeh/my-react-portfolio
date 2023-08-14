import { Link, useLocation } from 'react-router-dom'

const styles = {
    nav: {
      width: "100%"
    },
    navList: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    }
    }

function Nav() {
    const currentPage = useLocation().pathname

    return (
        <nav  className="navbar navbar-expand-lg p-5" style={styles.nav}>
        <div className="container-fluid">
          <Link className="navbar-brand">
            Aipu Ameh
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={styles.navList}>
              
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