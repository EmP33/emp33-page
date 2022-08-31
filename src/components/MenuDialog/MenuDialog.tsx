import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// Components
import {
  Button,
  Dialog,
  DialogContent,
  Slide,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
// Styles
import { Navigation, SocialMedia } from "./MenuDialog.styles";
// Icons
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineCodepen, AiOutlineClose } from "react-icons/ai";

// Images
import { avatar } from "../../assets/index";

interface Props {
  handleClose: () => void;
  open: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const MenuDialog: React.FC<Props> = ({ handleClose, open }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Dialog
      fullScreen={!matches}
      fullWidth={true}
      maxWidth="md"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <Box
        sx={{
          background: "var(--color-primary)",
          textAlign: "center",
          height: !matches ? "100vh" : "auto",
          display: "grid",
          alignContent: "center",
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 10,
            fontSize: "32px",
            color: "var(--color-text)",
            display: { xs: "block", sm: "none" },
          }}
        >
          <AiOutlineClose />
        </Button>
        <Typography
          variant="h4"
          sx={{
            color: "#aaa",
            letterSpacing: 7,
            p: 5,
            borderBottom: "2px solid var(--color-text)",
          }}
        >
          EMP33
        </Typography>
        <DialogContent sx={{ p: 0 }}>
          <Grid container>
            <Grid item xs={12}>
              <Navigation>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/works">Works</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </Navigation>
            </Grid>

            <Grid item xs={12}>
              <SocialMedia>
                <li>
                  <a
                    href="https://www.instagram.com/marek_p1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/EmP33"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/marekpur2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/endipl2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineCodepen />
                  </a>
                </li>
              </SocialMedia>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default MenuDialog;
