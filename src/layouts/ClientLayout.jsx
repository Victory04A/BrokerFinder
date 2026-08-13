import { Outlet, Link } from "react-router-dom";

function ClientLayout() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/client">Dashboard</Link>
                <Link to="/client/requests">My Requests</Link>
                <Link to="/client/profile">Profile</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default ClientLayout;
