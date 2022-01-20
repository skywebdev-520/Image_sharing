import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const search = location.search;
    const cat = new URLSearchParams(search).get("category");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Photo Sharing App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className={"nav-link" + (cat === 'nature' ? " active" : "")} href="?category=nature">Nature <span className="sr-only">(current)</span></a>
                    <a className={"nav-link" + (cat === 'architecture' ? " active" : "")} href="?category=architecture">Architecture</a>
                    <a className={"nav-link" + (cat === 'fashion' ? " active" : "")} href="?category=fashion">Fashion</a>
                </div>
            </div>
        </nav >
    );
}

export default Header;
