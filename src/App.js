import logo from './logo.svg';
import './App.css';
// import ResponsiveAppBar from "./ResponsiveAppBar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<Booking/>} />
        <Route path="home" element={<Home/>} />
        {/* <Route path=":title" element={<Home />} /> */}


      </Routes>
    </div>
  );
}

export default App;
