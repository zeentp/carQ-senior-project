
import React, { useEffect, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputMask from "react-input-mask";
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import PropTypes from "prop-types";
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
    ToggleButton,
} from "@mui/material";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import {
    getTime,
    setTime,
} from "../redux/TimeSlice";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Component/MainLayout";
import LinearProgress from '@mui/material/LinearProgress';
const TimeForm = (data) => {
    const dispatch = useDispatch();
    const dataTime = useSelector(getTime);
    const { control } = useFormContext();
    const [selected, setSelected] = React.useState(false);
    const [selectTime, setSelectTime] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const allSlotTime = [
        '08:00-11:00',
        '11:00-14:00',
        '14:00-17:00',
    ]
    // const at = []
    function getT() {
        if (Object.keys(dataTime).length === 0) {
            console.log('ว่าง all day')
            allSlotTime.forEach((m) => {
                console.log(m)
                selectTime.push(m)
                setIsLoading(false)
            })
        } else {
            allSlotTime.forEach((m) => {
                if (!dataTime.includes(m)) {
                    selectTime.push(m)
                }
            })
            setTimeout(() => {
                // console.log(at)
                setIsLoading(false)
                // Delay this action by one second
            }, 2000)
        }
    }
    function getSelecTime() {
        if (!Object.keys(dataTime).length === 0) {
            dispatch(setTime(allSlotTime));
        } else {
            var temp = []
            allSlotTime.forEach((m) => {
                if (!dataTime.includes(m)) {
                    temp.push(m)
                }
            })
            setTimeout(() => {
                // Delay this action by one second
                dispatch(setTime(temp));

            }, 1000)
            console.log(temp)
        }
    }
    useEffect(() => {
        getT()
        // getSelecTime()
        console.log('disabled', dataTime)
        // console.log('length', Object.keys(data.data).length)
        setTimeout(() => {
            // Delay this action by one second
        }, 1000)

        // getSelecTime()
        // console.log('disabled', dataTime)
        // console.log('length', Object.keys(dataTime).length)

        // if (Object.keys(data.data).length === 0) {
        //     setSelectTime(allSlotTime)
        // }
        // else {
        //     console.log('else')
        //     var temp = []
        //     allSlotTime.forEach((m) => {
        //         if (!data.data.includes(m)) {
        //             console.log(m)
        //             temp.push(m)
        //         }
        //     })
        //     setSelectTime(temp)
        // }
        // console.log(dataTime)
        // const index = allSlotTime.indexOf(dataTime);
        // console.log(index)
        // console.log(dataTime)
        // if (index > -1) {
        //     allSlotTime.splice(index, 1); // 2nd parameter means remove one item only
        // }

        // }

        // console.log('at val')
        // console.log(at)
        // pic.forEach((m) => {
        //     if (!state.selectedOptions.includes(m)) {
        //         removeMechanic.push(m)
        //     }
        // })
        // console.log(typeof dataTime)
        // console.log(dataTime)
        // console.log(Object.keys(dataTime).length === 0)

        // if (Object.keys(dataTime).length === 0) {
        //     dispatch(setTime(allSlotTime));
        //     console.log(1)
        // } else {
        //     let at = []
        //     allSlotTime.map((m) => {
        //         if (!dataTime.includes(m)) {
        //             console.log(m)
        //             at.push(m)
        //         }
        //     })
        //     dispatch(setTime(at));
        // }
        // // dispatch(setTime(at));
        // // console.log(dataTime)
        // console.log(dataTime)
    }, [])

    const getAvailableTime = () => {

    }

    return (
        <>
            <MainLayout isCard={true}>
                {isLoading && <LinearProgress />}
                <Card>
                    <CardHeader title="Select Time" />
                    <CardContent>
                        <Grid item xs={12} md={12} lg={12}>
                            <Grid>
                                <Stack direction={'row'} spacing={2}>
                                    <Controller
                                        control={control}
                                        name="bookingTime"
                                        render={({ field }) => (
                                            <FormControl variant="standard" >
                                                <Box
                                                    sx={{
                                                        "& .MuiSelect-select": { width: "25ch" },
                                                    }}
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        Time
                                                    </InputLabel>
                                                    <Select
                                                        required
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={field.value}
                                                        {...field}
                                                    // onChange={(e) => setCarBrand(e.target.value)}
                                                    >
                                                        {selectTime.map((time) => (
                                                            <MenuItem
                                                                key={time}
                                                                value={time}
                                                            // style={getStyles(name, personName, theme)}
                                                            >
                                                                {time}
                                                            </MenuItem>
                                                        ))}
                                                        {/* <MenuItem value={"08:00"}>08:00</MenuItem>
                                                        <MenuItem value={"10:00"}>10:00</MenuItem>
                                                        <MenuItem value={"12:00"}>12:00</MenuItem>
                                                        <MenuItem value={"14:00"}>14:00</MenuItem>
                                                        <MenuItem value={"16:00"}>16:00</MenuItem>
                                                        <MenuItem value={"18:00"}>18:00</MenuItem>
                                                        <MenuItem value={"00:00"}>00:00</MenuItem> */}

                                                    </Select>
                                                </Box>
                                            </FormControl>
                                        )}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </MainLayout>
        </>
    );
};
TimeForm.propTypes = {
    data: PropTypes.array,


};
export default TimeForm;