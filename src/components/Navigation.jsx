import { Link, useLocation } from "react-router-dom";

const styles = {
  nav: {
    width: "100%",
  },
  navList: {
    display: "flex",
    justifyContent: 'flex-end',
    width: "100%",
  },
  brand: {
    fontFamily:'cursive'
  }
};

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg p-2" style={styles.nav}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={styles.brand}>Aipu Ameh</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav" style={styles.navList}>
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  currentPage === "/portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  currentPage === "/contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                to="/resume"
                className={
                  currentPage === "/resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
