function BrokerCard({ id,name, location, specialty, phone }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Specialty: {specialty}</p>
      <p>Phone: {phone}</p>

      <button>Contact Broker</button>
    </div>
  );
}

export default BrokerCard;