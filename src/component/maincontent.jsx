import React, { useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchItem, setSearchItem } from "../reduxSlice/searchSlice";
import { getUserData } from "../reduxSlice/userSlice";
import { getCardData } from "../reduxSlice/cardSlice";

const MainContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.users);
  const { cardData } = useSelector((state) => state.cards);
  const searchItems = useSelector((state) => state.search);

  console.log("userData>>>>>>>>", userData);
  console.log("cardData>>>>>>>>", cardData);

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getCardData());
    dispatch(clearSearchItem());
  }, [dispatch]);

  const filterData =
    searchItems &&
    userData.filter((element) => {
      return (
        element.user.toLowerCase().includes(searchItems.toLowerCase()) ||
        element.email.toLowerCase().includes(searchItems.toLowerCase()) ||
        element.department.toLowerCase().includes(searchItems.toLowerCase()) ||
        element.spendingprofile
          .toLowerCase()
          .includes(searchItems.toLowerCase())
      );
    });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.light,
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <>
      <Box md={6} sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              component={Link}
              to="/requestcard"
              variant="contained"
              sx={{
                float: "right",
                fontWeight: 500,
                fontSize: "16px",
                background: "#0069BF",
                color: "#ffff",
              }}
            >
              View Request
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "#181623",
                fontWeight: 700,
                fontSize: "22px",
              }}
            >
              New Card Requests
              <Chip
                label={cardData.length}
                style={{ marginLeft: "20px", backgroundColor: "#00B1B0" }}
              ></Chip>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={6} sx={{ padding: "20px" }}>
          <Grid item xs={16} md={12}>
            <Typography
              sx={{
                color: "#181623",
                fontWeight: 700,
                fontSize: "22px",
                marginBottom: "10px",
              }}
            >
              Search All Users
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Users"
              value={searchItems}
              onChange={(e) => dispatch(setSearchItem(e.target.value))}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {searchItems ? (
                      <IconButton
                        onClick={() => dispatch(clearSearchItem())}
                        sx={{
                          background: "#0069BF",
                          borderRadius: "5px",
                          color: "#ffffff",
                          width: "50px",
                          height: "50px",
                          cursor: "pointer",
                          position: "absolute",
                          right: 3,
                          backgroundColor: "#0069BF",
                          "&:hover": {
                            backgroundColor: "#0069BF",
                          },
                        }}
                      >
                        <ClearIcon
                          sx={{
                            background: "#0069BF",
                            borderRadius: "5px",
                            color: "#ffffff",
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                          }}
                        />
                      </IconButton>
                    ) : (
                      <IconButton
                        sx={{
                          background: "#0069BF",
                          borderRadius: "5px",
                          color: "#ffffff",
                          width: "50px",
                          height: "50px",
                          cursor: "pointer",
                          position: "absolute",
                          right: 3,
                          backgroundColor: "#0069BF",
                          "&:hover": {
                            backgroundColor: "#0069BF",
                          },
                        }}
                      >
                        <SearchIcon
                          sx={{
                            background: "#0069BF",
                            borderRadius: "5px",
                            color: "#ffffff",
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                          }}
                        />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box my={2}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            position: "absolute",
            color: "#6A6A6A",
            fontWeight: 500,
            fontSize: "20px",
            marginLeft: "20px",
          }}
        >
          Found {filterData ? filterData.length : 0} Users
        </Typography>
      </Box>

      {searchItems && (
        <Box sx={{ marginTop: "60px", padding: "20px" }}>
          <Box sx={{ width: "100%" }}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 400, borderRadius: 10 }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow sx={{ fontWeight: 500, fontSize: "18px" }}>
                    <StyledTableCell>
                      <strong>User</strong>
                    </StyledTableCell>
                    <StyledTableCell>
                      <strong>Email</strong>
                    </StyledTableCell>
                    <StyledTableCell>
                      <strong>Department</strong>
                    </StyledTableCell>
                    <StyledTableCell>
                      <strong>Spending Profile</strong>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filterData && filterData.length !== 0 ? (
                    filterData.map((element, index) => (
                      <StyledTableRow
                        hover
                        key={index}
                        onClick={() => navigate(`/tabledata/${element.id}`)}
                        sx={{
                          fontWeight: 400,
                          fontSize: "16px",
                          backgroundColor: "#EFEEEE",
                          cursor: "pointer",
                        }}
                      >
                        <StyledTableCell>{element.user}</StyledTableCell>
                        <StyledTableCell>{element.email}</StyledTableCell>
                        <StyledTableCell>{element.department}</StyledTableCell>
                        <StyledTableCell>
                          {element.spendingprofile}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        No user data found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}
      <Footer />
    </>
  );
};

export { MainContent };
