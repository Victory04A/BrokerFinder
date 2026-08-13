import { Link } from "react-router-dom";

const stats = { totalRequests: 8, approved: 4, pending: 3, rejected: 1 };

function BrokerDashboard() {
    return (
        <div>
            <h1>Broker Dashboard</h1>

            <div>
                <p>Total Requests: {stats.totalRequests}</p>
                <p>Approved: {stats.approved}</p>
                <p>Pending: {stats.pending}</p>
                <p>Rejected: {stats.rejected}</p>
            </div>

            <div>
                <Link to="/broker/requests">My Requests</Link>
                <Link to="/broker/requests/new">New Request</Link>
            </div>
        </div>
    );
}

export default BrokerDashboard;
