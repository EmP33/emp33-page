import React from "react";
import { Box, Typography } from "@mui/material";
// Types
import { WorkType } from "../../data.types";

interface Props {
  work: WorkType;
}

const Work: React.FC<Props> = ({ work }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${work.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        clipPath: {
          xs: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          sm: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        },
        transform: { xs: "scale(1)", sm: "scale(2.5)" },
        transition: "0.3s",
        cursor: "pointer",
        filter: "brightness(55%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "&:hover": {
          filter: "brightness(100%)",
          zIndex: 5,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
      }}
    ></Box>
  );
};

export default Work;
