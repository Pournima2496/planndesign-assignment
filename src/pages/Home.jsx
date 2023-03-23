import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
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
    <Box margin="100px 50px"  >
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        marginTop="100px" 
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
      >
        {drawing.map((item, index) => {
          return (
            <Grid item xs={12} sm={4} md={4} key={index} >
              <Link to={`/drawing/${item.id}`}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image={item.image.formats.thumbnail.url}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className="heading">
                        {item.title}
                      </Typography>
                      {item.drawing_categories.map((desc, index) => (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          key={index}
                        >
                          {desc.description.substring(0, 150)+"..."}
                        </Typography>
                      ))}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
