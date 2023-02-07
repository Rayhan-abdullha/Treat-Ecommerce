import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingWrapper } from "./LoadingStyle";

export default function Loading() {
  return (
    <LoadingWrapper>
      <CircularProgress disableShrink />;
    </LoadingWrapper>
  );
}
