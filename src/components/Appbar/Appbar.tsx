import React, { useState, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Styles
import { NavContainer, IconButton } from "./Appbar.styles";
// Icons
import { IoSearchOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import MenuDialog from "../MenuDialog/MenuDialog";

const listVariant = {
  hidden: {
    y: "-5vh",
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
};

const Appbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <NavContainer>
      <ul>
        <motion.li
          custom={1}
          variants={listVariant}
          initial="hidden"
          animate="visible"
          onClick={() => navigate("/")}
        >
          <h5>EMP33</h5>
        </motion.li>
        {matches && (
          <>
            <motion.li
              custom={2}
              variants={listVariant}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to="/"
                className={location.pathname === "/" ? "active-nav" : ""}
              >
                Home
              </NavLink>
            </motion.li>

            <motion.li
              custom={3}
              variants={listVariant}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to="/works"
                className={
                  location.pathname.includes("/works") ? "active-nav" : ""
                }
              >
                Works
              </NavLink>
            </motion.li>
            <motion.li
              custom={4}
              variants={listVariant}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to="/resources"
                className={
                  location.pathname.includes("/resources") ? "active-nav" : ""
                }
              >
                Resources
              </NavLink>
            </motion.li>
            <motion.li
              custom={5}
              variants={listVariant}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to="/about"
                className={
                  location.pathname.includes("/about") ? "active-nav" : ""
                }
              >
                About
              </NavLink>
            </motion.li>
          </>
        )}
      </ul>

      <div>
        <IconButton
          onClick={handleClickOpen}
          custom={6}
          variants={listVariant}
          initial="hidden"
          animate="visible"
        >
          <IoSearchOutline />
        </IconButton>
        <IconButton
          onClick={() => navigate("/contact")}
          custom={7}
          variants={listVariant}
          initial="hidden"
          animate="visible"
        >
          <FaEnvelope />
        </IconButton>
      </div>
      <MenuDialog handleClose={handleClose} open={open} />
    </NavContainer>
  );
};

export default Appbar;
