import React from "react";
// Styles
import GlobalStyle from "./App.styles";
// Router
import { Route, Routes } from "react-router-dom";
// Components
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
