import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "./Component/Footer";
// import Timestamp = firebase.firestore.TimeStamp;   
export default function Booking() {
  const [fname, setFname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [plateNumber, setPlateNumber] = React.useState('');
  const [carbrand, setCarBrand] = React.useState('');
  const [dateTime, setDateTime] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [disableApplyButton, setDisableApplyButton] = React.useState(false);
  const axios = require("axios");
  const url = "http://192.168.1.144:8080";
  useEffect(() => {
    if (fname !== '' && lname !== '' && email !== '' && phoneNumber.length === 12 && phoneNumber.length !== '' && plateNumber !== '' && carbrand !== null && dateTime !== null && description !== '') {
      setDisableApplyButton(false)
    } else {
      setDisableApplyButton(true)
    }
  }, [fname, lname, email, phoneNumber, plateNumber, carbrand, dateTime, description]);

  const handlePhoneChange = (event) => {
    var val = event.target.value.replace(/[^0-9]/g, "");
    if (val[0] === "0") {
      let a = val;
      a = val.slice(0, 3);
      a += val.length > 3 ? "-" + val.slice(3, 6) : "";
      a += val.length > 6 ? "-" + val.slice(6) : "";
      val = a;
    } else {
      val = "";
    }
    setPhoneNumber(val);
  };

  const handleSubmit = event => {
    event.preventDefault();
    var data1 = {
      appointment_id: "id",
      task_id: [
        "task_id"
      ],
      task_id: [
        "ol11poxwuro7CSGed711th"
      ],
      user_id: 'userid',
      create_at: "d",
      starts_at: "w",
      ends_at: "w",
      plate_no: plateNumber,
      brand: carbrand,
      description: description,
      name: fname + lname,
      status: "pending",
      firstName: fname,
      lastName: lname,
      telephone: phoneNumber,
      // email: email,
      // age: 22,
    }

    var data2 = {
      appointment_id: "gnIYRmddOJmdrf70oqwE",
      task_id: [
        "ol11poxwuro7CSGed7th"
      ],
      user_id: "SxC0e6aMigpdRIP0Uybq",
      // create_at: {
      //   seconds: 1647059400,
      //   nanos: 0
      // },
      // starts_at: {
      //   seconds: 1647059400,
      //   nanos: 0
      // },
      // ends_at: {
      //   seconds: 1647174600,
      //   nanos: 0
      // },
      plate_no: plateNumber,
      brand: carbrand,
      description: description,
      status: "pending",
      name: fname + lname,
    }
    axios.post(url + "/a/create", data2).then((res) => {
      console.log(res);
      console.log(carbrand)
      // window.location.href = '/booking';
    });
  }

  // const handleSubmit = (event) => {
  //   alert('hello')
  //   console.log(fname)
  //   console.log(lname)
  //   console.log(email)
  //   console.log(phoneNumber)
  //   console.log(plateNumber)
  //   console.log(description)
  //   console.log(dateTime)
  //   event.preventDefault();


  // }
  return (
    <Box sx={{ flexGrow: 1, pl: 80, pr: 10}}>
            <Paper sx={{ pt: 10, p: 5, width: '666px' ,bgcolor:'grey'}}>
      <Typography variant="h5" noWrap component="div">
        Make new appointment
      </Typography>
      <Box  component="form" noValidate onSubmit={handleSubmit}>
        <Grid sx={{ pt: 3 }} container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="First Name"
              fullWidth
              maxRows={4}
              // value={value}
              onChange={(e) => setFname(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="Last Name"
              fullWidth
              maxRows={4}
              onChange={(e) => setLname(e.target.value)}
            // value={value}
            // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="Email"
              fullWidth
              maxRows={4}
              onChange={(e) => setEmail(e.target.value)}
            // value={value}
            // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="TEL"
              fullWidth
              maxRows={4}
              inputProps={{ maxLength: 12 }}
              // value={value}
              onChange={handlePhoneChange}
              value={phoneNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="Plate Number"
              fullWidth
              maxRows={4}
              onChange={(e) => setPlateNumber(e.target.value)}
            // value={value}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Car brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={carbrand}
                label="car brand"
                // onChange={handleChange}
                onChange={(e) => setCarBrand(e.target.value)}

              >
                <MenuItem value={"Honda"}>Honda</MenuItem>
                <MenuItem value={"Yamaha"}>Yamaha</MenuItem>
                <MenuItem value={"Toyota"}>Toyota</MenuItem>
                <MenuItem value={"Nissan"}>Nissan</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="datetime-local"
              fullWidth
              label="Date-Time"
              type="datetime-local"
              defaultValue="2022-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setDateTime(e.target.value)}

            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="Description"
              fullWidth
              maxRows={4}
              onChange={(e) => setDescription(e.target.value)}
            />

          </Grid>
          <Grid item xs={12} container spacing={2} justifyContent="flex-end">
            <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
              <Button>
                Cancel
              </Button>
              <Button

                type="submit"
                variant="contained"
                disabled={disableApplyButton}
              >Confirm</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      </Paper>
    </Box>

  );
}
