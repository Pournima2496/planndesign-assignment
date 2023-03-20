import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Cards from "./Cards";
const DrawingList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios
        .get("https://www.planndesign.com/gapi/drawings")
        .catch((err) => console.log(err));
      console.log(res.data);
      setData(res.data.splice(0, 6));
    };
    getData();
  }, []);
  return (
    <Grid container spacing={1}>
      {/* Left Side */}
      <Grid item xs={12} sm={8}>
        <Typography variant="h4">Relavent Drawing</Typography>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems="center"
        >
          {data.map((drawing, index) => (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <Link to={`${drawing.id}`}>
                <Cards drawing={drawing} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Right Side */}

      <Grid item xs={12} sm={4}>
        <Typography variant="h4">Most viewed drawings</Typography>
        {data.map((item) => (
          <Card sx={{display:"flex", gap:".5rem", margin:"1px 10px"}}>
            <CardMedia
            sx={{maxWidth:"100px"}}
              component="img"
              height="100px"
              image={item.image.formats.thumbnail.url}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default DrawingList;
