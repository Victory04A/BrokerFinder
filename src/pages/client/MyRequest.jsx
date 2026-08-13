import { Link } from "react-router-dom";

const requests = [
    { id: 1, title: "House for Sale", broker: "John Mwita", status: "Pending" },
    { id: 2, title: "Insurance Plan", broker: "Asha Hassan", status: "Approved" },
];

function MyRequest() {
    return (
        <div className="page">
            <h1>My Requests</h1>

            <div className="request-list">
                {requests.map((request) => (
                    <div className="request-card" key={request.id}>
                        <h3 className="request-card__title">{request.title}</h3>
                        <p>Broker: {request.broker}</p>
                        <span className={"status status--" + request.status.toLowerCase()}>{request.status}</span>
                    </div>
                ))}
            </div>

            <div className="action-links">
                <Link to="/request-service" className="btn primary">New Request</Link>
                <Link to="/client" className="btn back">Back to Dashboard</Link>
            </div>
        </div>
    );
}

export default MyRequest;
