import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__brand">Broker Finder</Link>

            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/brokers">Brokers</Link>
                <Link to="/request-service">Request Service</Link>
                <Link to="/login" className="btn primary">Login</Link>
            </div>
        </nav>
    );
}
export default Navbar;
