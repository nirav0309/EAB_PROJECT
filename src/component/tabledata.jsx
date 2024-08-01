import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  Box,
  Breadcrumbs,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./footer";
import { getTableData } from "../reduxSlice/tableuserSlice";

const TableUserData = () => {
  const { id } = useParams();

  const { tableData } = useSelector((state) => state.tableUser);
  const dispatch = useDispatch();
  // console.log("userData>>>>>", tableData);

  useEffect(() => {
    dispatch(getTableData());
  }, );

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

  const userDataId = tableData.find((e) => e.id === id);
  // console.log("userDataId>>>>>>>>>", userDataId);

  return (
    <>
      <Box display="flex" alignItems="center" sx={{ padding: "20px" }}>
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
            User Data
          </Typography>
        </Breadcrumbs>
        <Chip
          label={userDataId ? id.length : ""}
          style={{ marginLeft: "20px", backgroundColor: "#00B1B0" }}
        ></Chip>
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Typography sx={{ marginLeft: "5px", marginBottom: "20px" }}>
          User Id: {id}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400, borderRadius: 10 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    // fontFamily: "Poppins",
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
                {userDataId && userDataId.length !== 0 ? (
                  <StyledTableRow
                    key={userDataId.id}
                    sx={{
                      fontWeight: 400,
                      fontSize: "16px",
                      backgroundColor: "#EFEEEE",
                    }}
                  >
                    <StyledTableCell>{userDataId.user}</StyledTableCell>
                    <StyledTableCell>{userDataId.email}</StyledTableCell>
                    <StyledTableCell>{userDataId.department}</StyledTableCell>
                    <StyledTableCell>
                      {userDataId.spendingprofile}
                    </StyledTableCell>
                  </StyledTableRow>
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
        <Footer />
      </Box>
    </>
  );
};

export { TableUserData };
