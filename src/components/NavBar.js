import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    return(
        <div id="menuTaurus">                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">Taurus</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="paraEl.html">Para el</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="paraElla.html">Para ella</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="carrito.html">Carrito</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contacto.html">Contacto</a>
                            </li>
                        </ul>
                </div>
                    </div>
                </nav>
            </div>
    );
}

export default NavBar;