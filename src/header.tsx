import './header_style.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand navTitle" href="/">
                        Candy Land Insights
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/infoSustancias">Información sustancias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/eventos">Eventos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/playlist">Playlist</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/multimedia">Multimedia</a>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-dark" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header;
