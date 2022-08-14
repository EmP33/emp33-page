import React from "react";
import { Box } from "@mui/material";

interface Props {
  direction: "right" | "left";
  year: number;
  title: string;
  description: string;
}

const TimelineBlock: React.FC<Props> = ({
  direction,
  year,
  title,
  description,
}) => {
  return (
    <Box
      data-aos="fade-up"
      sx={{
        width: "100%",
        display: "grid",
        gridColumnGap: "30px",
        alignItems: "center",
        mb: 5,
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", sm: "85%", md: "42.5%" },
          background: "var(--color-primary-light)",
          p: 2,
          position: "relative",
          color: "var(--color-text)",
          marginLeft: direction === "right" ? "auto" : { xs: "auto", md: "0" },

          "&::after": {
            content: '""',
            width: "10px",
            height: "20px",
            position: "absolute",
            background: "var(--color-primary-light)",
            right: direction === "right" ? "100%" : { xs: "100%", md: "-10px" },
            top: "50%",
            transform: "translateY(-50%)",
            clipPath:
              direction === "right"
                ? "polygon(0 50%, 100% 100%, 100% 0)"
                : {
                    xs: "polygon(0 50%, 100% 100%, 100% 0)",
                    md: "polygon(0 0, 0 100% , 100% 50%)",
                  },
          },
        }}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>
        <p>{description}</p>
      </Box>
      <Box
        sx={{
          width: "75px",
          height: "75px",
          border: "2px solid var(--color-text)",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          color: "var(--color-text)",
          zIndex: 10,
          position: "absolute",
          left: { xs: "5%", md: "50%" },
          transform: "translateX(-50%)",
          background: "var(--color-primary-light)",
        }}
      >
        <h2>{year}</h2>
      </Box>
    </Box>
  );
};

export default TimelineBlock;
