import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
import { Footer } from "./footer";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { MyAPI1 } from "./myapi";

const RequestCards = () => {
  const [cardData, setCardData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  // const location = useLocation();
  // const pathnames = location.pathname.split("/").filter((x) => x);
  // const breadcrumbs = pathnames.map((value, index) => {
  //   const last = index === pathnames.length - 1;
  //   const to = `/${pathnames.slice(0, index + 1).join("/")}`;
  //   const label = value.charAt(0).toUpperCase() + value.slice(1);

  //   return last ? (
  //     <span key={to}>{label}</span>
  //   ) : (
  //     <Link key={to} href={to}>
  //       {label}
  //     </Link>
  //   );
  // });

  const fetchCardData = async () => {
    const response = await MyAPI1.get("/");
    const userResponse = response.data;
    setCardData(userResponse);
  };

  React.useEffect(() => {
    fetchCardData();
  }, []);

  if (!cardData) {
    return;
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {/* <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{ padding: "40px" }}
      >
        <Link underline="none" href="/" color="black">
          Credit Card Management
        </Link>
        {breadcrumbs && (
          <span style={{ color: "#0069BF" }}>
            Card Requests
            <Chip
              label={`${cardData.length}`}
              style={{ marginLeft: "20px", backgroundColor: "#00B1B0" }}
            ></Chip>
          </span>
        )}
      </Breadcrumbs> */}
      <Box display="flex" alignItems="center" sx={{ padding: "40px" }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Typography
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "black", cursor: "pointer" }}
          >
            Credit Card Management
          </Typography>
          <Typography
            href="/card-requests"
            style={{ color: "#0069BF", textDecoration: "none" }}
          >
            Card Requests
          </Typography>
        </Breadcrumbs>
        <Chip
          label={`${cardData.length}`}
          style={{ marginLeft: "20px", backgroundColor: "#00B1B0" }}
        ></Chip>
      </Box>

      <Box sx={{ flexGrow: 1, margin: "35px" }}>
        <Grid container spacing={2}>
          {cardData.map((element, index) => (
            <Grid item xs={16} md={6} key={index}>
              <Card
                sx={{
                  minWidth: 275,
                  border: "1px solid grey",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      fontSize: "20px",
                      color: "#0069BF",
                    }}
                  >
                    {element.name}
                  </Typography>
                  <Box sx={{ margin: "10px" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#",
                      }}
                    >
                      {`Department: ${element.department}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#",
                      }}
                    >
                      {`Job Title: ${element.jobTitle}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#",
                        underline: "1px solid blue",
                      }}
                    >
                      {"Email:"}
                      <Link href="#">{` ${element.email}`}</Link>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#",
                      }}
                    >
                      {`Hire Data: ${element.hireDate}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#",
                      }}
                    >
                      {`Current Level: ${element.currentLevel}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#",
                      }}
                    >
                      {`Traveler: ${element.traveler}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#",
                      }}
                    >
                      {"Reason: "} <br />
                      <Typography
                        variant="subtitle"
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          fontSize: "18px",
                          color: "#",
                        }}
                      >
                        {` ${element.reason}`}
                      </Typography>
                    </Typography>

                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Select
                        defaultValue="Go Member"
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          fontSize: "18px",
                          color: "#",
                          height: "40px",
                          width: "140px",
                          marginTop: "15px",
                        }}
                      >
                        <MenuItem value="Go Member">Go Member</MenuItem>
                        <MenuItem value="Member1">Member1</MenuItem>
                        <MenuItem value="Member2">Member2</MenuItem>
                      </Select>
                      <Box>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ marginTop: "10px", marginRight: "10px" }}
                          onClick={handleOpen}
                        >
                          Approve Card
                        </Button>
                        <Modal
                          sx={{ backgroundColor: "transparent", opacity: 0.7 }}
                          open={open}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nobis ipsum quidem distinctio nisi soluta
                              illo nulla possimus natus repellat laboriosam!
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Eligendi dolorem eum quos doloribus placeat?
                              Pariatur obcaecati molestiae aperiam unde quas.
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleClose}
                              sx={{
                                marginTop: "10px",
                              }}
                            >
                              Approve
                            </Button>
                          </Box>
                        </Modal>

                        <Button
                          variant="contained"
                          sx={{
                            marginTop: "10px",
                            backgroundColor: "#507087",
                            "&:hover": {
                              backgroundColor: "#507087",
                            },
                          }}
                        >
                          Reject
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export { RequestCards };
