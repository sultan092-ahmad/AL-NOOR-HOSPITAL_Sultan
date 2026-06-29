import { useState } from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Doctors from "./component/Doctors";
import Appointment from "./component/Appointment";
import Footer from "./component/Footer";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Doctors />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;