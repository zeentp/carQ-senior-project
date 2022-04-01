
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
    ToggleButton,
} from "@mui/material";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import MainLayout from "../Component/MainLayout";
const TimeForm = () => {
    const { control } = useFormContext();
    const [selected, setSelected] = React.useState(false);

    return (
        <>
            <MainLayout isCard={true}>
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
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={field.value}
                                                        defaultValue={'Honda'}
                                                        label="car brand"
                                                        {...field}
                                                    // onChange={(e) => setCarBrand(e.target.value)}
                                                    >
                                                        <MenuItem value={"08:00"}>08:00</MenuItem>
                                                        <MenuItem value={"10:00"}>10:00</MenuItem>
                                                        <MenuItem value={"12:00"}>12:00</MenuItem>
                                                        <MenuItem value={"14:00"}>14:00</MenuItem>
                                                        <MenuItem value={"16:00"}>16:00</MenuItem>
                                                        <MenuItem value={"18:00"}>18:00</MenuItem>
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
export default TimeForm;