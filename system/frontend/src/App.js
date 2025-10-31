import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import CreateSurvey from "./pages/CreateSurvey";
import ReviewSurveys from "./pages/ReviewSurveys";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateSurvey />} />
            <Route path="/review" element={<ReviewSurveys />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
