import * as React from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { Typography, Grid, Button, Container, Paper } from "@mui/material";
import Handyman from '@mui/material/ListItemIcon';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Divider from "@mui/material/Divider";
import Corousel from './Component/Corousel'



export default function Home() {
    let params = useParams();

    const handleOnClick = () => {
        window.location.href = '/booking';
    }
    return (
        <div>
            <Box sx={{ pl: 40, pb: 10}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h1">
                            Car-Q Services
                        </Typography>
                        <Typography variant="h5">
                            Reservation Online
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundImage: 'url(https://source.unsplash.com/random)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                        <Button type="submit"
                            onClick={handleOnClick}
                            variant="contained">
                            Booking
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                pl: 30, pb: 10,
            }}>
                <Grid  container spacing={2}>
                    <Grid sx={{justifyContent:'center',display:'flex'}} item xs={12}>
                        <Corousel></Corousel>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    );

}