function BrokerTable({ brokers = [] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Specialty</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {brokers.map((broker, index) => (
                    <tr key={index}>
                        <td>{broker.name}</td>
                        <td>{broker.location}</td>
                        <td>{broker.specialty}</td>
                        <td>{broker.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default BrokerTable;
