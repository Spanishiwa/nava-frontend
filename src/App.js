import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Marketplace } from "./components/Marketplace/Marketplace";
import { Box } from "@mui/material";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box
        component="main"
        className="App"
        sx={{
          backgroundColor: "#fafafa",
          minHeight: "100vh",
          px: { xs: 2, sm: 5 },
          py: 4
        }}
      >
        <Routes>
          <Route element={<Marketplace />} path="/"></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
