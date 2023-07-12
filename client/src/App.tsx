import { Box, CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";

function App() {
  // Run this once and memoize it
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        {/* For theme settings */}
        <ThemeProvider theme={theme}>
          {/* For CSS reset baseline */}
          <CssBaseline />
          {/* Top, right, bottom, left */}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/predictions"
                element={<div>Predictions page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
