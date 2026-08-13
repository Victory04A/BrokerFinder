import { Link } from "react-router-dom";

import SearchForm from "../../components/SearchForm";

function ClientDashboard() {
    return (
        <div>
            <h1>Client Dashboard</h1>

            <p>Find a broker and request a service below.</p>

            <SearchForm />

            <div>
                <Link to="/brokers">Browse Brokers</Link>
                <Link to="/client/requests">My Requests</Link>
                <Link to="/client/profile">Profile</Link>
            </div>
        </div>
    );
}

export default ClientDashboard;
