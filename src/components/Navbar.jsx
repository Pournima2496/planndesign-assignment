import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { List, ListItem } from "@mui/material";
import logo from "../assets/pndlogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
const Navstyling = {
  navbar: {
    backgroundColor: "transparent",
    color: "black",
    padding: "0px 50px",
  },
};

const Search = styled(InputBase)({
  border: "1px solid grey",
  width: "200px",
  padding: "3px 10px",
});

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={Navstyling.navbar} className="nav">
        <Toolbar>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItem>
              <Link>
                <img src={logo} alt="" width="150px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                Drawing Store <KeyboardArrowDownIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                Design Ideas <KeyboardArrowDownIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                Buying Guide <KeyboardArrowDownIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link>Videos</Link>
            </ListItem>
            <ListItem>
              <Link>Portfolio</Link>
            </ListItem>
            <ListItem>
              <Link>
                Login <KeyboardArrowDownIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Search placeholder="Search" />
            </ListItem>
          </List>
          {/* <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
          */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
