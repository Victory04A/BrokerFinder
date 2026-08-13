import { Link } from "react-router-dom";

const requests = [
    { id: 1, title: "House for Sale", broker: "John Mwita", status: "Pending" },
    { id: 2, title: "Insurance Plan", broker: "Asha Hassan", status: "Approved" },
];

function MyRequest() {
    return (
        <div>
            <h1>My Requests</h1>

            <div>
                {requests.map((request) => (
                    <div key={request.id}>
                        <h3>{request.title}</h3>
                        <p>Broker: {request.broker}</p>
                        <p>Status: {request.status}</p>
                    </div>
                ))}
            </div>

            <Link to="/request-service">New Request</Link>
            <Link to="/client">Back to Dashboard</Link>
        </div>
    );
}

export default MyRequest;
