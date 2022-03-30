import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import MainLayout from '../Component/MainLayout';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useEffect, useState } from "react";
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
    Container,
    Paper,
} from "@mui/material";
export default function BookingDate() {
    const [value, setValue] = React.useState(new Date());
    useEffect(() => {
        console.log(value)
    }, [
        value]);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <MainLayout>
            <Box justifyContent={'center'} sx={{ pt: 3, pb: 3, bgcolor: "gray" }}>
                <Grid container spacing={2}>
                    <Container  >
                        <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 8, sm: 3 }}>
                                <Typography variant="h2" color={'white'} > Select Date</Typography>
                            </Stack>
                            <Stack justifyContent={'center'} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 2, sm: 3 }}>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                                >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <StaticDatePicker
                                            disablePast
                                            displayStaticWrapperAs="desktop"
                                            openTo="day"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>

                                        <DateTimePicker
                                            disablePast
                                            label="Date&Time picker"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider> */}
                                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                </Paper>
                            </Stack>
                        </Grid>
                    </Container>
                </Grid>
            </Box>
        </MainLayout >

    );
}
