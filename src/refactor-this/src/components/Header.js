import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const search = location.search;
    const cat = new URLSearchParams(search).get("category");
    return (
        <div className="hero_area">
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Photo Sharing App </a>
                            </li>
                        </ul>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className={"nav-item" + (cat === 'nature' ? " active" : "")}>
                                    <a className="nav-link" href="?category=nature">Nature</a>
                                </li>
                                <li className={"nav-item" + (cat === 'architecture' ? " active" : "")}>
                                    <a className="nav-link" href="?category=architecture">Architecture</a>
                                </li>
                                <li className={"nav-item" + (cat === 'fashion' ? " active" : "")}>
                                    <a className="nav-link" href="?category=fashion">Fashion</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        </div>
    );
}

export default Header;
