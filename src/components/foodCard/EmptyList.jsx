import React from "react";
import Typhography from "@mui/material/Typography";

const EmptyList = () => {
  return (
    <>
      {
        <Typhography sx={{ margin: "auto", marginTop: "50px" }} variant="h5">
          Empty Food Items List
        </Typhography>
      }
    </>
  );
};

export default EmptyList;
