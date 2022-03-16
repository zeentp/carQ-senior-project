import logo from './logo.svg';
import './App.css';
// import ResponsiveAppBar from "./ResponsiveAppBar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";
import Navbar from './Navbar';
import Bar from './Component/Bar';

import Test from './Test';
import Footer from "./Component/Footer";
import Corousel from './Component/Corousel';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme(
  {

  },

);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />


        {/* <Navbar></Navbar> */}
        <Bar></Bar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="home" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="corousel" element={<Corousel />} />
        </Routes>
        {/* <Footer></Footer> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
