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

export default function Booking() {
  const [brands, setBrand] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handlePhoneChange = (event) =>{
    var val = event.target.value.replace(/[^0-9]/g, '');
    if (val[0] === '0') {
      let a = val
      a = val.slice(0,3)
      a += (val.length > 3 ? "-" + val.slice(3,6) : '')
      a += (val.length > 6 ? "-" + val.slice(6) : '')
      val = a
    }else{
      val = ''
    }
    setPhoneNumber(val)
  };
  const handleChange = (event) => {
    setBrand(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1, pl: 40, pr: 10 }}>
      <Typography variant="h5" noWrap component="div">
        Make new appointment
      </Typography>
      <Grid sx={{ pt: 3 }} container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="standard-multiline-flexible"
            label="First Name"
            fullWidth
            maxRows={4}
            // value={value}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-multiline-flexible"
            label="Last Name"
            fullWidth
            maxRows={4}
            // value={value}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-multiline-flexible"
            label="Plate Number"
            fullWidth
            maxRows={4}
            // value={value}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            label="Date"
            type="date"
            fullWidth
            defaultValue="2022-02-20"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        
        
        <Grid item xs={6}>
          <TextField
            id="standard-multiline-flexible"
            label="Email"
            fullWidth
            maxRows={4}
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Car brand</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brands}
              label="car brand"
              onChange={handleChange}
            >
              <MenuItem value={"Honda"}>Honda</MenuItem>
              <MenuItem value={"Yamaha"}>Yamaha</MenuItem>
              <MenuItem value={"Toyoya"}>Toyoya</MenuItem>
              <MenuItem value={"Toyoya"}>Nissan</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            fullWidth
            maxRows={4}
            // value={value}
            // onChange={handleChange}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            // sx={{ mt: "45px", width: 320 }}
            id="standard-multiline-flexible"
            label="Description"
            fullWidth
            maxRows={4}
            // value={value}
            // onChange={handleChange}
          />
        </Grid> */}
        <Grid item xs={12} container spacing={2} justifyContent="flex-end">
          <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
            <Button color="inherit" variant="contained">
              Cancel
            </Button>
            <Button variant="contained">Confirm</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
