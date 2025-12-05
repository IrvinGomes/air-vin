import { FC } from "react";
import { FooterProps } from "./Footer.type";
import { Box, Stack, Typography } from "@mui/material";

export const Footer: FC<FooterProps> = () => {

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{ borderTop: "1px whitesmoke solid", background: "black" }}
      p={"2em"}
    >
      <Box display={"flex"} flexDirection={"column"}>
        
      </Box>
    </Box>
  );
};
