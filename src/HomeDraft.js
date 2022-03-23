// import * as React from "react";
// import { useParams } from "react-router-dom";
// import Box from "@mui/material/Box";
// import {
//   Typography,
//   Grid,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Stack,
// } from "@mui/material";
// import Handyman from "@mui/material/ListItemIcon";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// import Divider from "@mui/material/Divider";
// import Corousel from "./Component/Corousel";
// import MainLayout from "./Component/MainLayout";

// export default function Home() {
//   let params = useParams();

//   const handleOnClick = () => {
//     console.log(window.innerWidth)
//     window.location.href = "/booking";
//   };
//   return (
//     <div>
//       <MainLayout>
//         <Box sx={{ pb: 10, bgcolor: "#efefef" }}>
//           <Grid container spacing={2}>
//             <Container>
//               <Grid item xs={12} md={12} lg={12} spacing={2}>
//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <Grid >
//                     <Typography variant="h2">Car-Q Services</Typography>
//                     <Typography sx={{ pb: 2 }} variant="h5">Reservation Online</Typography>
//                     <Button type="submit" onClick={handleOnClick} variant="contained">
//                       Booking
//                     </Button>
//                   </Grid>
//                   {/* <img
//                     sx={{ pt: 5 }}
//                     height={500}
//                     width={500}
//                     src={
//                       "https://cdn-icons-png.flaticon.com/512/3347/3347743.png"
//                     }
//                   /> */}
//                 </Stack>
//               </Grid>
//               <Grid item xs={12} md={12} lg={12} spacing={2}>
//                 <Stack
//                   direction={{ xs: "column", sm: "row" }}
//                   spacing={2}></Stack>
//               </Grid>

//               {/* <Grid item
//               xs={6}
//               // sx={{
//               //   // backgroundImage: "url(https://source.unsplash.com/random)",
//               //   display: "flex",
//               //   justifyContent: "center",
//               //   alignItems: "center",
//               //   maxHeight: "100%",
//               // }}
//               >
//           <img height={400} src={'https://source.unsplash.com/random'} />

//               <Button type="submit" onClick={handleOnClick} variant="contained">
//                 Booking
//               </Button>
//             </Grid> */}
//             </Container>
//           </Grid>
//         </Box>
//         <Box
//           sx={{
//             // pl: 30,
//             bgcolor: "#e3f2fd",
//           }}>
//           <Grid spacing={2}>
//             <Grid item xs={12}> 
//               <Container>
//                 <Corousel></Corousel>
//               </Container>
//               {/* {
//                 window.innerWidth > 600 ? <Container>
//                   <Corousel></Corousel>
//                 </Container> :
//                   <box></box>

//               } */}
//             </Grid>
//           </Grid>
//         </Box>
//       </MainLayout>
//     </div>
//   );
// }
