import { BottomNavigation, Box, Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ mt: 8 }}>
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <BottomNavigation>
            <Typography
              variant="body2"
              color="black"
              sx={{
                // fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              © Copyright 2024, Credit Card Management
            </Typography>
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export { Footer };
