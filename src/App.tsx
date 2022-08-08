import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Styles
import GlobalStyle from "./App.styles";
// Router
import { Route, Routes } from "react-router-dom";
// Components
import HomePage from "./pages/HomePage";

const theme = createTheme({
  palette: {
    primary: { main: "#5b41f2" },
    secondary: { main: "#26272a" },
    success: { main: "#27ae60" },
    info: { main: "#1d1c1e" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
