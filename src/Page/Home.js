import * as React from "react";
import { useParams ,Link} from "react-router-dom";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import CarImg from '../img/car-vector.png';
import HomeImg from '../img/home-img.png';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Typography,
  Grid,
  Button,
  Container,
  Paper,
  TextField,
  Stack,
  CardContent,
  CardActions,
  Avatar,
  CardMedia,
} from "@mui/material";
import Handyman from "@mui/material/ListItemIcon";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Divider from "@mui/material/Divider";
import MainLayout from "../Component/MainLayout";
import "../Css/Button.css";
import "../Css/Card.css"
import { v4 as uuid } from 'uuid';


export default function Home() {
  let params = useParams();
  const client_id = uuid();
  const lineUrl = 'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=1tq7Xxsdp8l0QqfNXgC5u3&redirect_uri=http://localhost:3000/test&scope=notify&state=' + client_id

  // const handleOnClick = () => {
  //   window.location.href = "/booking";
  // };

  const handleOnClick = () => {
    window.location.href = lineUrl;
  };

  return (
    <Box sx={{ bgcolor: '#243040' }}>
      <MainLayout>
        <Box display={'grid'} justifyContent={'center'} sx={{ pt: 3, bgcolor: "#1a2138", pb: 5 }}>
          <Grid container spacing={2}>
            <Container  >
              <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 8, sm: 3 }}>
                  <Grid sx={{ color: 'white' }} textAlign={{ xs: 'center', sm: 'start' }} alignItems={{ xs: 'center', sm: 'start' }} direction={'column'} display={'flex'}>
                    <Typography variant="h2">Car-Q Services</Typography>
                    <Typography sx={{ pb: 2 }} variant="h5">Reservation Online</Typography>
                    <button onClick={handleOnClick} id="setEffectButton"> Booking </button>
                  </Grid>
                  <Grid  >
                    <img
                      sx={{ pt: 5 }}
                      className='responsive'
                      src={
                        HomeImg
                      }
                    />
                  </Grid>
                </Stack>
              </Grid>
            </Container>
          </Grid>
        </Box>
        <Box display={'grid'} justifyContent={'center'} alignItems={'center'} sx={{ pt: 8, bgcolor: "#1a2138", pb: 15 }}>
          <Grid container spacing={2}>
            <Container >
              <Grid pl={{ xs: 2, md: 0, sm: 2 }} item xs={12} md={12} lg={12} spacing={2}>
                <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <CardActions>
                      <Avatar sx={{ width: 54, height: 54, bgcolor: '#223353' }}>
                        <EditIcon sx={{ fontSize: 40, color: '#1a6ec3' }} />
                      </Avatar>
                    </CardActions>
                    <CardContent sx={{ color: 'white' }}>
                      <Typography variant="h5" component="div">
                        Booking
                      </Typography>
                      <Typography fontSize={14} color={'#7b808b'} variant="h6" component="div">
                        Enable clients to book services and repairs online via your website. New and existing clients have the ease and convenience of booking their car for service/repairs from the comfort of their own home.
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <CardActions>
                      <Avatar sx={{ width: 54, height: 54, bgcolor: '#223353' }}>
                        <SpatialTrackingIcon sx={{ fontSize: 40, color: '#1a6ec3' }} />
                      </Avatar>
                    </CardActions>
                    <CardContent sx={{ color: 'white' }}>
                      <Typography variant="h5" component="div">
                        Tracking
                      </Typography>
                      <Typography fontSize={14} color={'#7b808b'} variant="h6" component="div">
                        Clients who book either online, or over the phone will receive confirmation of their booking via email. This confirmation is linked to the users I-phone or android phone calendar, enabling the user to schedule their booking straight to their phone calendar.
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>

                    <CardActions>
                      <Avatar sx={{ width: 54, height: 54, bgcolor: '#223353' }}>
                        <NotificationsIcon sx={{ fontSize: 40, color: '#1a6ec3' }} />
                      </Avatar>
                    </CardActions>
                    <CardContent sx={{ color: '#eeeeef' }}>
                      <Typography variant="h5" component="div">
                        Notification
                      </Typography>
                      <Typography fontSize={14} color={'#7b808b'} variant="h6" component="div">
                        To stay in control of all client interaction, Auto Bookings Online is equip with the ability to remind clients of their service and registration due dates. This is done simply by logging reminder dates
                      </Typography>
                    </CardContent>
                  </Grid>

                </Stack>
              </Grid>
            </Container>
          </Grid>
        </Box>
        <Box display={'grid'} justifyContent={'center'} alignItems={'center'} sx={{ pt: 6, pb: 4, bgcolor: "#222b45" }}>
          <Grid container spacing={2}>
            <Container>
              <Grid pl={{ xs: 2, md: 0, sm: 2 }} item xs={12} md={12} lg={12} spacing={2}>
                <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <Grid className='card' item xs={12} md={6} component={Paper} elevation={6}
                      sx={{ pb: 2, bgcolor: '#2d364e' }}>
                      <Grid />
                      <Grid>
                        <CardMedia
                          // sx={{pb:2}}
                          component="img"
                          height="300"
                          width={300}
                          image={CarImg}
                        // alt="green iguana"
                        />
                        <Typography sx={{ pt: 1 }} color={'white'} variant="h4">
                          Admin side
                        </Typography>
                        <CardContent>
                          <Typography color={'#868687'} variant="h5" component="div">
                            Webbee will make your product look modern and professional while saving you precious time.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <Grid className='card' item xs={12} md={6} component={Paper} elevation={6}
                      sx={{ pb: 2, bgcolor: '#2d364e' }}>
                      <Grid />
                      <Grid>
                        <CardMedia
                          // sx={{pb:2}}
                          component="img"
                          height="300"
                          width={300}
                          image={CarImg}
                        // alt="green iguana"
                        />
                        <Typography sx={{ pt: 1 }} color={'white'} variant="h4">
                          Admin side
                        </Typography>
                        <CardContent>
                          <Typography color={'#868687'} variant="h5" component="div">
                            Webbee will make your product look modern and professional while saving you precious time.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <Grid className="card" item xs={12} md={6} component={Paper} elevation={8}
                      sx={{ pb: 2, bgcolor: '#2d364e' }}>
                      <Grid />
                      <Grid>
                        <CardMedia
                          // sx={{pb:2}}
                          component="img"
                          height="300"
                          width={300}
                          image={CarImg}
                        // alt="green iguana"
                        />
                        <Typography sx={{ pt: 1 }} color={'white'} variant="h4">
                          Admin side
                        </Typography>
                        <CardContent>
                          <Typography color={'#868687'} variant="h5" component="div">
                            Webbee will make your product look modern and professional while saving you precious time.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Container>
          </Grid>

        </Box>
        <Box display={'grid'} justifyContent={'center'} alignItems={'center'} sx={{ pt: 6, pb: 4, bgcolor: "#1a2138" }}>
          <Grid container spacing={2}>
            <Container>
              <Grid pl={{ xs: 2, md: 0, sm: 2 }} item xs={12} md={12} lg={12} spacing={2}>
                <Stack direction={'column'} spacing={2}>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <Grid item xs={12} md={6} component={Paper} elevation={6}
                      sx={{ pb: 2, bgcolor: '#2d364e' }}>
                      <Grid />
                      <Grid>
                        <CardMedia
                          // sx={{pb:2}}
                          component="img"
                          height="300"
                          width={300}
                          image={'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        // alt="green iguana"
                        />
                        <Typography sx={{ pt: 1 }} color={'white'} variant="h4">
                          Our Services
                        </Typography>
                        <CardContent>
                          <Typography color={'#868687'} variant="h5" component="div">
                            Webbee will make your product look modern and professional while saving you precious time.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Container>
          </Grid>
        </Box>

      </MainLayout>
    </Box>
  );
}
