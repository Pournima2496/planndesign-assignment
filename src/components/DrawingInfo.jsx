import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const StyledListItems = styled(ListItem)({
  borderBottom: "1px solid black",
  justifyContent: "space-between",
});

const DrawingInfo = () => {
  return (
    <Container>
      <Grid container spacing={1}>
        {/* Left Side */}
        <Grid item xs={12} sm={8}>
          <Typography variant="h4">Title</Typography>

          <img
            src="https://www.planndesign.com/_next/image?url=https%3A%2F%2Fplanndesign.sgp1.digitaloceanspaces.com%2Fsites%2Fdefault%2Ffiles%2F2020%2F05%2Fboundary_or_compound_wall_elevation_dwg_free_cad_block_74b64e59e9.jpg&w=1080&q=75"
            width="100%"
            alt=""
          />

          <Typography>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            cum itaque nemo, voluptatem dolor inventore. corporis a natus itaque
            id dolorum ipsum facere deserunt est perferendis sit tempora totam
            ipsa, alias deleniti atque repellendus rerum
          </Typography>
          <br />
          <Typography>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            cum itaque nemo, voluptatem dolor inventore, alias deleniti atque
            repellendus rerum
          </Typography>
        </Grid>

        {/* Right Side */}

        <Grid item xs={12} sm={4}>
          <Typography>Autocad Design</Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            ratione esse beatae dolorum placeat quis quaerat eius corrupti, sit
            cupiditate, officiis aspernatur quisquam consequuntur maiores fugit
            distinctio rem excepturi nihil?
          </Typography>

          <Box m={2}>
            <Button
              variant="contained"
              sx={{ width: "100%", padding: "10px", margin: "10px 0px" }}
            >
              Download Drawing
            </Button>

            <List sx={{borderTop:"1px solid black"}}>
              <StyledListItems>
                <Typography>Size</Typography>
                93.13k
              </StyledListItems>
              <StyledListItems>
                <Typography>Type</Typography>
                Free Drawing
              </StyledListItems>
              <StyledListItems>
                <Typography>Category</Typography>
                Boundary Wall, Railing and Gate
              </StyledListItems>
              <StyledListItems>
                <Typography>Software</Typography>
                Autocad DWG
              </StyledListItems>
              <StyledListItems>
                <Typography>Collection Id</Typography>
                8279
              </StyledListItems>
              <StyledListItems>
                <Typography>Published On</Typography>
                2022-10-19
              </StyledListItems>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DrawingInfo;
