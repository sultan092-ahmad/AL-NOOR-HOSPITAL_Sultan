import doctor1 from "../images/dt1.jpg";
import doctor2 from "../images/dt2.jpg";
import doctor3 from "../images/dt3.jpg";

function Doctors() {

  const doctors = [
    {
      id: 1,
      image: doctor1,
      name: "Dr. Sarah Johnson",
      speciality: "Cardiologist",
      experience: "10 Years"
    },
    {
      id: 2,
      image: doctor2,
      name: "Dr. Emily Smith",
      speciality: "Neurologist",
      experience: "8 Years"
    },
    {
      id: 3,
      image: doctor3,
      name: "Dr. Alex Brown",
      speciality: "Orthopedic",
      experience: "12 Years"
    }
  ];

  return (
    <section className="doctors" id="doctors">

      <h2>Our Doctors</h2>

      <div className="doctor-container">

        {doctors.map((doctor) => (

          <div className="doctor-card" key={doctor.id}>

            <img src={doctor.image} alt={doctor.name} />

            <h3>{doctor.name}</h3>

            <p>{doctor.speciality}</p>

            <p>{doctor.experience}</p>

            <button>Book Now</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Doctors;