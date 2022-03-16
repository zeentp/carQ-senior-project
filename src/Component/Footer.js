import React from 'react'
import { Typography, Grid, Button, Container,Box,Divider } from "@mui/material";
import EngineeringIcon from '@mui/icons-material/Engineering';

export default function footer() {
    return (
        <Box bgcolor='#1a237e' color='white'
            // px={{ xs: 3, sm: 10 }}
            // py={{ xs: 5, sm: 10 }}

            sx={{paddingLeft: 50}}
        >
            <Container >
                <Typography variant="h1" textAlign={'center'}>
                    Our Services
                </Typography>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={4}>
                        <Box display={'flex'}>
                            <EngineeringIcon></EngineeringIcon>
                            <Box sx={{ textAlign: 'end'}}>
                                TIRES & BRAKES
                            </Box>
                        </Box>
                        <Divider sx={{ background: 'white' }} />
                        <Box sx={{pt:1}}>
                            <Typography variant="h6">
                                Get the right tire for your vehicle at the right price. Our factory trained ASE certified brake experts specialize in complete front and rear brake service.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box display={'flex'}>
                            <EngineeringIcon></EngineeringIcon>
                            <Box sx={{ textAlign: 'end' }}>
                                TIRES & BRAKES
                            </Box>
                        </Box>
                        <Divider sx={{ background: 'white' }} />
                        <Box sx={{pt:1}}>
                            <Typography variant="h6">
                                Get the right tire for your vehicle at the right price. Our factory trained ASE certified brake experts specialize in complete front and rear brake service.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box display={'flex'}>
                            <EngineeringIcon></EngineeringIcon>
                            <Box sx={{ textAlign: 'end' }}>
                                TIRES & BRAKES
                            </Box>
                        </Box>
                        <Divider sx={{ background: 'white' }} />
                        <Box sx={{pt:1}}>
                            <Typography variant="h6">
                                Get the right tire for your vehicle at the right price. Our factory trained ASE certified brake experts specialize in complete front and rear brake service.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
