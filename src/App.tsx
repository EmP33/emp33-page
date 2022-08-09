import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";
import { useTheme } from "@mui/material/styles";
// Styles
import GlobalStyle from "./App.styles";
// Router
import { Route, Routes } from "react-router-dom";
// Components
import HomePage from "./pages/HomePage/HomePage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import WorksPage from "./pages/WorksPage/WorksPage";
// Types
import { WorkType } from "./data.types";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import WorkPage from "./pages/WorkPage/WorkPage";

const theme = createTheme({
  palette: {
    primary: { main: "#5b41f2" },
    secondary: { main: "#26272a" },
    success: { main: "#27ae60" },
    info: { main: "#1d1c1e" },
  },
});

function App() {
  const [works, setWorks] = useState<WorkType[]>([]);
  const worksRef = ref(database, "/works");
  onValue(worksRef, (snapshot) => {
    const data = snapshot.val();
    if (!works.length) setWorks(data);
  });

  if (!works.length)
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoadingPage />
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:resourceName" element={<ResourcesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:workID" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
