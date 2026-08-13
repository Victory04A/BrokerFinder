import { Link } from "react-router-dom";

const users = [
    { id: 1, name: "Amina Juma", role: "Client", email: "amina@example.com" },
    { id: 2, name: "Peter Mushi", role: "Broker", email: "peter@example.com" },
    { id: 3, name: "Grace Komba", role: "Client", email: "grace@example.com" },
];

function ManageUsers() {
    return (
        <div>
            <h1>Manage Users</h1>

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

            <Link to="/admin">Back to Dashboard</Link>
        </div>
    );
}

export default ManageUsers;
