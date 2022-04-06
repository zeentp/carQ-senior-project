import logo from './logo.svg';
import './App.css';
// import ResponsiveAppBar from "./ResponsiveAppBar";
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from './Page/Home';
import Bar from './Component/Bar';
import Test from './Test';
import Corousel from './Component/Corousel';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from './Component/MainLayout';
import SkeletonBooking from './Page/SkeletonBooking';
import AppBarClient from './Component/AppBarClient';
// import BookingDate from './Page/BookingDate';
import CheckStatus from './Page/CheckStatus'
import BookingDate from './Page/DemoDate';
import HorizontalLinearStepper from './Page/booking';
import { useSearchParams } from "react-router-dom";
const theme = createTheme(
  {

  },

);
// http://localhost:3000/test?code=WnYuOlVZK17GtznWKht5iQ&state=68507f02-f49b-418e-bd59-32e9ac87a28f
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams2, setSearchParams2] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("code"))
    console.log(searchParams2.get("state"))
    console.log("/test?code=" + searchParams.get("code") + '&state=' +searchParams2.get("state"))

  }, [
  ]);


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
          <Route path={"/test?code=" + searchParams.get("code") + '&state='+searchParams2.get("state")} element={<Test />} />
          <Route path="corousel" element={<Corousel />} />
          <Route path="checkStatus" element={<CheckStatus />} />
          <Route path="booking" element={<HorizontalLinearStepper />} />

        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
