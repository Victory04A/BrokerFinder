import { Link } from "react-router-dom";

import BrokerTable from "../../components/BrokerTable";
import { brokers } from "../../data/brokers";

function ManageBrokers() {
    return (
        <div className="page">
            <h1>Manage Brokers</h1>

            <div className="table-wrap">
                <BrokerTable brokers={brokers} />
            </div>

            <Link to="/admin" className="btn back">Back to Dashboard</Link>
        </div>
    );
}

export default ManageBrokers;
