import { Link } from "react-router-dom";

const users = [
    { id: 1, name: "Amina Juma", role: "Client", email: "amina@example.com" },
    { id: 2, name: "Peter Mushi", role: "Broker", email: "peter@example.com" },
    { id: 3, name: "Grace Komba", role: "Client", email: "grace@example.com" },
];

function ManageUsers() {
    return (
        <div className="page">
            <h1>Manage Users</h1>

            <div className="table-wrap">
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <Link to="/admin" className="btn back">Back to Dashboard</Link>
        </div>
    );
}

export default ManageUsers;
