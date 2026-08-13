import { Link } from "react-router-dom";

import SearchForm from "../../components/SearchForm";

function ClientDashboard() {
    return (
        <div className="page">
            <h1>Client Dashboard</h1>

            <p className="page__lead">Find a broker and request a service below.</p>

            <SearchForm />

            <div className="action-links">
                <Link to="/brokers" className="btn outline">Browse Brokers</Link>
                <Link to="/client/requests" className="btn outline">My Requests</Link>
                <Link to="/client/profile" className="btn outline">Profile</Link>
            </div>
        </div>
    );
}

export default ClientDashboard;
