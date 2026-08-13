import { Link } from "react-router-dom";

const stats = { totalRequests: 8, approved: 4, pending: 3, rejected: 1 };

function BrokerDashboard() {
    return (
        <div className="page">
            <h1>Broker Dashboard</h1>

            <div className="stats">
                <div className="stat-card"><p className="stat-card__value">{stats.totalRequests}</p><p className="stat-card__label">Total Requests</p></div>
                <div className="stat-card"><p className="stat-card__value">{stats.approved}</p><p className="stat-card__label">Approved</p></div>
                <div className="stat-card"><p className="stat-card__value">{stats.pending}</p><p className="stat-card__label">Pending</p></div>
                <div className="stat-card"><p className="stat-card__value">{stats.rejected}</p><p className="stat-card__label">Rejected</p></div>
            </div>

            <div className="action-links">
                <Link to="/broker/requests" className="btn outline">My Requests</Link>
                <Link to="/broker/requests/new" className="btn primary">New Request</Link>
            </div>
        </div>
    );
}

export default BrokerDashboard;
