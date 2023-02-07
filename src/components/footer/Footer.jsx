import React from "react";
import Typhography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Typhography
      sx={{
        background: "rgba(0, 0, 0, 0.87)",
        padding: "50px ",
        textAlign: "center",
        color: "#ddd",
        marginTop: "45px",
      }}
    >
      Copyright all reserved Treat Company
    </Typhography>
  );
};

export default Footer;
