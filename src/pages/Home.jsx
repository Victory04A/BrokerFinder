import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import BrokerCard from "../components/BrokerCard";
import { brokers } from "../data/brokers";

function Home() {
    return (
        <div>
            <Hero
                name="Welcome"
                title="Broker Finder"
                description="Find the right broker for your service."
            />

            <SearchBar />

            <div>
                {brokers.slice(0, 3).map((broker) => (
                    <BrokerCard
                        key={broker.id}
                        name={broker.name}
                        location={broker.location}
                        specialty={broker.specialty}
                        phone={broker.phone}
                    />
                ))}
            </div>

            <Link to="/brokers">View All Brokers</Link>
        </div>
    );
}

export default Home;
