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
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material";

const pages = ["Credit Card Management", "Sending Profile"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <header style={{ margin: "10px" }}>
      <AppBar
        position="static"
        sx={{
          borderRadius: "10px",
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
              // component="a"
              // href="#"
              component={Link}
              to="/"
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                // justifyContent: "end",
              }}
            >
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
              {/* Replace with box */}
              <Box>
                <Typography sx={{ pl: "9px" }}>
                  <Typography
                    variant="h6"
                    to="/"
                    component={Link}
                    style={{
                      // fontFamily: "Roboto",
                      fontWeight: 700,
                      fontSize: "18px",
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
              </Box>
              <Box
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
                      // fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "16px",
                      textDecoration: "underline",
                      color: "#00B1B0",
                      cursor: "pointer",
                    }}
                  >
                    Credit Card Management
                  </Typography>
                </Typography>
              </Box>
              <Box
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
                      // fontFamily: "Poppins",
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
              </Box>
            </Box>

            <Box >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <IconButton
                  aria-label="cart"
                  component={Link}
                  to="/addtocart"
                  sx={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "100px",
                  }}
                >
                  <StyledBadge badgeContent={0} color="error">
                    <NotificationsIcon />
                  </StyledBadge>
                </IconButton>

                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography sx={{ p: 1 }}>User Name</Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
export { Header };

