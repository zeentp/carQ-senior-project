import React from "react";
import {
  Typography,
  Grid,
  Button,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import MainLayout from "./MainLayout";
import { Box } from "@mui/system";

export default function TestHome() {
  return (
    // <MainLayout>
      <Container>
        <Stack direction={"row"}>
          <Typography>topdsdasdasdasdasddasdasddadddddddsdasdasdasdsdddddddddddddddd</Typography>
          <img src={'https://source.unsplash.com/random'} />

        </Stack>
      </Container>
    // </MainLayout>
  );
}
