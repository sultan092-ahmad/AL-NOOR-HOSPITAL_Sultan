function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>AL-NOOR HOSPITAL</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#appointment">Appointment</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;