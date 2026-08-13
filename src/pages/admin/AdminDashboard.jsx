import { Link } from "react-router-dom";

import { brokers } from "../../data/brokers";

function AdminDashboard() {
    return (
        <div className="page">
            <h1>Admin Dashboard</h1>

            <div className="stats">
                <div className="stat-card"><p className="stat-card__value">{brokers.length}</p><p className="stat-card__label">Total Brokers</p></div>
                <div className="stat-card"><p className="stat-card__value">12</p><p className="stat-card__label">Total Users</p></div>
                <div className="stat-card"><p className="stat-card__value">5</p><p className="stat-card__label">Pending Requests</p></div>
            </div>

            <div className="action-links">
                <Link to="/admin/brokers" className="btn outline">Manage Brokers</Link>
                <Link to="/admin/users" className="btn outline">Manage Users</Link>
                <Link to="/admin/requests" className="btn outline">View Requests</Link>
            </div>
        </div>
    );
}

export default AdminDashboard;
