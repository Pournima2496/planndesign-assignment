import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pndlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  const products = [
    "Autocad Drawing",
    " Autocad Store",
    " Design Ideas",
    "Videos",
  ];

  const links = [
    "Contact",
    "FAQ's",
    "Privacy Policy",
    "Subscription Plans",
    "Give your feedback",
    "Terms and Conditions",
  ];

  const icons = [
    <FacebookIcon />,
    <TwitterIcon />,
    <YouTubeIcon />,
    <LinkedInIcon />,
    <GoogleIcon />,
    <InstagramIcon />,
    <PinterestIcon />,
  ];
  return (
    <Box margin="0px 50px" classname="footer">
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        marginTop="100px"
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={4} md={4}>
          <img src={logo} alt="" width="200px" />
          <Typography>
            &copy;2023 Copyright:<Link className="link">planndesign.com</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          {/* Products */}
          <Typography variant="h6">Products</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: ".5rem",
              margin: "10px 0",
            }}
          >
            {products.map((product) => (
              <Typography>
                <Link className="link">{product}</Link>
              </Typography>
            ))}
          </Box>

          {/* Links */}
          <Typography variant="h6">USEFUL LINKS</Typography>
          <List className="link">
            {links.map((link) => (
              <ListItem>
                <Link className="link">{link}</Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          {/* Icons */}

          <Typography>Follow Us</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: "1rem",
              margin: "20px 0",
              width: { xs: "80%", sm: "50%" },
            }}
          >
            {icons.map((icon) => (
              <Link className="link">{icon}</Link>
            ))}
          </Box>
          <Typography>
            <Link className="link">About us</Link>
          </Typography>
          <Box>
            <Typography>
              <HomeIcon />
              Jaypee Klassic, Noida
            </Typography>
            <Typography>
              <MailIcon />
              info@planndesign.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
