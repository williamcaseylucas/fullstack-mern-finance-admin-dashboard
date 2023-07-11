import { Box, CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

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
          <Box width="100%" height="100%"></Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
