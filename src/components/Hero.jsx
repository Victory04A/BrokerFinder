function Hero({ name, title, description }) {
  return (
    <div>
      <h1>{title}</h1>

      <h2>Hello {name}</h2>

      <p>{description}</p>

      <button>Find Broker</button>
    </div>
  );
}

export default Hero;