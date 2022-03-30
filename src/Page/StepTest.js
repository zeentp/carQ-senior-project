import React, { useEffect, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputMask from "react-input-mask";
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import BookingForm from "../Component/BookingForm";
import TimeForm from "../Component/TimeForm";
import { v4 as uuid } from 'uuid';
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
    Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import DateForm from "../Component/DateForm";
import "../Css/Card.css"
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import MainLayout from "../Component/MainLayout";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Select Date",
        "Select Time",
        "Booking Information",
    ];
}

const BasicForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="nickName"
                render={({ field }) => (
                    <TextField
                        id="nick-name"
                        label="Nick Name"
                        variant="outlined"
                        placeholder="Enter Your Nick Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const ContactForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="emailAddress"
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            {/* <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            /> */}
            <Controller
                control={control}
                name="alternatePhone"
                render={({ field }) => (
                    <TextField
                        id="alternate-phone"
                        label="Alternate Phone"
                        variant="outlined"
                        placeholder="Enter Your Alternate Phone"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const PersonalForm = () => {
    const { control } = useFormContext();
    const [value, setValue] = React.useState(new Date());
    const holiday = [{
        date: new Date(),
    }, {
        date2: new Date() + 1
    }]
    useEffect(() => {
        console.log(holiday)
    }, [])

    return (
        <>
            <Controller
                control={control}
                name="bookingDate"
                render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            disablePast
                            // disableCloseOnSelect={({ date }) => {
                            //     holiday.map((d) => {
                            //         if (d.date.getDate() === date.getDate()) {
                            //             return true
                            //         }
                            //         return false
                            //     })
                            // }}
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            // mDate={'03-29-2021'}
                            excludeDates={'03-29-2021'}

                            // value={value}
                            {...field}
                        // onChange={(newValue) => {
                        //     setValue(newValue);
                        // }}
                        // renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                )}
            />
            <Controller
                control={control}
                name="address2"
                render={({ field }) => (
                    <TextField
                        id="address2"
                        label="Address 2"
                        variant="outlined"
                        placeholder="Enter Your Address 2"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="country"
                render={({ field }) => (
                    <TextField
                        id="country"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};

const PaymentForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="cardNumber"
                render={({ field }) => (
                    <TextField
                        id="cardNumber"
                        label="Card Number"
                        variant="outlined"
                        placeholder="Enter Your Card Number"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="cardMonth"
                render={({ field }) => (
                    <TextField
                        id="cardMonth"
                        label="Card Month"
                        variant="outlined"
                        placeholder="Enter Your Card Month"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="cardYear"
                render={({ field }) => (
                    <TextField
                        id="cardYear"
                        label="Card Year"
                        variant="outlined"
                        placeholder="Enter Your Card Year"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return <DateForm />;
        case 1:
            return <TimeForm />;
        case 2:
            return <BookingForm />;
        // case 3:
        //     return <PersonalForm />;
        default:
            return "unknown step";
    }
}

const LinaerStepper = () => {
    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            emailAddress: "",
            // nickName: "",
            // phoneNumber: "",
            telephone: "",
            brand: "",
            plateNumber: "",
            description: "",
            // country: "",
            // cardNumber: "",
            // cardMonth: "",
            // cardYear: "",
            bookingDate: "",
            bookingTime: "",
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();
    const appointment_id = uuid();
    const user_id = uuid();
    const axios = require("axios");

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = (data) => {
        console.log(data);


        if (activeStep == steps.length - 1) {
            console.log('postApi');
            var data = {
                appointment_id: appointment_id,
                user_id: user_id,
                plate_no: data.plateNumber,
                brand: data.brand,
                description: data.description,
                status: "pending",
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.emailAddress,
                telephone: data.telephone,
                // starts_at: data.bookingDate,
            };
            // axios.post(url + "/a/createDetail", data).then((res) => {
            //     console.log(res);
            //     window.location.href = '/home';
            // });
            // fetch("https://jsonplaceholder.typicode.com/comments")
            //     .then((data) => data.json())
            //     .then((res) => {
            //         // console.log(res);
            //         setActiveStep(activeStep + 1);
            //     });
            setActiveStep(activeStep + 1);

        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep)
            );
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };

    const onSubmit = (data) => {
        console.log(data);
    };
    const holiday = [{
        date: new Date(),
    }, {
        date: new Date()
    }]
    useEffect(() => {
        console.log(holiday)
    }, [])

    return (
        <div>
            <Stepper sx={{ pt: 5 }} alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >
                                optional
                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Box display={'grid'} justifyContent={'center'}  >
                    <img
                        sx={{ pt: 5 }}
                        className='responsive2'
                        src={
                            'https://icons.iconarchive.com/icons/iconsmind/outline/512/Smile-icon.png'
                        }
                    />
                    <Typography sx={{ pt: 2 }} variant="h3" align="center">
                        Thank You
                    </Typography>

                </Box>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}
                            <MainLayout iscard={true}>
                                <Container sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                                    <Button
                                        className={classes.button}
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        back
                                    </Button>
                                    {/* {isStepOptional(activeStep) && (
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                >
                                    skip
                                </Button>
                            )} */}
                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        // onClick={handleNext}
                                        type="submit"
                                    >
                                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                    </Button>
                                </Container>
                            </MainLayout>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
};

export default LinaerStepper;