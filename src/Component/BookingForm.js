
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
    Autocomplete,
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
import { method } from "lodash";
const BookingForm = (data) => {
    const { register, getValues } = useForm();
    // const options = [
    //     { value: "1111", label: "bananas" },
    //     { value: "2222", label: "apples" },
    //     { value: "3333", label: "nuts" },
    //     { value: "4444", label: "strawberrys" }
    //   ];
    const brand_options =[
        'Audi',
        'BMW',
        'Toyota',
        'Yamaha',
        'Chevrolet',
        'Ford',
        'Honda',
        'Hyundai',
        'Kia',
        'Lexus',
        'Mazda',
        'Mercedes-Benz',
        'Mitsubishi',
        'Nissan',
        'Subaru',
        'Suzuki',
        'Volkswagen',
        'Volvo',
        'Issuzu',
    ]
    const options = [
        "ตรวจเช็คสภาพรถ",
        "เปลี่ยนน้ำมันเครื่อง",
        "ตั้งศูนย์ล้อ",
        "เปลี่ยนยางรถยนต์",
        "ซ่อมทั่วไปและอื่นๆ"
    ];
    useEffect(() => {
        // let data = getValues("firstName");
        // console.log(control.getFieldState('firstName'))
        console.log(data.data)
    }, [
    ]);
    const { control } = useFormContext();
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [isEtc, setIsEtc] = React.useState("");
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
                                    // onChange={([event, data]) => {
                                    //     return data && data.length ? data : [];
                                    // }}
                                    // render={({ field }) => (
                                    render={({ field: { onChange, value } }) => (
                                            <Autocomplete
                                                options={brand_options}
                                                onChange={(event, item) => {
                                                    onChange(item);
                                                }}
                                                id="tags-outlined"
                                                value={value}
                                                filterSelectedOptions
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Car brands"
                                                        placeholder="Car brands"
                                                        required
                                                    />
                                                )}
                                            />
                                    )}
                                />
                                {/* <Controller
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

                                /> */}
                            </Stack>
                            <Grid pt={2} >
                                <Controller
                                    control={control}
                                    name="service"
                                    onChange={([event, data]) => {
                                        return data && data.length ? data : [];
                                    }}
                                    // render={({ field }) => (
                                    render={({ field: { onChange, value } }) => (
                                        <Box>
                                            <Autocomplete
                                                options={options}
                                                onChange={(event, item) => {
                                                    onChange(item);
                                                }}
                                                required
                                                id="tags-outlined"
                                                // options={produce}
                                                // disableCloseOnSelect
                                                // defaultValue={value}
                                                value={value}
                                                filterSelectedOptions
                                                // getOptionLabel={options => options.label}
                                                // {...field}
                                                // onInputChange={(event, newInputValue) => {
                                                //     setInputValue(newInputValue);
                                                //   }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Services"
                                                        placeholder="Services"
                                                        required
                                                        // inputProps={{
                                                        //     // required: value.length === 0
                                                        //   }}
                                                    />

                                                )}

                                            />
                                            {value === 'ซ่อมทั่วไปและอื่นๆ' ?
                                                <Grid pt={2} >
                                                    <Controller
                                                        control={control}
                                                        name="etcService"
                                                        render={({ field }) => (
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                multiline
                                                                value={field.value}
                                                                id="description"
                                                                label="Etc"
                                                                variant="outlined"
                                                                placeholder="Enter Your Etc Service"
                                                                {...field}
                                                            />

                                                        )}

                                                    />
                                                </Grid>
                                                : null}
                                        </Box>

                                    )}
                                />

                            </Grid>
                            {/* <Grid pt={2} >
                                <Stack>
                                    <Controller
                                        control={control}
                                        name="service"
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
                                                        label="service"
                                                        {...field}
                                                        value={field.value}
                                                    // onChange={(e) => setCarBrand(e.target.value)}
                                                    >
                                                        <MenuItem value={"ไดชาต์เสีย"}>ไดชาต์เสีย</MenuItem>
                                                        <MenuItem value={"แอร์ไม่เย็น"}>แอร์ไม่เย็น</MenuItem>
                                                        <MenuItem value={"เช็คสภาพรถ"}>เช็คสภาพรถ</MenuItem>
                                                        <MenuItem value={"สตารต์ไม่ติด"}>สตารต์ไม่ติด</MenuItem>
                                                        <MenuItem value={"etc"}>อื่นๆ</MenuItem>
                                                    </Select>
                                                    {field.value === 'etc' ?
                                                        <Grid pt={2} >
                                                            <Controller
                                                                control={control}
                                                                name="etcService"
                                                                render={({ field }) => (
                                                                    <TextField
                                                                        required
                                                                        fullWidth
                                                                        multiline
                                                                        value={field.value}
                                                                        id="description"
                                                                        label="Etc"
                                                                        variant="outlined"
                                                                        placeholder="Enter Your Etc Service"
                                                                        {...field}
                                                                    />

                                                                )}

                                                            />
                                                        </Grid>
                                                        : null}
                                                </Box>
                                            </FormControl>
                                        )}
                                    />
                                    {data.data.service === "eee" ?
                                        <Grid pt={2} >
                                            <Controller
                                                control={control}
                                                name="etcService"
                                                render={({ field }) => (
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        multiline
                                                        value={field.value}
                                                        id="description"
                                                        label="Etc"
                                                        variant="outlined"
                                                        placeholder="Enter Your description"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        : null}
                                </Stack>
                            </Grid> */}
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