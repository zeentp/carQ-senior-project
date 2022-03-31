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
  const [isEmpty, setIsEmpty] = React.useState(true);
    const { control } = useFormContext();
    const handleChange =(val) =>{
        console.log("--- date changed: ", val.toString());
        console.log(1)
        setIsEmpty(false)
    }
    function disableWeekends(date) {
        const data = [
             new Date('2022-04-04T00:00').getTime(),
             new Date('2022-04-05T00:00').getTime(),
        ]
        const  d = new Date('2022-04-06T00:00')
        return date.getDay() === 0 || date.getDay() === 6 || data.includes(date.getTime())
        
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
                                views={[ 'month', 'day']}
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