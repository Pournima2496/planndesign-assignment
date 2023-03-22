import { Box, Grid, Toolbar } from "@mui/material";
import React from "react";
import DrawingInfo from "../components/DrawingInfo";
import DrawingList from "../components/DrawingList";

const Drawing = () => {
  return (
    <Box margin="50px">
      <Toolbar />
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DrawingInfo />
        </Grid>

        <Grid item xs={12}>
        <DrawingList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Drawing;
