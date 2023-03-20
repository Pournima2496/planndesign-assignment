import { Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import DrawingInfo from "../components/DrawingInfo";
import DrawingList from "../components/DrawingList";

const Drawing = () => {
  return (
    <Container>
    <Toolbar />
    <hr />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DrawingInfo />
        </Grid>

        <Grid item xs={12} >
          <DrawingList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Drawing;
