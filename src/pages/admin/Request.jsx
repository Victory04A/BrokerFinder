import { Link } from "react-router-dom";

const requests = [
    { id: 1, client: "Amina Juma", broker: "John Mwita", status: "Pending" },
    { id: 2, client: "Peter Mushi", broker: "Asha Hassan", status: "Approved" },
    { id: 3, client: "Grace Komba", broker: "James Kimaro", status: "Rejected" },
];

function Request() {
    return (
        <div>
            <h1>Service Requests</h1>

            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Broker</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td>{request.client}</td>
                            <td>{request.broker}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="/admin">Back to Dashboard</Link>
        </div>
    );
}

export default Request;
