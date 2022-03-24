import React from "react";
import MainLayout from "../Component/MainLayout";
import { useEffect, useState } from "react";
import { URL as url } from '../Constants';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Box,
  Grid,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { v4 as uuid } from 'uuid';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// function BasicDatePicker() {
//   const [value, setValue] = React.useState(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label="Basic example"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }
export default function SkeletonBooking() {
  const appointment_id = uuid();
  const user_id = uuid();

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [plateNumber, setPlateNumber] = React.useState("");
  const [carbrand, setCarBrand] = React.useState("");
  const [dateTime, setDateTime] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isAvaliable,setAvaliable] = React.useState(false);
  const [disableApplyButton, setDisableApplyButton] = React.useState(false);
  const axios = require("axios");
  useEffect(() => {
    if (
      dateTime !== null 
    ) {
      setDisableApplyButton(false);
    } else {
      setDisableApplyButton(true);
    }
  }, [
    fname,
    lname,
    email,
    phoneNumber,
    plateNumber,
    carbrand,
    dateTime,
    description,
  ]);

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

  const handleSubmit = (event) => {
      setAvaliable(true)
    event.preventDefault();
    var data1 = {
      appointment_id: "id",
      task_id: ["task_id"],
      task_id: ["ol11poxwuro7CSGed711th"],
      user_id: "userid",
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
    };

    var data2 = {
      appointment_id: appointment_id,
      // task_id: '',
      user_id: user_id,
      plate_no: plateNumber,
      brand: carbrand,
      description: description,
      status: "pending",
      firstName: fname,
      lastName: lname,
      email: email,
      telephone: phoneNumber,
      starts_at: 'dateTime',
    };
    console.log(dateTime);
    // Date.parse("2022-03-21 10:17:51")/1000;
    // axios.post(url + "/a/createDetail", data2).then((res) => {
    //   console.log(dateTime);
    //   console.log(res);
    //   window.location.href = '/home';
    // });
  };

  return (
    <div>
      <MainLayout isCard={true}>
        <Card  >
          <CardHeader title="Select Date" />
          <CardContent>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                "& .MuiTextField-root": { width: "25ch" },
                "& .MuiSelect-select": { width: "20ch" },
              }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} spacing={2}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    pb={2}>
                 
                    <Grid>
                      <TextField
                        id="datetime-local"
                        label="Date-Time"
                        type="date"
                        defaultValue={new Date().toISOString().slice(0, 16)}
                        inputProps={{
                          min: new Date().toISOString().slice(0, 16),
                          max: "2022-03-28T00:00"
                        }}
                        InputLabelProps={{
                          shrink: true, 

                        }}
                        onChange={(e) => setDateTime(e.target.value)}
                      />
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent={{ xs: "center", sm: "flex-end" }}>
                <Stack direction="row" spacing={1} sx={{ pt: 2 }}>
                  <Button>Cancel</Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={disableApplyButton}>
                    Confirm
                  </Button>
                </Stack>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </MainLayout>
      {
          isAvaliable === true ?  
        
          <MainLayout isCard={true}>
                <MainLayout>
                <CardContent>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  "& .MuiTextField-root": { width: "25ch" },
                  "& .MuiSelect-select": { width: "20ch" },
                }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12} spacing={2}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      pb={2}>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="First Name"
                          maxRows={4}
                          // value={value}
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </Grid>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Last Name"
                          maxRows={4}
                          onChange={(e) => setLname(e.target.value)}
                        // value={value}
                        // onChange={handleChange}
                        />
                      </Grid>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      pb={2}>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Email"
                          maxRows={4}
                          onChange={(e) => setEmail(e.target.value)}
                        // value={value}
                        // onChange={handleChange}
                        />
                      </Grid>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="TEL"
                          maxRows={4}
                          inputProps={{ maxLength: 12 }}
                          // value={value}
                          onChange={handlePhoneChange}
                          value={phoneNumber}
                        />
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </MainLayout>
          <Card  >
            <CardHeader title="Make Appointment" />
            <CardContent>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  "& .MuiTextField-root": { width: "25ch" },
                  "& .MuiSelect-select": { width: "20ch" },
                }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12} spacing={2}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      pb={2}>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="First Name"
                          maxRows={4}
                          // value={value}
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </Grid>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Last Name"
                          maxRows={4}
                          onChange={(e) => setLname(e.target.value)}
                        // value={value}
                        // onChange={handleChange}
                        />
                      </Grid>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      pb={2}>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Email"
                          maxRows={4}
                          onChange={(e) => setEmail(e.target.value)}
                        // value={value}
                        // onChange={handleChange}
                        />
                      </Grid>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="TEL"
                          maxRows={4}
                          inputProps={{ maxLength: 12 }}
                          // value={value}
                          onChange={handlePhoneChange}
                          value={phoneNumber}
                        />
                      </Grid>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      pb={2}>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Plate Number"
                          maxRows={4}
                          onChange={(e) => setPlateNumber(e.target.value)}
                        // value={value}
                        />
                      </Grid>
                      <Grid>
                        <FormControl>
                          <Box>
                            <InputLabel id="demo-simple-select-label">
                              Car brand
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={carbrand}
                              label="car brand"
                              // onChange={handleChange}
                              onChange={(e) => setCarBrand(e.target.value)}>
                              <MenuItem value={"Honda"}>Honda</MenuItem>
                              <MenuItem value={"Yamaha"}>Yamaha</MenuItem>
                              <MenuItem value={"Toyota"}>Toyota</MenuItem>
                              <MenuItem value={"Nissan"}>Nissan</MenuItem>
                            </Select>
                          </Box>
                        </FormControl>
                      </Grid>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      pb={2}>
                      <Grid>
                        <TextField
                          id="standard-multiline-flexible"
                          label="Description"
                          maxRows={4}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Grid>
                   
                      <Grid>
                        <TextField
                          id="datetime-local"
                          label="Date-Time"
                          type="datetime-local"
                          defaultValue={new Date().toISOString().slice(0, 16)}
                          inputProps={{
                            min: new Date().toISOString().slice(0, 16),
                            max: "2022-03-28T00:00"
                          }}
                          InputLabelProps={{
                            shrink: true, 
  
                          }}
                          onChange={(e) => setDateTime(e.target.value)}
                        />
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  justifyContent={{ xs: "center", sm: "flex-end" }}>
                  <Stack direction="row" spacing={1} sx={{ pt: 2 }}>
                    <Button>Cancel</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={disableApplyButton}>
                      Confirm
                    </Button>
                  </Stack>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </MainLayout> :
        <box></box>
      }
     
    </div>
  );
}
