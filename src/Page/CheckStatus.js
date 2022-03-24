import React from 'react'
import MainLayout from '../Component/MainLayout'
import CarImg from '../img/car-vector.png';
import { Button, TextField, Stack, Grid, InputBase, Chip, Divider, Box, Paper, Card, CardMedia, Container, Typography, CardContent, CardHeader } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import HomeImg from '../img/home-img.png';
import { IconButton, InputAdornment } from '@mui/material'
export default function CheckStatus() {
    const [isAvaliable, setAvaliable] = React.useState(false);
    const handleOnClick = () => {
        setAvaliable(true)
    }
    return (
        <div>

            <MainLayout>
                <Box justifyContent={'center'} sx={{ pt: 3, bgcolor: "gray" }}>
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
                                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                                        </IconButton>
                                        <InputBase
                                            onKeyPress={(ev) => {
                                                console.log(`Pressed keyCode ${ev.key}`);
                                                if (ev.key === 'Enter') {
                                                    // Do code here
                                                    handleOnClick()
                                                    ev.preventDefault();
                                                }
                                            }}
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Phone Number"
                                        />
                                        <IconButton
                                            onClick={handleOnClick}
                                            sx={{ p: '10px' }} aria-label="search">
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
                isAvaliable === true ?
                    <Box>
                        <MainLayout>
                            <Box display={'grid'} justifyContent={'center'} sx={{ pt: 3, }}>
                                <Grid component={Paper} sx={{ bgcolor: "#1a2138" }} elevation={8} container spacing={2}>
                                    <Container  >
                                        <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                                            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 8, sm: 3 }}>
                                                <Grid sx={{ color: 'white' }} textAlign={{ xs: 'center', sm: 'start' }} alignItems={{ xs: 'center', sm: 'start' }} direction={'column'} display={'flex'}>
                                                    <Typography variant="h2">Car-Q Services</Typography>
                                                    <Typography sx={{ pb: 2 }} variant="h5">Reservation Online</Typography>
                                                    <button onClick={handleOnClick} id="setEffectButton"> Booking </button>
                                                </Grid>
                                                <Grid>
                                                    <CardContent>
                                                        <Box
                                                            sx={{ display: 'flex', p: 1, borderRadius: 1 }}
                                                        >
                                                            <Typography sx={{ flexGrow: 1 ,color:'white'}} >Your Booking</Typography>
                                                            <Chip label="primary" color="success" />
                                                        </Box>
                                                        {/* <Grid display={'flex'} justifyContent={'flex-end'} spacing={2}>
                                                            <Typography sx={{color:'white'}}>
                                                                Your Booking
                                                            </Typography>
                                                            <Chip label="primary" color="primary" variant="outlined" />
                                                        </Grid> */}
                                                        <Divider sx={{ bgcolor: 'white' }}></Divider>
                                                        <CardContent>
                                                            <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={2}>
                                                                <Typography>
                                                                    FirstName : Jett
                                                                </Typography>
                                                                <Typography>
                                                                    LastName : Watch this
                                                                </Typography>
                                                            </Stack>
                                                            <Stack sx={{ color: 'white' }} direction={{ xs: "column", sm: "row" }} spacing={2}>
                                                                <Typography>
                                                                    FirstName : Jett
                                                                </Typography>
                                                                <Typography>
                                                                    LastName : Watch this
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
                    :
                    null
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
