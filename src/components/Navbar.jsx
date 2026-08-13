import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2>
                <Link to="/">Broker Finder</Link>
            </h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/brokers">Brokers</Link>
                <Link to="/request-service">Request Service</Link>
                <Link to="/login">Login</Link>
                
            </div>
        </nav>
    );
}
export default Navbar;
