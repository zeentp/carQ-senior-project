import React from 'react'
import MainLayout from '../Component/MainLayout'
import CarImg from '../img/car-vector.png';
import { Button, TextField, Stack, Grid, InputBase, Chip, Divider, Box, Paper, Card, CardMedia, Container, Typography, CardContent, CardHeader } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import HomeImg from '../img/home-img.png';
import { IconButton, InputAdornment } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { URL as url } from '../Constants';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

const StyleChip = withStyles({
    root: {
        backgroundColor: 'grey'
    }
})(Chip);
export default function CheckStatus() {
    const axios = require("axios");

    const [alertOpen, setAlertOpen] = React.useState(false);
    const [isAvaliable, setAvaliable] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [user, setUser] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(null);



    async function getAppointment() {
        await axios.get(url + "/a/appointment/user?telephoneNum=" + telephone)
            .then(
                (result) => {
                    console.log(result)
                    const list = result.data.map((d) => d);
                    setUser(list);
                    setIsLoading(false)
                    if (list.length !== 0) {
                        setAvaliable('found')
                    } else {
                        setAvaliable('notFound')
                        setAlertOpen(true)
                    }
                })
        // if (user.length !== 0) {
        //     setAvaliable('found')
        // }
        // else {
        //     setAvaliable('notFound')
        //     setAlertOpen(true)
        // }

    }
    const handleSubmit = () => {
        setIsLoading(true)
        if (telephone.length === 10 && telephone.match(/^\d+$/) !== null) {
            getAppointment()
            //     if (user.length !== 0) {
            //         setAvaliable('found')
            //     } else {
            //         setAvaliable('notFound')
            //         setAlertOpen(true)
            //     }
            // } else {
            //     setAvaliable('empty')
            //     setAlertOpen(true)
        } else {

            setAvaliable('empty')
            setAlertOpen(true)
            setIsLoading(false)

        }
        console.log(isAvaliable)
    }
    const handlePhoneChange = (event) => {
        var val = event.target.value.replace(/[^0-9]/g, "");
        // console.log(val)
        if (val[0] === "0") {
            let a = val;
            a = val.slice(0, 3);
            a += val.length > 3 ? "-" + val.slice(3, 6) : "";
            a += val.length > 6 ? "-" + val.slice(6) : "";
            val = a;
        } else {
            val = "";
        }
        setTelephone(val);
    };
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };
    const formatDate = (d) => {
        const date = new Date(d * 1000).toLocaleString('fr-FR')
        return date
    }
    const formatPhone = (telephone) => {
        var val = telephone.replace(/[^0-9]/g, "");
        let a = val;
        a = val.slice(0, 3);
        a += val.length > 3 ? "-" + val.slice(3, 6) : "";
        a += val.length > 6 ? "-" + val.slice(6) : "";
        val = a;

        return val
    };


    return (
        <Box sx={{
            fontFamily: 'Raleway', 
        }}>
            <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleAlertClose}>
                {
                    isAvaliable === 'notFound' ? <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                        Not found.
                    </Alert> :
                        <Alert onClose={handleAlertClose} severity="warning" sx={{ width: '100%' }}>
                            Please Fill in the Correct Phone Number.
                        </Alert>
                }

            </Snackbar>
            <MainLayout>
                <Box justifyContent={'center'} display={'flex'} sx={{ pt: 0, pb: 3 }}>
                    <Grid spacing={2}>
                        <Box>
                            <Grid pt={12} pl={{ xs: 0, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                                <Stack  textAlign={'center'}>
                                    <Typography  variant="h2">Tracking</Typography>
                                <Divider></Divider>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 2, sm: 3 }} pt={3} >
                                    {/* <MainLayout isCard={true}> */}
                                    <Paper
                                        component="form"
                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 320, height: '70px' }}
                                    >
                                        {/* <IconButton sx={{ p: '10px' }} type="submit" aria-label="menu">
                                        </IconButton> */}
                                        <InputBase
                                            value={telephone}
                                            inputProps={{ maxLength: 10 }}
                                            // onChange={handlePhoneChange}
                                            onChange={(e) => setTelephone(e.target.value)}
                                            onKeyPress={(ev) => {
                                                console.log(`Pressed keyCode ${ev.key}`);
                                                if (ev.key === 'Enter') {
                                                    // Do code here
                                                    handleSubmit()
                                                    ev.preventDefault();
                                                }   
                                            }}
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Phone Number"
                                        />
                                        <IconButton
                                            onClick={handleSubmit}
                                            onChange={handlePhoneChange}
                                            // type="submit"
                                            sx={{ p: '10px' }}>
                                            <SearchIcon />
                                        </IconButton>
                                        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                                  
                                    </Paper>
                                    {/* </MainLayout> */}
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
                {isLoading && <LinearProgress />}
            </MainLayout >


            {/* <MainLayout isCard={true}> */}
            {
                isAvaliable === 'found' ?

                    user.map((a) => {
                        return (
                            <Box px={{xs:4 , sm:8}} sx={{ py: 2 }}>
                                <Paper elevation={6} sx={{ backgroundColor: 'white' }}>
                                    <Box sx={{ py: 2, px: 4 ,bgcolor:'#2c344c',color:'white'}} >
                                        <Typography variant='h5'>
                                            Appointments
                                        </Typography>
                                        <Typography> ID: {a.appointment_id} </Typography>
                                    </Box>
                                    <Divider></Divider>
                                    <Stack direction={{ xs: "column", sm: "column" }} px={4} pt={2} spacing={1}>
                                        <Grid display='flex' >
                                            <Grid pr={2} >
                                                {a.status === 'booking' ? <StyleChip color='primary' label={'booking'} /> :
                                                    <Chip label={a.status}
                                                        color={a.status === 'completed' ? "success" : a.status === 'on-track' ? "primary" : a.status === 'pending' ? 'secondary' : 'error'}
                                                    />
                                                }
                                            </Grid>
                                            <Grid   >
                                                <Typography>{a.name} </Typography>
                                            </Grid>

                                        </Grid>
                                        <Stack direction={{ xs: "column", sm: "row" }} >
                                            <Stack>
                                                <Typography>
                                                    Brand : {a.brand}
                                                </Typography>
                                                <Typography>
                                                    Plate Number : {a.plate_no}
                                                </Typography>
                                            </Stack>
                                            <Stack pl={{sm: 7 , xs:0}}>
                                                <Typography>
                                                    Description : {a.description}
                                                </Typography>
                                                <Typography>
                                                    BookingDate: {formatDate(a.starts_at.seconds)}
                                                </Typography>
                                            </Stack>
                                            <Stack pl={{sm: 7 , xs:0}}>
                                                <Typography>
                                                    Telephone : {a.telephone}
                                                </Typography>
                                                <Typography>
                                                    CreateDate: {formatDate(a.create_at.seconds)}
                                                </Typography>
                                            </Stack>
                                        </Stack>

                                        <Divider></Divider>

                                    </Stack>
                                </Paper>
                            </Box>

                            // <Typography>
                            //     {a.name}
                            // </Typography>


                            // <Box>
                            //     <MainLayout>
                            //         <Box display={'grid'} justifyContent={'center'} sx={{ pt: 3 }} pl={{ xs: 0, md: 2, sm: 0 }} >
                            //             <Grid component={Paper} sx={{ bgcolor: "#1a2138" }} elevation={8} container spacing={2}>
                            //                 <Container  >
                            //                     <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                            //                         <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 8, sm: 3 }}>
                            //                             <Grid sx={{ color: 'white' }} textAlign={{ xs: 'center', sm: 'start' }} alignItems={{ xs: 'center', sm: 'start' }} direction={'column'} display={'flex'}>
                            //                                 <Typography variant="h2">{a.name}</Typography>
                            //                                 <Typography sx={{ pb: 2 }} variant="h5">id: {a.appointment_id}</Typography>
                            //                                 {/* <button id="setEffectButton"> Edit </button> */}
                            //                             </Grid>
                            //                             <Grid>
                            //                                 <CardContent>

                            //                                     <Box
                            //                                         // sx={{ display: 'flex', p: 1, borderRadius: 1 }}
                            //                                     >
                            //                                           <Stack>

                            //                                             {a.status === 'booking' ? <StyleChip color='primary' label={'booking'} /> : 
                            //                                                 <Chip label={a.status}
                            //                                                     color={a.status === 'completed' ? "success" : a.status === 'on-track' ? "primary" : a.status === 'pending' ? 'secondary' : 'error'}
                            //                                                 />
                            //                                             }
                            //                                             </Stack>
                            //                                         {/* <Typography sx={{ flexGrow: 1, color: 'white' }} >{a.name}</Typography> */}
                            //                                         <Typography sx={{ flexGrow: 1, color: 'white' }} > Telephone : {formatPhone(a.telephone)}</Typography>

                            //                                     </Box>
                            //                                     {/* <Grid display={'flex'} justifyContent={'flex-end'} spacing={2}>
                            //                                 <Typography sx={{color:'white'}}>
                            //                                     Your Booking
                            //                                 </Typography>
                            //                                 <Chip label="primary" color="primary" variant="outlined" />
                            //                             </Grid> */}
                            //                                     <Divider sx={{ bgcolor: 'white' }}></Divider>
                            //                                     <CardContent>
                            //                                     <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "column" }} spacing={{ xs: 0, sm: 0 }}>
                            //                                             <Typography>
                            //                                                 Brand : {a.brand}
                            //                                             </Typography>
                            //                                             <Typography>
                            //                                                 PlateNumber : {a.plate_no}
                            //                                             </Typography>
                            //                                             <Typography>
                            //                                                 Brand : {a.brand}
                            //                                             </Typography>
                            //                                             <Typography>
                            //                                                 PlateNumber : {a.plate_no}
                            //                                             </Typography>
                            //                                         </Stack>
                            //                                         {/* <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0, sm: 4 }}>
                            //                                             <Typography>
                            //                                                 Brand : {a.brand}
                            //                                             </Typography>
                            //                                             <Typography>
                            //                                                 PlateNumber : {a.plate_no}
                            //                                             </Typography>
                            //                                         </Stack>
                            //                                         <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0, sm: 4 }}>
                            //                                             <Typography>
                            //                                                 Description : {a.description}
                            //                                             </Typography>
                            //                                             <Typography>
                            //                                                 Date: {formatDate(a.starts_at.seconds)}
                            //                                             </Typography>
                            //                                         </Stack> */}
                            //                                     </CardContent>
                            //                                 </CardContent>
                            //                             </Grid>
                            //                         </Stack>
                            //                     </Grid>
                            //                 </Container>
                            //             </Grid>
                            //         </Box>
                            //     </MainLayout>
                            // </Box>
                        );
                    })

                    : <Box></Box>
            }
            {/* </MainLayout> */}


            {/* // <MainLayout isCard={true}>
        //     <Grid>
        //         <CardMedia
        //             // sx={{pb:2}}
        //             component="img"
        //             height="300"
        //             width={300}
        //             image={CarImg}
        //         // alt="green iguana"
        //         />
        //         <Typography sx={{ pt: 1 }} variant="h4">
        //             Admin side
        //         </Typography>
        //         <CardContent>
        //             <Typography color={'#868687'} variant="h5" component="div">

        //             </Typography>
        //         </CardContent>
        //     </Grid>
        // </MainLayout>  */}
        </Box >
    )

}
