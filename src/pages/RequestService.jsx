import { Link } from "react-router-dom";

import { brokers, locations, specialties } from "../data/brokers";

function RequestService() {
    return (
        <div>
            <h1>Request a Service</h1>

            <form>
                <select>
                    <option>Select Broker</option>
                    {brokers.map((broker) => (
                        <option key={broker.id} value={broker.id}>
                            {broker.name}
                        </option>
                    ))}
                </select>

                <select>
                    <option>Select Location</option>
                    {locations.map((location) => (
                        <option key={location}>{location}</option>
                    ))}
                </select>

                <select>
                    <option>Select Specialty</option>
                    {specialties.map((specialty) => (
                        <option key={specialty}>{specialty}</option>
                    ))}
                </select>

                <textarea placeholder="Describe your request" />

                <button type="submit">Submit Request</button>
            </form>

            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default RequestService;
