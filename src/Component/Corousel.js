import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Grid, Button, Container, Box, Divider } from "@mui/material";
import { height } from '@mui/system';
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    corousel: {
      maxWidth: 1200,
      [theme.breakpoints.down("md")]: {
        maxWidth: 600,
      },
    },
  }));
export default function Corousel() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src: 'https://metroautographs.com/wp-content/uploads/2019/08/Vehicle-Repair003.jpg',

        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src: 'https://hartmanautomotivelittleton.com/wp-content/uploads/auto-repair-shop-littleton.jpg',
        }
    ]
    return (
        // <div>Corousel</div>
        <Box>
            <Carousel sx={{width:1200}}>
            {
                items.map((item, i) =>
                    // <Typography>{item.name}</Typography>
                    <img width={1200} height={500} src={item.src} />
                )
            }
            </Carousel>
        </Box>
    )
}
