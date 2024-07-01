import * as React from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
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
import { MyAPI, MyAPI1 } from "./myapi";
import { Link } from "react-router-dom";
import { Footer } from "./footer";
import ClearIcon from "@mui/icons-material/Clear";

const MainContent = () => {
  const [data, setData] = React.useState([]);

  const [searchItems, setSearchItems] = React.useState("");
  const [cardData, setCardData] = React.useState(null);
  // const [clear, setClear] = React.useState("");

  const handleSearch = (e) => {
    setSearchItems(e.target.value);
  };

  const filterData = data.filter((element) => {
    return (
      element.user.toLowerCase().includes(searchItems.toLowerCase()) ||
      element.email.toLowerCase().includes(searchItems.toLowerCase()) ||
      element.department.toLowerCase().includes(searchItems.toLowerCase()) ||
      element.spendingprofile.toLowerCase().includes(searchItems.toLowerCase())
    );
  });

  const fetchData = async () => {
    const response = await MyAPI.get("/");
    const userResponse = response.data;
    setData(userResponse);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

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

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "90%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "2px",
  }));

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
    <div>
      <Box my={6}>
        <Button
          component={Link}
          to="/card"
          variant="contained"
          sx={{
            float: "right",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "16px",
            background: "#0069BF",
            color: "#ffff",
          }}
        >
          View Request
        </Button>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            position: "absolute",
            color: "#181623",
            marginBottom: "20px",
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: "24px",
          }}
        >
          New Card Requests
          <Chip
            label={`${cardData.length}`}
            style={{ marginLeft: "20px", backgroundColor: "#00B1B0" }}
          ></Chip>
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={16} md={12}>
            <Typography
              sx={{
                color: "#181623",
                fontWeight: "700",
                fontFamily: "Roboto",
                fontSize: "24px",
                marginTop: "60px",
              }}
            >
              Search All Users
            </Typography>
          </Grid>

          <Grid item xs={16} md={12}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Users"
              value={searchItems}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <SearchIconWrapper
                    sx={{
                      background: "#0069BF",
                      borderRadius: "5px",
                      color: "#ffffff",
                      position: "absolute",
                      right: 1,
                      width: "20px",
                    }}
                  >
                    {searchItems ? (
                      <ClearIcon
                        style={{
                          position: "absolute",
                          left: 15,
                        }}
                      />
                    ) : (
                      <SearchIcon
                        style={{
                          position: "absolute",
                          left: 15,
                        }}
                      />
                    )}
                  </SearchIconWrapper>
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
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "20px",
            marginLeft: "20px",
          }}
        >
          Found {data.length} Users
        </Typography>
      </Box>

      {searchItems && (
        <Box sx={{ marginTop: "60px" }}>
          <div className="MyTable" style={{ width: "100%" }}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 400, borderRadius: 10 }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
                    <StyledTableCell>
                      <strong>User</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell>
                      <strong>Email</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell>
                      <strong>Department</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell>
                      <strong>Spending Profile</strong>{" "}
                    </StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filterData.map((element, index) => (
                    <StyledTableRow
                      key={index}
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                        backgroundColor: "#EFEEEE",
                      }}
                    >
                      <StyledTableCell>{element.user}</StyledTableCell>
                      <StyledTableCell>{element.email}</StyledTableCell>
                      <StyledTableCell>{element.department}</StyledTableCell>
                      <StyledTableCell>
                        {" "}
                        {element.spendingprofile}{" "}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      )}
      <Footer />
    </div>
  );
};

export { MainContent };
