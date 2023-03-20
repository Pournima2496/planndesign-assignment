import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = ({ drawing }) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={drawing.image.formats.thumbnail.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drawing.title}
          </Typography>
          {drawing.drawing_categories.map((desc) => (
            <Typography variant="body2" color="text.secondary">
              {desc.description.substring(0, 99)+"..."}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
