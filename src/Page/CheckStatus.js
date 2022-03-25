import React from 'react'
import MainLayout from '../Component/MainLayout'
import CarImg from '../img/car-vector.png';
import { Button, TextField, Stack, Grid, InputBase, Chip, Divider, Box, Paper, Card, CardMedia, Container, Typography, CardContent, CardHeader } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import HomeImg from '../img/home-img.png';
import { IconButton, InputAdornment } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
export default function CheckStatus() {
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [isAvaliable, setAvaliable] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const handleSubmit = () => {
        if(telephone.length===12){
            if(telephone==='089-111-5491'){
                setAvaliable('found')  
            }else{
            setAvaliable('notFound')
            }
        }else{
            setAlertOpen(true)
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
        
  

    return (
        <div>
                <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="warning" sx={{ width: '100%' }}>
                        Please fill the form
                    </Alert>
                </Snackbar>
                
            <MainLayout>
                <Box justifyContent={'center'} sx={{ pt: 3, pb: 3, bgcolor: "gray" }}>
                    <Grid container spacing={2}>
                        <Container  >
                            <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 8, sm: 3 }}>
                                    <Typography variant="h2" color={'white'} > Tracking</Typography>
                                </Stack>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 2, sm: 3 }}>
                                    {/* <TextField
                                        fullWidth={{sm:false,md:false,xs:false }}
                                        sx={{color:'red'}}
                                        placeholder="ค้นหา"
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton  >
                                                        <SearchIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    /> */}
                                    {/* <Button
                                        onClick={handleOnClick}
                                        type="submit"
                                        variant="contained"
                                    >
                                        Search
                                    </Button> */}
                                    <Paper
                                        component="form"
                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
                                    >
                                        {/* <IconButton sx={{ p: '10px' }} type="submit" aria-label="menu">
                                        </IconButton> */}
                                        <InputBase
                                            value={telephone}
                                            inputProps={{ maxLength: 12 }}
                                            onChange={handlePhoneChange}
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
                                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                        </IconButton>
                                    </Paper>
                                </Stack>
                            </Grid>
                        </Container>
                    </Grid>
                </Box>
                {/* <Box display={'grid'} justifyContent={'center'} sx={{ pt: 5 }}>
                    <Grid container spacing={2}>
                        <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
                            <TextField
                                placeholder="ค้นหา"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton  >
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                onClick={handleOnClick}
                                type="submit"
                                variant="contained"
                            >
                                Search
                            </Button>
                        </Stack>
                    </Grid>
                </Box> */}
            </MainLayout >
            {
                isAvaliable === 'found' ?
                    <Box>
                        <MainLayout>
                            <Box display={'grid'} justifyContent={'center'} sx={{ pt: 3, }}>
                                <Grid component={Paper} sx={{ bgcolor: "#1a2138" }} elevation={8} container spacing={2}>
                                    <Container  >
                                        <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                                            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 8, sm: 3 }}>
                                                <Grid sx={{ color: 'white' }} textAlign={{ xs: 'center', sm: 'start' }} alignItems={{ xs: 'center', sm: 'start' }} direction={'column'} display={'flex'}>
                                                    <Typography variant="h2">Your Appointment</Typography>
                                                    <Typography sx={{ pb: 2 }} variant="h5">Reservation Online</Typography>
                                                    <button id="setEffectButton"> Edit </button>
                                                </Grid>
                                                <Grid>
                                                    <CardContent>
                                                        <Box
                                                            sx={{ display: 'flex', p: 1, borderRadius: 1 }}
                                                        >
                                                            <Typography sx={{ flexGrow: 1, color: 'white' }} >Yong pond</Typography>
                                                            <Chip label="completed" color="success" />
                                                        </Box>
                                                        {/* <Grid display={'flex'} justifyContent={'flex-end'} spacing={2}>
                                                            <Typography sx={{color:'white'}}>
                                                                Your Booking
                                                            </Typography>
                                                            <Chip label="primary" color="primary" variant="outlined" />
                                                        </Grid> */}
                                                        <Divider sx={{ bgcolor: 'white' }}></Divider>
                                                        <CardContent>
                                                            <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={{xs:0,sm:4}}>
                                                                <Typography>
                                                                    brand : Toyota
                                                                </Typography>
                                                                <Typography>
                                                                    Telephone : 089-789-4448
                                                                </Typography>
                                                            </Stack>
                                                            <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={{xs:0,sm:4}}>
                                                                <Typography>
                                                                    Email : Jett@gmail.com
                                                                </Typography>
                                                                <Typography>
                                                                    Date: 09-03-2022 10:20
                                                                </Typography>
                                                            </Stack>
                                                        </CardContent>
                                                    </CardContent>
                                                </Grid>
                                            </Stack>
                                        </Grid>
                                    </Container>
                                </Grid>
                            </Box>
                        </MainLayout>
                    </Box>
                    : isAvaliable === 'notFound' ?
                    <Box>
                        <MainLayout>
                            <Box display={'grid'} justifyContent={'center'} sx={{ pt: 3, }}>
                                <Grid component={Paper} sx={{ bgcolor: "#1a2138" }} elevation={8} container spacing={2}>
                                    <Container  >
                                        <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                                            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 8, sm: 3 }}>
                                                <Grid sx={{ color: 'white' }} textAlign={{ xs: 'center', sm: 'start' }} alignItems={{ xs: 'center', sm: 'start' }} direction={'column'} display={'flex'}>
                                                    <Typography variant="h2">Your Appointment</Typography>
                                                    <Typography sx={{ pb: 2 }} variant="h5">Reservation Online</Typography>
                                                    <button id="setEffectButton"> Edit </button>
                                                </Grid>
                                                <Grid>
                                                    <CardContent>
                                                        <Box
                                                            sx={{ display: 'flex', p: 1, borderRadius: 1 }}
                                                        >
                                                            <Typography sx={{ flexGrow: 1, color: 'white' }} >not found</Typography>
                                                            <Chip label="not found" sx={{color:'red'}} />
                                                        </Box>
                                                        {/* <Grid display={'flex'} justifyContent={'flex-end'} spacing={2}>
                                                            <Typography sx={{color:'white'}}>
                                                                Your Booking
                                                            </Typography>
                                                            <Chip label="primary" color="primary" variant="outlined" />
                                                        </Grid> */}
                                                        <Divider sx={{ bgcolor: 'white' }}></Divider>
                                                        <CardContent>
                                                            <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={{xs:0,sm:4}}>
                                                                <Typography>
                                                                    brand : -
                                                                </Typography>
                                                                <Typography>
                                                                    Telephone : -
                                                                </Typography>
                                                            </Stack>
                                                            <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={{xs:0,sm:4}}>
                                                                <Typography>
                                                                    Email : -
                                                                </Typography>
                                                                <Typography>
                                                                    Date: -
                                                                </Typography>
                                                            </Stack>
                                                        </CardContent>
                                                    </CardContent>
                                                </Grid>
                                            </Stack>
                                        </Grid>
                                    </Container>
                                </Grid>
                            </Box>
                        </MainLayout>
                    </Box>
                    : <Box></Box>
            }
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
        </div >
    )

}
