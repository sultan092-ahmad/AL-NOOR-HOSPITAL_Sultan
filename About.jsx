import hospital from "../images/hospital.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={hospital} alt="Hospital" />
      </div>

      <div className="about-text">
        <h2>About Our Hospital</h2>

        <p>
          AL-NOOR HOSPITAL provides modern healthcare services
          with experienced doctors and advanced medical facilities.
        </p>

        <p>
          Our mission is to provide quality treatment with care,
          trust and dedication for every patient.
        </p>

      </div>

    </section>
  );
}

export default About;