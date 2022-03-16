import logo from './logo.svg';
import './App.css';
// import ResponsiveAppBar from "./ResponsiveAppBar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";
import Navbar from './Navbar';
import Test from './Test';
import Footer from "./Component/Footer";
import Corousel from './Component/Corousel';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<Booking/>} />
        <Route path="home" element={<Home/>} />
        <Route path="test" element={<Test/>} />
        <Route path="corousel" element={<Corousel/>} />
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
