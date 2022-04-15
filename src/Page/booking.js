import React, { useEffect, useState, useCallback } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputMask from "react-input-mask";
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import BookingForm from "../Component/BookingForm";
import TimeForm from "../Component/TimeForm";
import AlertBar from "../Component/AlertBar"
import { v4 as uuid } from 'uuid';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { URL as url } from '../Constants';
import {
    Typography,
    TextField,
    Modal,
    Button,
    Stepper,
    Step,
    StepLabel,
    Grid,
    Stack,
    Card,
    Link,
    CardHeader,
    CardContent,
    Divider,
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
// import BasicModal from "../Component/Modal";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import MainLayout from "../Component/MainLayout";
import {
    getTime,
    setTime

} from "../redux/TimeSlice";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 3,
};


function getSteps() {
    return [
        "Select Date",
        "Select Time",
        "Booking Information",
    ];
}



const BasicForm = () => {
    const { control } = useFormContext();
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const handlePhoneChange = (event) => {
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
        setPhoneNumber(val);
    };
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


function dateToStringFuc(date, time) {
    let dateToString = date.toString()
    return formatDate(dateToString)

}
function formatDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear(),].join("-");
}
const ModalData = (bookingData, onStepChange) => {
    let dateToString = bookingData.data.bookingDate.toString()
    let time = bookingData.data.bookingDate.toTimeString();
    let booking_date = new Date(dateToString.replace(time, bookingData.data.bookingTime + ":00 GMT+0700 (Indochina Time)"));
    return (
        <div>
            <Box sx={{ py: 2, px: 1, }} >
                <Box
                    sx={{ display: 'flex', bgcolor: 'background.paper', borderRadius: 1 }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>Name</Typography>
                    <Typography> {bookingData.data.firstName + ' ' + bookingData.data.lastName}</Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', bgcolor: 'background.paper', borderRadius: 1 }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Telephone
                    </Typography>
                    <Typography>
                        {bookingData.data.telephone}
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex' }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 'bold', pb: 2 }}>
                        Email
                    </Typography>
                    <Typography>
                        {bookingData.data.emailAddress}
                    </Typography>

                </Box>
                <Box
                    sx={{ display: 'flex' }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Plate Number
                    </Typography>
                    <Typography>
                        {bookingData.data.plateNumber}
                    </Typography>
                </Box>
                <Stack spacing={3}>
                    <Box></Box>
                </Stack>
                <Box
                    sx={{ display: 'flex' }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        carbrand
                    </Typography>
                    <Typography>
                        {bookingData.data.brand}
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex' }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Services
                    </Typography>
                    <Typography>
                        {/* {bookingData.data.service} */}
                        {bookingData.data.service === 'etc' ? bookingData.data.etcService : bookingData.data.service}
                    </Typography>
                </Box>
                <Box className='typhograhpy'
                    sx={{ display: 'flex' }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 'bold', wordWrap: "break-word" }}>
                        Description
                    </Typography >
                    <Typography noWrap>
                        {bookingData.data.description}</Typography>
                </Box>
            </Box>
            {/* <Divider></Divider> */}

        </div>
    );
}
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

function getStepContent(step, data, time) {
    switch (step) {
        case 0:
            return <DateForm />;
        case 1:
            return <TimeForm data={time} />;
        case 2:
            return <BookingForm data={data} />;
        default:
            return "unknown step";
    }
}
const changeBookingDate = () => {

}
const LinaerStepper = () => {
    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            emailAddress: "",
            service: "",
            etcService: "",
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
    const [availableTime, setAvaliableTime] = useState([]);
    const [open, setOpen] = React.useState(false);
    // const time = useSelector(getRole);
    const dispatch = useDispatch();


    const [isTelError, setIsTelError] = useState(false);
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

    const handleSubmitData = () => {
        let data = methods.getValues();
        if (data.telephone.match(/^\d+$/) !== null && data.telephone.length === 10) {
            let dateToString = data.bookingDate.toString()
            let time = data.bookingDate.toTimeString();
            // let formatTime = data.bookingTime.
            let booking_date = new Date(dateToString.replace(time, data.bookingTime.slice(0, 4) + ":00 GMT+0700 (Indochina Time)"));
            handleOpen()
            if (data.service === 'etc') {
                console.log(data.etcService)
            }
            var body = {
                appointment_id: appointment_id,
                user_id: user_id,
                plate_no: data.plateNumber,
                brand: data.brand,
                description: data.service === 'etc' ? data.etcService : data.service,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.emailAddress,
                telephone: data.telephone,
                // starts_at: data.bookingDate,
                startAt: booking_date,
                service: data.service === 'etc' ? data.etcService : data.service,

            };
            console.log(body)
            axios.post(url + "/a/createDetail", body).then((res) => {
                console.log(res);

            });
            handleClose()
            setActiveStep(activeStep + 1);
        }

        // let dateToString = data.bookingDate.toString()
        // let time = data.bookingDate.toTimeString();
        // let booking_date = new Date(dateToString.replace(time, data.bookingTime + ":00 GMT+0700 (Indochina Time)"));
        console.log('postApi');
    }
    async function getAvailableTime(date) {
        // var clear = []
        // dispatch(setTime(clear));

        let text = date.toISOString();
        let sliceStr = text.slice(0, 11)
        let zero = ("00:00:00")
        let result = sliceStr.concat(zero)
        var body = {
            reservedTime: result,
        }
        let temp_data = []
        console.log(result)
        await axios.post(url + "/u/checkAvailableTime", body).then((res) => {
            // console.log(res.data);
            res.data.forEach(element => temp_data.push(element.period));
            // dispatch(setTime(res));
        });
        // if (!personName.includes(id))
        setTimeout(() => {
            // setAvaliableTime(temp_data)
            dispatch(setTime(temp_data));
        }, 1000)
        // setAvaliableTime(temp_data)

        // if (!availableTime.includes(a)) {
        //     availableTime.push('12:00')
        //     availableTime.push('00:00')
        //     availableTime.push('00:00')
        // }

        // axios.post(url + "/u/checkAvailableDate",date).then((res) => {
        //     console.log(res.data);
        //     const list = res.data.map((d) => d);
        //     availableTime = list
        // });
    }
    const handleNext = (data) => {
        if (activeStep == steps.length - 1) {
            if (data.telephone.match(/^\d+$/) !== null) {
                handleOpen()
            }
        } else {
            if (activeStep === 0 && data.bookingDate !== '') {
                getAvailableTime(data.bookingDate)
                console.log(data.bookingDate)
                console.log('postDate')


            }
            if (data.bookingDate !== '') {
                setActiveStep(activeStep + 1);
                setSkippedSteps(
                    skippedSteps.filter((skipItem) => skipItem !== activeStep)
                );
            } else {
                setAlertOpen(true)
            }
        }

    };

    const handleBack = () => {
  
        setActiveStep(activeStep - 1);

    };
    const changeDate = () => {
        handleClose()
        setActiveStep(0);

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
    const [alertOpen, setAlertOpen] = React.useState(false);

    useEffect(() => {

        // availableTime = []   
        // console.log(holiday)
    }, [])
    const handleOnClick = () => {
        window.location.href = "/";
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertOpen(false);
    };
    return (
        <Box>
            <AlertBar title='Please Select Date ' severity="error" handleCloseFuc={handleCloseAlert} alertOpen={alertOpen} ></AlertBar>
            <Stepper sx={{ pt: 5 }} alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //         <Typography
                    //             variant="caption"
                    //             align="center"
                    //             style={{ display: "block" }}
                    //         >
                    //             optional
                    //         </Typography>
                    //     );
                    // }
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
                <Box display={'grid'} justifyContent={'center'} sx={{ pt: 2 }} >
                    <img
                        sx={{ pt: 5 }}
                        className='responsive2'
                        src={
                            'https://media.istockphoto.com/vectors/blue-paper-speech-banner-with-word-thank-you-on-white-background-vector-id1165857016?k=20&m=1165857016&s=170667a&w=0&h=WhNTdyOS-XnNY8WU9qTl7gW0_XmTaE--Ony1N3vBPEc='
                        }
                    />
                    <Typography sx={{ pt: 2 }} variant="h3" align="center">
                        For Your Reservation
                    </Typography>
                    {/* <Typography sx={{ pt: 0 }} variant="h5" align="center">
                        For Reservation ,please Await response from Admin
                    </Typography> */}

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleOnClick}
                    >
                        Go to HomePage
                    </Button>
                </Box>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            <div>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >

                                    <Box sx={style}>
                                        <Typography>
                                            {/* {methods.getValues('telephone')}
                             */}
                                            Booking Details
                                        </Typography>
                                        <Divider></Divider>
                                        <Box pl={1} pt={2}>
                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                Date & Time
                                            </Typography>
                                            <Stack display={'flex'} spacing={1} direction={'row'}>
                                                <EventNoteIcon />
                                                <Typography>
                                                    {dateToStringFuc(methods.getValues('bookingDate')) + ',' + methods.getValues('bookingTime')}
                                                </Typography>
                                                <Link
                                                    component="button"
                                                    variant="body2"
                                                    onClick={changeDate}
                                                >
                                                    Change
                                                </Link>
                                            </Stack>
                                        </Box>
                                        <ModalData sx={{ overflow: 'scroll', }} data={methods.getValues()}></ModalData>
                                        <Container sx={{ display: 'flex', justifyContent: 'center', pt: 1 }}>
                                            <Button
                                                className={classes.button}
                                                onClick={handleClose}
                                            >
                                                back
                                            </Button>
                                            <Button
                                                // disabled
                                                className={classes.button}
                                                variant="contained"
                                                color="primary"
                                                onClick={handleSubmitData}

                                            >
                                                Submit
                                            </Button>
                                        </Container>
                                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                    {methods.getValues('telephone')}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                                    </Box>
                                </Modal>
                            </div>
                            <Box pt={8} >
                                {getStepContent(activeStep, methods.getValues(), availableTime)}
                            </Box>
                            <MainLayout iscard={true} >
                                <Container sx={{ display: 'flex', justifyContent: 'center', pt: 6, pb: 6 }}>
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
                                        // disabled
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        // onClick={handleNext}
                                        type="submit"
                                    >
                                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                    </Button>
                                    <Box></Box>
                                </Container>
                            </MainLayout>
                        </form>
                    </FormProvider>
                </>
            )}
        </Box>
    );
};

export default LinaerStepper;