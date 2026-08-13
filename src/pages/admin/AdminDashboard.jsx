import { Link } from "react-router-dom";

import { brokers } from "../../data/brokers";

function AdminDashboard() {
    return (
        <div>
            <h1>Admin Dashboard</h1>

            <div>
                <p>Total Brokers: {brokers.length}</p>
                <p>Total Users: 12</p>
                <p>Pending Requests: 5</p>
            </div>

            <div>
                <Link to="/admin/brokers">Manage Brokers</Link>
                <Link to="/admin/users">Manage Users</Link>
                <Link to="/admin/requests">View Requests</Link>
            </div>
        </div>
    );
}

export default AdminDashboard;
