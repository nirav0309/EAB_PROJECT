import React from "react";
import { Header } from "./header";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};

export { Layout } ;
