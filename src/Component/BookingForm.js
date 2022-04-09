
import React, { useEffect, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputMask from "react-input-mask";
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    Grid,
    Stack,
    Card,
    CardHeader,
    CardContent,
    Box,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from "@mui/material";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import MainLayout from "../Component/MainLayout";
import { te } from "date-fns/locale";
const BookingForm = () => {

    useEffect(() => {

    }, [
    ]);
    const { control } = useFormContext();
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const handlePhoneChange = (event) => {
        console.log(phoneNumber)
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

        // value = val
        setPhoneNumber(val)
        // console.log(value)
        return val
    };
    const allowOnlyNumber = (value) => {
        return value.replace(/[^0-9]/g, '')
    }

    return (
        <MainLayout isCard={true}>
            <Card>
                <CardHeader title="Make Appointment" />
                <CardContent>
                    <Grid item xs={12} md={12} lg={12}
                    // sx={{
                    //     "& .MuiSelect-select": { width: "20ch" },
                    // }}
                    >
                        <Grid >
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}>

                                <Controller
                                    control={control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <TextField
                                            required
                                            id="first-name"
                                            label="First Name"
                                            variant="outlined"
                                            placeholder="Enter Your First Name"
                                            {...field}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <TextField
                                            required
                                            id="last-name"
                                            label="Last Name"
                                            variant="outlined"
                                            placeholder="Enter Your Last Name"
                                            // margin="normal"
                                            {...field}
                                        />
                                    )}
                                />
                            </Stack>
                        </Grid>
                        <Grid pt={2} >
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}>
                                <Controller
                                    control={control}
                                    name="plateNumber"
                                    render={({ field }) => (
                                        <TextField
                                            required
                                            id="Plate-number"
                                            label="Plate Number"
                                            variant="outlined"
                                            placeholder="Enter Your Plate Number"
                                            {...field}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="telephone"
                                    render={({ field }) => (
                                        <TextField
                                            error
                                            helperText={'test'}
                                            required
                                            error={field.value.match(/^\d+$/) === null && field.value !== '' ? true : field.value.length === 10 || field.value.length === 0 ? null : true}
                                            // helperText={field.value.length === 10 || field.value.length === 0 ? null : '0'}
                                            helperText={field.value.match(/^\d+$/) === null && field.value !== '' ? 'please input number only' : field.value.length === 10 || field.value.length === 0 ? null : 'please fill 10 digits'}
                                            // helperText={field.value.match(/^\d+$/) === null ? field.value !== '' ? 'plase input number only' : field.value.length === 10 || field.value.length === 0 ? null : '0' : '2'}
                                            id="telephone"
                                            label="telephone"
                                            variant="outlined"
                                            placeholder="Enter Your Telephone"
                                            inputProps={{ maxLength: 10 }}
                                            // onInput = {(e) => handlePhoneChange(e)}
                                            {...field}
                                        />
                                    )}
                                />
                            </Stack>
                        </Grid>
                        <Grid pt={2}>
                            <Controller
                                control={control}
                                name="emailAddress"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        required
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        placeholder="Enter Your Email"
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid pt={2} >
                            <Stack spacing={2}>
                                <Controller
                                    control={control}
                                    name="brand"
                                    render={({ field }) => (
                                        <FormControl>
                                            <Box>
                                                <InputLabel id="demo-simple-select-label">
                                                    Car brand
                                                </InputLabel>
                                                <Select
                                                    required
                                                    fullWidth
                                                    // error ={isEmpty}
                                                    // helperText={ isEmpty === true ? "please fill the form":''}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={carbrand}
                                                    defaultValue={field.value}
                                                    label="car brand"
                                                    {...field}
                                                    value={field.value}
                                                // onChange={(e) => setCarBrand(e.target.value)}
                                                >
                                                    <MenuItem value={"Honda"}>Honda</MenuItem>
                                                    <MenuItem value={"Yamaha"}>Yamaha</MenuItem>
                                                    <MenuItem value={"Toyota"}>Toyota</MenuItem>
                                                    <MenuItem value={"Nissan"}>Nissan</MenuItem>
                                                    <MenuItem value={"BMW"}>BMW</MenuItem>
                                                    <MenuItem value={"Ford"}>Ford</MenuItem>
                                                    <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
                                                    <MenuItem value={"Mazda"}>Mazda</MenuItem>
                                                    <MenuItem value={"Mitsubishi"}>Mitsubishi</MenuItem>
                                                    <MenuItem value={"Volvo"}>Volvo</MenuItem>
                                                    
                                                </Select>
                                            </Box>
                                        </FormControl>
                                    )}

                                />


                            </Stack>

                            <Grid pt={2} >
                                <Stack>
                                    <Controller
                                        control={control}
                                        name="issue"
                                        render={({ field }) => (
                                            <FormControl>
                                                <Box>
                                                    <InputLabel id="demo-simple-select-label">
                                                        Services
                                                    </InputLabel>
                                                    <Select
                                                        fullWidth
                                                        required
                                                        // error ={isEmpty}
                                                        // helperText={ isEmpty === true ? "please fill the form":''}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        // value={carbrand}
                                                        defaultValue={field.value}
                                                        label="Issue"
                                                        {...field}
                                                        value={field.value}
                                                    // onChange={(e) => setCarBrand(e.target.value)}
                                                    >
                                                        <MenuItem value={"ไดชาต์เสีย"}>ไดชาต์เสีย</MenuItem>
                                                        <MenuItem value={"แอร์ไม่เย็น"}>แอร์ไม่เย็น</MenuItem>
                                                        <MenuItem value={"เช็คสภาพรถ"}>เช็คสภาพรถ</MenuItem>
                                                        <MenuItem value={"สตารต์ไม่ติด"}>สตารต์ไม่ติด</MenuItem>
                                                    </Select>
                                                </Box>
                                            </FormControl>
                                        )}

                                    />
                                </Stack>
                            </Grid>
                            <Grid pt={2} >
                                <Controller
                                    control={control}
                                    name="description"
                                    render={({ field }) => (
                                        <TextField
                                            required
                                            fullWidth
                                            multiline
                                            value={field.value}
                                            id="description"
                                            label="description"
                                            variant="outlined"
                                            placeholder="Enter Your description"
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>


                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </MainLayout>
    );
};
export default BookingForm