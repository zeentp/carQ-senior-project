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
import BasicModal from "../Component/Modal";
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
// const BookingForm = () => {

//     useEffect(() => {
//     }, [
//     ]);
//     const { control } = useFormContext();
//     const [phoneNumber, setPhoneNumber] = React.useState("");
//     const handlePhoneChange = (event) => {
//         console.log(phoneNumber)
//         var val = event.target.value.replace(/[^0-9]/g, "");
//         if (val[0] === "0") {
//             let a = val;
//             a = val.slice(0, 3);
//             a += val.length > 3 ? "-" + val.slice(3, 6) : "";
//             a += val.length > 6 ? "-" + val.slice(6) : "";
//             val = a;
//         } else {
//             val = "";
//         }

//         // value = val
//         setPhoneNumber(val)
//         // console.log(value)
//         return val
//     };

//     return (
//         <MainLayout isCard={true}>
//             <Card>
//                 <CardHeader title="Make Appointment" />
//                 <CardContent>
//                     <Grid item xs={12} md={12} lg={12}
//                         sx={{
//                             "& .MuiSelect-select": { width: "20ch" },
//                         }}
//                     >
//                         <Grid >
//                             <Stack
//                                 direction={{ xs: "column", sm: "row" }}
//                                 spacing={2}>

//                                 <Controller
//                                     control={control}
//                                     name="firstName"
//                                     render={({ field }) => (
//                                         <TextField
//                                             required
//                                             id="first-name"
//                                             label="First Name"
//                                             variant="outlined"
//                                             placeholder="Enter Your First Name"
//                                             {...field}
//                                         />
//                                     )}
//                                 />
//                                 <Controller
//                                     control={control}
//                                     name="lastName"
//                                     render={({ field }) => (
//                                         <TextField
//                                             required
//                                             id="last-name"
//                                             label="Last Name"
//                                             variant="outlined"
//                                             placeholder="Enter Your Last Name"
//                                             // margin="normal"
//                                             {...field}
//                                         />
//                                     )}
//                                 />
//                             </Stack>
//                         </Grid>
//                         <Grid pt={2} >
//                             <Stack
//                                 direction={{ xs: "column", sm: "row" }}
//                                 spacing={2}>
//                                 <Controller
//                                     control={control}
//                                     name="plateNumber"
//                                     render={({ field }) => (
//                                         <TextField
//                                             required
//                                             id="Plate-number"
//                                             label="Plate Number"
//                                             variant="outlined"
//                                             placeholder="Enter Your Plate Number"
//                                             {...field}
//                                         />
//                                     )}
//                                 />
//                                 <Controller
//                                     control={control}
//                                     name="emailAddress"
//                                     render={({ field }) => (
//                                         <TextField
//                                             id="email"
//                                             label="Email"
//                                             variant="outlined"
//                                             placeholder="Enter Your Email"
//                                             {...field}
//                                         />
//                                     )}
//                                 />
//                             </Stack>
//                         </Grid>
//                         <Grid pt={2} >
//                             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                                 <Controller
//                                     control={control}
//                                     name="brand"
//                                     render={({ field }) => (
//                                         <FormControl>
//                                             <Box>
//                                                 <InputLabel id="demo-simple-select-label">
//                                                     Car brand
//                                                 </InputLabel>
//                                                 <Select
//                                                     required

//                                                     // error ={field.value.match(/^\d+$/)===null ?  'test': '' }
//                                                     // helperText={ isEmpty === true ? "please fill the form":''}
//                                                     labelId="demo-simple-select-label"
//                                                     id="demo-simple-select"
//                                                     // value={carbrand}
//                                                     defaultValue={field.value}
//                                                     label="car brand"
//                                                     {...field}
//                                                     value={field.value}
//                                                 // onChange={(e) => setCarBrand(e.target.value)}
//                                                 >
//                                                     <MenuItem value={"Honda"}>Honda</MenuItem>
//                                                     <MenuItem value={"Yamaha"}>Yamaha</MenuItem>
//                                                     <MenuItem value={"Toyota"}>Toyota</MenuItem>
//                                                     <MenuItem value={"Nissan"}>Nissan</MenuItem>
//                                                 </Select>
//                                             </Box>
//                                         </FormControl>
//                                     )}

//                                 />
//                                 {/* <Controller
//                                     name="reactMaskInput"
//                                     control={control}
//                                     render={({ field: { onChange, value } }) => (
//                                         <InputMask mask="99/99/9999" value={value} onChange={onChange}>
                                         
//                                         </InputMask>
//                                     )}
//                                 /> */}
//                                 {/* <Controller
//                                     control={control}
//                                     name="telephone"
//                                     render={({field}) => (
//                                         <TextField
//                                             onChange={(e) => handlePhoneChange(e, field)}
//                                             id="telephone"
//                                             label="telephone"
//                                             variant="outlined"
//                                             value={phoneNumber}
//                                             placeholder="Enter Your Telephone"
//                                             inputProps={{ maxLength: 12 }}
//                                         // {...field}
//                                         />
//                                     )} 
//                                  /> */}
//                                 <Controller
//                                     control={control}
//                                     name="telephone"
//                                     render={({ field }) => (
//                                         <TextField
//                                         // error={isTelError}
//                                         error ={field.value.match(/^\d+$/)===null ? field.value !== '' ? true : false:false}
//                                         helperText={field.value.match(/^\d+$/)===null ? field.value !== ''? 'plase input number only' :null:null }
//                                             required
//                                             id="telephone"
//                                             label="telephone"
//                                             variant="outlined"
//                                             placeholder="Enter Your Telephone"
//                                             inputProps={{ maxLength: 10 }}
//                                             // onInput = {(e) => handlePhoneChange(e)}
//                                             {...field}
//                                         />
//                                     )}
//                                 />
//                             </Stack>
//                             <Grid pt={2} >
//                                 <Controller
//                                     control={control}
//                                     name="description"
//                                     render={({ field }) => (
//                                         <TextField
//                                             required
//                                             fullWidth
//                                             multiline
//                                             value={field.value}
//                                             id="description"
//                                             label="description"
//                                             variant="outlined"
//                                             placeholder="Enter Your description"
//                                             {...field}
//                                         />
//                                     )}
//                                 />
//                             </Grid>

//                         </Grid>
//                     </Grid>

//                 </CardContent>
//             </Card>
//         </MainLayout>
//     );
//                                     }
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
            return <BookingForm/>;
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

    const handleNext = (data) => {
      let dateToString =  data.bookingDate.toString()
      let time = data.bookingDate.toTimeString();
      let booking_date = new Date (dateToString.replace(time, data.bookingTime+":00 GMT+0700 (Indochina Time)"));
        console.log(booking_date);
        if (activeStep == steps.length - 1 ) {
            if(data.telephone.match(/^\d+$/)!==null && data.telephone.length === 10){
            console.log('postApi');
            var data = {
                appointment_id: appointment_id,
                user_id: user_id,
                plate_no: data.plateNumber,
                brand: data.brand,
                description: data.description,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.emailAddress,
                telephone: data.telephone,
                // starts_at: data.bookingDate,
                startAt: booking_date,
            };
            axios.post(url + "/a/createDetail", data).then((res) => {
                console.log(res);
            });
            setActiveStep(activeStep + 1);
            // fetch("https://jsonplaceholder.typicode.com/comments")
            //     .then((data) => data.json())
            //     .then((res) => {
            //         // console.log(res);
                    setActiveStep(activeStep + 1);
            }
            //     });
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
        // console.log(holiday)
    }, [])
    const handleOnClick = () => {
        window.location.href = "/";
    };
    return (
        <Box>
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
                <Box display={'grid'} justifyContent={'center'} sx={{pt:2}} >
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
                            <Box pt={8} >
                            {getStepContent(activeStep)}
                            </Box>
                            <MainLayout iscard={true} >
                                <Container sx={{ display: 'flex', justifyContent: 'center', pt: 6 }}>
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