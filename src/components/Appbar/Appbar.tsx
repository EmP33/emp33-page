import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// Styles
import { NavContainer, IconButton } from "./Appbar.styles";
// Icons
import { IoSearchOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const Appbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <NavContainer>
      <ul>
        <li onClick={() => navigate("/")}>
          <h5>EMP33</h5>
        </li>
        {matches && (
          <>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active-nav" : ""}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/works"
              className={
                location.pathname.includes("/works") ? "active-nav" : ""
              }
            >
              <li>Works</li>
            </NavLink>
            <NavLink
              to="/resources"
              className={
                location.pathname.includes("/resources") ? "active-nav" : ""
              }
            >
              <li>Resources</li>
            </NavLink>
            <NavLink
              to="/about"
              className={
                location.pathname.includes("/about") ? "active-nav" : ""
              }
            >
              <li>About</li>
            </NavLink>
          </>
        )}
      </ul>

      <div>
        <IconButton>
          <IoSearchOutline />
        </IconButton>
        <IconButton onClick={() => navigate("/contact")}>
          <FaEnvelope />
        </IconButton>
      </div>
    </NavContainer>
  );
};

export default Appbar;
