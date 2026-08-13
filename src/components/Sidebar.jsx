import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside>
            <nav>
                <Link to="/admin">Dashboard</Link>
                <Link to="/admin/brokers">Brokers</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/requests">Requests</Link>
                <Link to="/">Back to Site</Link>
            </nav>
        </aside>
    );
}
export default Sidebar;
