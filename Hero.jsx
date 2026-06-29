import hero from "../images/mains.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">
        <h1>Your Health Is Our Priority</h1>

        <p>
          Book appointments with experienced doctors
          and get world-class healthcare services.
        </p>

        <button>Book Appointment</button>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Hospital" />
      </div>

    </section>
  );
}

export default Hero;