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
const DateForm = () => {
    const { control } = useFormContext();
    function disableWeekends(date) {
        const  d = new Date('2022-03-30T00:00')
        // return date.getDay() === 0 || date.getDay() === 6;
        // console.log(+d,+date)
        return +d === +date
        
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
                                displayStaticWrapperAs="desktop"
                                openTo="day"
                                excludeDates={'03-29-2021'}
                                // value={value}
                                value={field.value}
                                views={[ 'month', 'day']}
                                {...field}
                                shouldDisableDate={disableWeekends}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    )}
                />
            </MainLayout>
        </>
    );
};
export default DateForm;