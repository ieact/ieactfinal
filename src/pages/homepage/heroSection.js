import { Box, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      width="100vw"
      height={"100vh"}
      display="flex"
      justifyContent="flex-end"
      sx={{
        position: "relative",
        background: `url("/herobg.jpg") center / cover`,
        // minHeight: { xs: 500, sm: 500, md: 600, lg: 789 },
      }}
    >
      <Box
        position="absolute"
        left="0"
        width="100vw"
        height={"100vh"}
        sx={{
          // height: { xs: 500, sm: 500, md: 600, lg: 789 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.72)",
        }}
      >
        <Typography
          position="absolute"
          variant="h2"
          sx={{
            // fontSize: { xs: 42, md: 86 },
            color: "primary.main",
          }}
        >
          Elevate Your <br /> {"Career with Our "}
          <br />
          Training
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
