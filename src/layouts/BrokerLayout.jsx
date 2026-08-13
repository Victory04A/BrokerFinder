import { Outlet, Link } from "react-router-dom";

function BrokerLayout() {
    return (
        <div className="layout">
            <nav className="dash-nav">
                <Link to="/">Home</Link>
                <Link to="/broker">Dashboard</Link>
                <Link to="/broker/requests">My Requests</Link>
                <Link to="/broker/requests/new">New Request</Link>
            </nav>
            <main className="layout__main">
                <Outlet />
            </main>
        </div>
    );
}

export default BrokerLayout;
