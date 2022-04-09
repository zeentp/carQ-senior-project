import React, { useEffect, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputMask from "react-input-mask";
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { URL as url } from '../Constants';
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



const DateForm = () => {
    const axios = require("axios");
    const [disabledDate, setDisabledDate] = React.useState([]);
    const [isEmpty, setIsEmpty] = React.useState(true);
    const { control } = useFormContext();


    String.prototype.replaceAt = function (index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
    useEffect(() => {

        getDisabledDate();

    }, [
    ]);

    const handleChange = (val) => {
        console.log("--- date changed: ", val.toString());
        console.log(1)
        setIsEmpty(false)
    }
    const getDisabledDate = () => {
        axios.get(url + "/u/checkAvailableDate").then((res) => {
            console.log(res.data);
            const list = res.data.map((d) => d);
            setDisabledDate(list)
        });
    }
    function disableWeekends(date) {
        const data = [
            new Date('2022-04-04T00:00').getTime(),
            new Date('2022-04-05T00:00').getTime(),
            new Date('2022-04-28T00:00').getTime(),
            new Date('2022-04-12T00:00').getTime(),
        ]
        // 2022-04-13T03:00:00Z
        const temp = []
        disabledDate.map((i) => {
             let a = i.slice(0,11)       
             let zero = ("00:00")     
             let result = a.concat(zero)
            //  console.log(result)
            // let a = i.replaceAt(11,"00:00")
            temp.push(new Date(result).getTime())
        })
        // console.log(temp)
        // Fri Apr 15 2022 07:00:00 GMT+0700 (Indochina Time)


        const d = new Date('2022-04-06T00:00')
        return date.getDay() === 0 || date.getDay() === 6 || temp.includes(date.getTime())

    }

    return (
        <>
            <MainLayout isCard={true} >
                <Controller
                    control={control}
                    name="bookingDate"
                    render={({
                        field }) => (
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDatePicker
                                disablePast
                                autoOk
                                displayStaticWrapperAs="desktop"
                                openTo="day"
                                excludeDates={'03-29-2021'}
                                // onChange={handleChange}
                                value={field.value}
                                views={['month', 'day']}
                                {...field}
                                shouldDisableDate={disableWeekends}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    )}
                />
                {/* <Button disabled={isEmpty}>
                    Test
                </Button> */}
            </MainLayout>
        </>
    );
};
export default DateForm;