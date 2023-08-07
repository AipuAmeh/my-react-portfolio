export default function Header() {
    return (
        <header>
           <nav className="navbar navbar-expand-lg bg-body-tertiary m-auto p-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DesignsByAipu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </header>
        
    )
}