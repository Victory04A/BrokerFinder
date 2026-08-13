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
<div className="detail-card">
                <h1>{broker.name}</h1>
                <p>Location: {broker.location}</p>
                <p>Specialty: {broker.specialty}</p>
                <p>Phone: {broker.phone}</p>
                <p>Email: {broker.email}</p>
                <p className="detail-card__desc">{broker.description}</p>

                <div className="detail-card__actions">
                    <Link to="/request-service" className="btn primary">Request Service</Link>
                    <Link to="/brokers" className="btn back">Back to Brokers</Link>
                </div>
            </div>
    );
}

export default BrokerDetails;
