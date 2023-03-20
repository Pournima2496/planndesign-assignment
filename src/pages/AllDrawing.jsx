import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const AllDrawing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios
        .get("https://www.planndesign.com/gapi/drawings")
        .catch((err) => console.log(err));
      console.log(res.data);
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <Container>
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
    </Container>
  );
};

export default AllDrawing;
