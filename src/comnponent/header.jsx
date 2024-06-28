import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import LogoImage from "../assets/Credit_Card.png";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const pages = ["Credit Card Management", "Sending Profile"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header style={{ margin: "10px" }}>
      <AppBar
        position="static"
        sx={{
          borderRadius: "5px",
          background: "#002746",
          height: "80px",
          padding: "8px",
        }}
      >
        <Container maxWidth="l">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={LogoImage}
                alt="logo-img"
                style={{ height: "50px", width: "50px" }}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      component={Link}
                      to="/"
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div>
                <Typography sx={{ pl: "9px" }}>
                  <Typography
                    variant="h6"
                    to="/"
                    component={Link}
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      fontSize: "20px",
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                      pl: "9px",
                    }}
                  >
                    Credit Card <br />
                    Management
                  </Typography>
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ pl: "50px" }}>
                  <Typography
                    variant="h6"
                    to="/"
                    component={Link}
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "16px",
                      textDecoration: "underline",
                      color: "#00B1B0",
                      cursor: "Default",
                    }}
                  >
                    Credit Card Management
                  </Typography>
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ pl: "30px" }}>
                  <Typography
                    to="/"
                    component={Link}
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "16px",
                      textDecoration: "none",
                      color: "#ffff",
                      cursor: "pointer",
                    }}
                  >
                    Spending Profile
                  </Typography>
                </Typography>
              </div>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography sx={{ p: 1 }}>User Name</Typography>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </header>
  );
};
export { Header };
