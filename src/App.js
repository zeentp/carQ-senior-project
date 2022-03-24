import logo from './logo.svg';
import './App.css';
// import ResponsiveAppBar from "./ResponsiveAppBar";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home';
import Bar from './Component/Bar';
import Test from './Test';
import Corousel from './Component/Corousel';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from './Component/MainLayout';
import SkeletonBooking from './Page/SkeletonBooking';
import AppBarClient from './Component/AppBarClient';
import BookingDate from './Page/BookingDate';


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
        <AppBarClient></AppBarClient>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="booking" element={<Booking />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="corousel" element={<Corousel />} />
          <Route path="booking" element={<SkeletonBooking />} />
          <Route path="bookingDate" element={<BookingDate />} />

        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
