import { Link } from "react-router-dom";

import BrokerTable from "../../components/BrokerTable";
import { brokers } from "../../data/brokers";

function ManageBrokers() {
    return (
        <div>
            <h1>Manage Brokers</h1>

            <BrokerTable brokers={brokers} />

            <Link to="/admin">Back to Dashboard</Link>
        </div>
    );
}

export default ManageBrokers;
