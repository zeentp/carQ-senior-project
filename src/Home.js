import * as React from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Home = () => {
    let params = useParams();

    return (
        <Box sx={{ pl: 40, pt: 0 }}>
            <Typography variant="h5" noWrap component="div">
                Welcome !
            </Typography>
        </Box>


    );

}

export default Home