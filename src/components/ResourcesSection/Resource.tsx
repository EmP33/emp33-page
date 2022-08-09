import React from "react";
import { Paper, Typography } from "@mui/material";
// Types
import { ResourceType } from "../../data.types";

interface Props {
  resource: ResourceType;
}

const Resource: React.FC<Props> = ({ resource }) => {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Paper
        elevation={1}
        sx={{
          background: "var(--color-primary-light)",
          p: 2,
          color: "#fff",
          height: "100%",
          width: "100%",
          pointerEvent: "none",
          borderLeft:
            resource.category === "Javascript"
              ? "4px solid #f0db4f"
              : resource.category === "SVG"
              ? "4px solid #fc6a03"
              : resource.category === "React"
              ? "4px solid #61dbfb"
              : resource.category === "Colors"
              ? "4px solid #3FA796"
              : resource.category === "Logo"
              ? "4px solid #FF1E00"
              : resource.category === "Database"
              ? "4px solid #FF1E00"
              : resource.category === "Hosting"
              ? "4px solid #100720"
              : resource.category === "Tools"
              ? "4px solid #E8AA42"
              : resource.category === "Pictures"
              ? "4px solid #2B7A0B"
              : resource.category === "Fonts"
              ? "4px solid #AC7088"
              : resource.category === "Layout"
              ? "4px solid #A10035"
              : "4px solid #ab49de",
          cursor: "pointer",
          "&:hover": {
            background: "#31384b",
            boxShadow:
              resource.category === "Javascript"
                ? "-6px 0px 4px 0px #f0db4f"
                : resource.category === "SVG"
                ? "-6px 0px 4px 0px #fc6a03"
                : resource.category === "React"
                ? "-6px 0px 4px 0px #61dbfb"
                : resource.category === "Colors"
                ? "-6px 0px 4px 0px #3FA796"
                : resource.category === "Logo"
                ? "-6px 0px 4px 0px #FF1E00"
                : resource.category === "Database"
                ? "-6px 0px 4px 0px #FF1E00"
                : resource.category === "Hosting"
                ? "-6px 0px 4px 0px #100720"
                : resource.category === "Tools"
                ? "-6px 0px 4px 0px #E8AA42"
                : resource.category === "Pictures"
                ? "-6px 0px 4px 0px #2B7A0B"
                : resource.category === "Fonts"
                ? "-6px 0px 4px 0px #AC7088"
                : resource.category === "Layout"
                ? "-6px 0px 4px 0px #A10035"
                : "-6px 0px 4px 0px #ab49de",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color:
              resource.category === "Javascript"
                ? "#f0db4f"
                : resource.category === "SVG"
                ? "#fc6a03"
                : resource.category === "React"
                ? "#61dbfb"
                : resource.category === "Colors"
                ? "#3FA796"
                : resource.category === "Logo"
                ? "#FF1E00"
                : resource.category === "Database"
                ? "#FF1E00"
                : resource.category === "Hosting"
                ? "#100720"
                : resource.category === "Tools"
                ? "#E8AA42"
                : resource.category === "Pictures"
                ? "#2B7A0B"
                : resource.category === "Fonts"
                ? "#AC7088"
                : resource.category === "Layout"
                ? "#A10035"
                : "#ab49de",
            letterSpacing: 2,
            fontWeight: 100,
          }}
        >
          {resource.category.toUpperCase()}
        </Typography>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {resource.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "var(--color-text)" }}>
          {resource.description}
        </Typography>
      </Paper>
    </a>
  );
};

export default Resource;
