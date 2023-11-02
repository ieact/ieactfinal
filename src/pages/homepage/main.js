import React from 'react'
import { Box, Typography } from "@mui/material";

const MainPage = () => {
  return (
    <div>
         <Box
        width="100vw"
        display="flex"
        justifyContent="flex-end"
        sx={{
          // background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",

          minHeight: { xs: 1000, sm: 1000, md: 800, lg: 789 }, // Responsive height
        }}
      >
        <Typography sx={{textAlign:"center"}}>
          
        </Typography>

      </Box>
    </div>
  )
}

export default MainPage