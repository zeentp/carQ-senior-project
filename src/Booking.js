import * as React from 'react';
import Box from '@mui/material/Box';  
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


export default function Booking() {
  const [brands, setBrand] = React.useState('');

  const handleChange = (event) => {
    setBrand(event.target.value);
  };
  return (

   
        <Box sx={{ flexGrow: 1 ,pl:40,pr:10}}>
             <Typography variant="h5" noWrap component="div">
            Make new appointment
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>

              <TextField
                id="standard-multiline-flexible"
                label="Client Name"
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
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item xs={6}
            >
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
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-multiline-flexible"
                label="Issue"
                fullWidth
                maxRows={4}
              // value={value}
              // onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              // sx={{ mt: "45px", width: 320 }}
              id="standard-multiline-flexible"
              label="Description"
              fullWidth
              maxRows={4}
            // value={value}
            // onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} 
            container spacing={2} 
            justifyContent="flex-end"
            > 
            
            <Stack direction="row" spacing={2} sx={{pt:2}}>
              <Button color="inherit" variant="contained">Cancel</Button>
              <Button variant="contained">Confirm</Button>
            </Stack>
       
      
            </Grid>
           
          </Grid>
        </Box>
  );
}