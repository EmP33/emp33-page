import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
            <li>Home</li>
            <li>Works</li>
            <li>Resources</li>
            <li>About</li>
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
