import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Footer } from "./footer";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCard,
  deleteCardSuccess,
  getCardData,
  updateCard,
} from "../reduxSlice/cardSlice";

const RequestCards = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.cards.cardData);

  console.log("card component data", cardData);
  // const cardDataArray = Object.entries(cardData)
  // console.log("cardDataArray>>>>>>>>>>>",cardDataArray)

  React.useEffect(() => {
    dispatch(getCardData());
    dispatch(deleteCardSuccess());
  }, [dispatch]);

  if (!cardData) {
    return null;
  }

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
  };

  const handleMemberChange = (id, nextLevel) => {
    dispatch(updateCard({ id, nextLevel }));
  };

  return (
    <>
      {/* Replacer with empty fragment */}
      <Box
        sx={{
          padding: "40px",
          display: "flex",
          alignItems: "center",
        }}
      >
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
            href="/"
            style={{ color: "#0069BF", textDecoration: "none" }}
          >
            Card Requests
          </Typography>
        </Breadcrumbs>
        <Chip
          label={cardData.length}
          style={{ marginLeft: "20px", backgroundColor: "#00B1B0" }}
        ></Chip>
      </Box>

      <Box sx={{ flexGrow: 1, margin: "25px", padding: "10px" }}>
        <Grid container spacing={4}>
          {cardData.map((element, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  minWidth: 275,
                  border: "1px solid grey",
                }}
              >
                <CardContent>
                  <Box>
                    {/* REplace with box */}
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "25px",
                      }}
                    >
                      <Typography
                        sx={{ color: "#0069BF", marginBottom: "25px" }}
                      >
                        {element.name}
                      </Typography>
                      {/* REplace with box */}
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: "10px",
                            minWidth: "100px",
                            textAlign: "right",
                          }}
                        >
                          Department:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            // fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "16px",
                            marginTop: "2px",
                          }}
                        >
                          {element.department}
                        </Typography>
                      </Box>
                      {/* REplace with box */}
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: "10px",
                            minWidth: "100px",
                            textAlign: "right",
                          }}
                        >
                          Job Title:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            // fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "16px",
                          }}
                        >
                          {element.jobTitle}
                        </Typography>
                      </Box>
                      {/* REplace with box */}
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: "10px",
                            minWidth: "100px",
                            textAlign: "right",
                          }}
                        >
                          Email:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            // fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "16px",
                            textDecoration: "underline",
                            color: "#0069BF",
                          }}
                        >
                          {element.email}
                        </Typography>
                      </Box>
                      {/* REplace with box */}
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: "10px",
                            minWidth: "100px",
                            textAlign: "right",
                          }}
                        >
                          HireDate:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            // fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "16px",
                          }}
                        >
                          {element.hireDate}
                        </Typography>
                      </Box>
                      {/* REplace with box */}
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: "10px",
                            minWidth: "100px",
                            textAlign: "right",
                          }}
                        >
                          Go Member:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            // fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "16px",
                          }}
                        >
                          {element.currentLevel}
                        </Typography>
                      </Box>
                      {/* REplace with box */}
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: "10px",
                            minWidth: "100px",
                            textAlign: "right",
                          }}
                        >
                          Traveler:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            // fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "16px",
                          }}
                        >
                          {element.traveler}
                        </Typography>
                      </Box>
                      {/* REplace with box */}
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginBottom: "5px",
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: "10px",
                            minWidth: "100px",
                            textAlign: "right",
                          }}
                        >
                          Reason:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            // fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "16px",
                            // marginTop: "5px",
                          }}
                        >
                          {element.reason}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Select
                          value={element.currentLevel}
                          onChange={(e) =>
                            handleMemberChange(element.id, e.target.value)
                          }
                          sx={{
                            fontWeight: 400,
                            fontSize: "16px",
                            height: "40px",
                            width: "140px",
                            marginTop: "15px",
                          }}
                        >
                          <MenuItem value="Go Member">Go Member</MenuItem>
                          <MenuItem value="Member1">Member1</MenuItem>
                          <MenuItem value="Member2">Member2</MenuItem>
                          <MenuItem value="Member3">Member3</MenuItem>
                        </Select>
                        <Box>
                          {/* <Grid>
                            <Grid item xs={12}> */}
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: "16px", marginRight: "10px" }}
                          >
                            Approve Card
                          </Button>
                          {/* </Grid>
                            <Grid item xs={12}> */}
                          <Button
                            onClick={() => handleDelete(element.id)}
                            variant="contained"
                            sx={{
                              marginTop: "16px",
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

// export { RequestCards };
export default RequestCards;
