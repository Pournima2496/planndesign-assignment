import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import axios from "axios";

const StyledListItems = styled(ListItem)({
  borderBottom: "1px solid black",
  justifyContent: "space-between",
});

const DrawingInfo = () => {
  const { id } = useParams();

  const [draw, setDraw] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `https://www.planndesign.com/gapi/drawings/${id}`
      );
      console.log(res.data);
      setDraw(res.data);
    };

    getPost();
  }, [id]);

  return (
    <Container>
      <Grid container spacing={1}>
        {/* Left Side */}
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" className="title">
            {draw.title}
          </Typography>
          <img src={draw.image.url} width="100%" alt="" style={{margin:"30px 0"}} />
          {draw.drawing_categories.map((desc, ind) => {
            return <Typography key={ind}>{desc.description}</Typography>;
          })}
        </Grid>

        {/* Right Side */}

        <Grid item xs={12} sm={4}>
          <Typography>Autocad Design</Typography>
          <Typography sx={{ display: "flex", gap: ".5rem" }}>
            <AccountCircleIcon />
            By<Link className="link">{draw.author.email}</Link>
          </Typography>
          {draw.drawing_categories.map((desc, ind) => {
            return <Typography key={ind}>{desc.description}</Typography>;
          })}

          <Box m={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                padding: "10px",
                margin: "10px 0px",
                backgroundColor: "#4a6cf7",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Download Drawing
            </Button>

            <List sx={{ borderTop: "1px solid black" }}>
              <StyledListItems>
                Size
                <Typography> {draw.drawing_file.size}k</Typography>
              </StyledListItems>
              <StyledListItems>
                <Typography>Type</Typography>
                Free Drawing
              </StyledListItems>
              <StyledListItems>
                Category
                {draw.drawing_categories.map((cat, ind) => (
                  <Typography key={ind}>{cat.name}</Typography>
                ))}
              </StyledListItems>
              <StyledListItems>
                Software
                {draw.drawing_softwares.map((software, ind) => (
                  <Typography key={ind}>{software.name}</Typography>
                ))}
              </StyledListItems>
              <StyledListItems>
                Collection Id
                <Typography>{draw.id}</Typography>
              </StyledListItems>
              <StyledListItems>
                Published On
                <Typography>
                  {new Date(draw.published_at).toLocaleDateString()}
                </Typography>
              </StyledListItems>
            </List>
          </Box>
          <Box m={2} >
            <Typography variant="h6">Search By Tags</Typography>
            <List sx={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              {draw.tags.map((tag) => (
                <ListItem
                  sx={{ backgroundColor: "#1d2144", borderRadius: "15px" }}
                >
                  <Link style={{ color: "#fff" }}>{tag.name}</Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DrawingInfo;
