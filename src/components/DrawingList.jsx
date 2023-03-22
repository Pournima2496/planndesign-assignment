import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const DrawingList = () => {

  const [drawing, setDrawing] = useState([]);

  useEffect(() => {
    const getDrawing = async () => {
      let res = await axios
        .get("https://www.planndesign.com/gapi/drawings")
        .catch((err) => console.log(err));
      console.log(res.data);
      setDrawing(res.data);
    };

    getDrawing();
  }, []);

  return (
    <Grid container spacing={1}>
      {/* Left Side */}
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" >Relavent Drawing</Typography>
        <hr style={{border: "1px solid blue", margin:"20px 0", width:"10%"}}/>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems="center"
        >
          {drawing.splice(0, 6).map((item, index) => {
            return (
              <Grid item xs={8} sm={4} md={4} key={index}>
                <Link to={`drawing/${item.id}`}>
                  <Card sx={{ maxWidth: "100%", height:"420px" }}>
                    <CardMedia
                      component="img"
                      height="210"
                      image={item.image.formats.thumbnail.url}
                      alt="green iguana"
                    />
                   <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      {item.drawing_categories.map((desc, index) => (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          key={index}
                        >
                          {desc.description.substring(0, 100) + "..."}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* Right Side */}

      <Grid item xs={12} sm={4}>
        <Typography variant="h5"  >Most viewed drawings</Typography>
        <hr style={{border: "1px solid blue", margin:"20px 0", width:"20%"}}/>

        {drawing.splice(0, 8).map((item) => (
          <Link to={`drawing/${item.id}`}>
            <Card sx={{ display: "flex", gap: ".5rem", margin: "1px 10px" }}>
              <CardMedia
                sx={{ maxWidth: "100px" }}
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
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default DrawingList;
