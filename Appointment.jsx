import { useState } from "react";

function Appointment() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    doctor: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Booked Successfully!");

    setForm({
      name: "",
      email: "",
      doctor: "",
      date: ""
    });
  };

  return (
    <section className="appointment" id="appointment">

      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>
          <option>Dr. Sarah Johnson</option>
          <option>Dr. Emily Smith</option>
          <option>Dr. Alex Brown</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Appointment</button>

      </form>

    </section>
  );
}

export default Appointment;