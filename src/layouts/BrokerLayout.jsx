import { Outlet, Link } from "react-router-dom";

function BrokerLayout() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/broker">Dashboard</Link>
                <Link to="/broker/requests">My Requests</Link>
                <Link to="/broker/requests/new">New Request</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default BrokerLayout;
