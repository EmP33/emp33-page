import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
// Styles
import { NavContainer, IconButton } from "./Appbar.styles";
// Icons
import { IoSearchOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <NavContainer>
      <ul>
        <li>
          <h5>EMP33</h5>
        </li>
        {matches && (
          <>
            <Link to="#resource">
              <li>Home</li>
            </Link>
            <Link to="#works">
              <li>Works</li>
            </Link>
            <Link to="#resource">
              <li>Resources</li>
            </Link>
            <Link to="#about">
              <li>About</li>
            </Link>
          </>
        )}
      </ul>

      <div>
        <IconButton>
          <IoSearchOutline />
        </IconButton>
        <IconButton>
          <FaEnvelope />
        </IconButton>
      </div>
    </NavContainer>
  );
};

export default Appbar;
