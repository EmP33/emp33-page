import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// Styles
import GlobalStyle from "./App.styles";
// Router
import { Route, Routes } from "react-router-dom";
// Components
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import WorksPage from "./pages/WorksPage/WorksPage";
// Types
import { WorkType } from "./data.types";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import WorkPage from "./pages/WorkPage/WorkPage";

export const theme = createTheme({
  palette: {
    primary: { main: "#5b41f2" },
    secondary: { main: "#26272a" },
    success: { main: "#27ae60" },
    info: { main: "#1d1c1e" },
  },
});

function App() {
  AOS.init();
  const [works, setWorks] = useState<WorkType[]>([]);

  const worksRef = ref(database, "/works");
  onValue(worksRef, (snapshot) => {
    const data = snapshot.val();
    if (!works.length) setWorks(data);
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:resourceName" element={<ResourcesPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:workID" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
