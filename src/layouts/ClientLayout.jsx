import { Outlet, Link } from "react-router-dom";

function ClientLayout() {
    return (
        <div className="layout">
            <nav className="dash-nav">
                <Link to="/">Home</Link>
                <Link to="/client">Dashboard</Link>
                <Link to="/client/requests">My Requests</Link>
                <Link to="/client/profile">Profile</Link>
            </nav>
            <main className="layout__main">
                <Outlet />
            </main>
        </div>
    );
}

export default ClientLayout;
