import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
// Types
import { WorkType } from "../../data.types";

interface Props {
  work: WorkType;
}

const Work: React.FC<Props> = ({ work }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`/works/${work.id}`)}
      sx={{
        position: "relative",
        backgroundImage: `url(${work.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        cursor: "pointer",
        filter: { xs: "brightness(90%)", sm: "brightness(55%)" },

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
