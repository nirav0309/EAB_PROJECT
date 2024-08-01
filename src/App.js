import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainContent } from "./component/maincontent";
// import {RequestCards} from './component/requestcard'
import { TableUserData } from "./component/tabledata";
import { AddToCart } from "./component/notification";
import { Layout } from "./component/layout";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

//suspense and lazy
const RequestCards = lazy(() => import("./component/requestcard"));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Suspense
          fallback={
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          }
        ></Suspense> */}

        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <MainContent />
              </Layout>
            }
          />
          <Route
            path="/requestcard"
            element={
              <Layout>
                <Suspense
                  fallback={
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress />
                    </Box>
                  }
                >
                  <RequestCards />
                </Suspense>
              </Layout>
            }
          />
          <Route
            path="/tabledata/:id"
            element={
              <Layout>
                <TableUserData />
              </Layout>
            }
          />
          <Route
            path="/addtocart"
            element={
              <Layout>
                <AddToCart />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
