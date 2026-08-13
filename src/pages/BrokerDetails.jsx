import { useParams, Link } from "react-router-dom";

import { brokers } from "../data/brokers";

function BrokerDetails() {
    const { id } = useParams();
    const broker = brokers.find((b) => b.id === Number(id));

    if (!broker) {
        return (
            <div>
                <h1>Broker Not Found</h1>
                <Link to="/brokers">Back to Brokers</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{broker.name}</h1>
            <p>Location: {broker.location}</p>
            <p>Specialty: {broker.specialty}</p>
            <p>Phone: {broker.phone}</p>
            <p>Email: {broker.email}</p>
            <p>{broker.description}</p>

            <Link to="/request-service">Request Service</Link>
            <Link to="/brokers">Back to Brokers</Link>
        </div>
    );
}

export default BrokerDetails;
