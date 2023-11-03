import { Box, Button, Container, Grid,  Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import Image from "next/image";
import { useMediaQuery,useTheme } from "@mui/material";

import Link from "next/link";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CakeIcon from '@mui/icons-material/Cake';
import TimerIcon from '@mui/icons-material/Timer';

function createData(name, details) {
  return { name, details };
}
const course = [
  createData("Sector", "Healthcare"),
  createData("Sub Sector", "General Duty Assistant",),
  createData("Occupation", "Nursing Care Assistant",),
  createData("Reference ID", "CON/Q0602"),
  createData("Revised", "NCO-2004/7137.2"),
 
];
const rows = [
  createData("Duration", "90 Days"),
  createData("Study Level", "12TH"),
  createData("Experience", "0 to 1 Years"),
  createData("Minimum Job Entry Age", "18 Years"),
  createData("NSQF Level", "4"),
  createData("Role Description", ""),
];

const HandsetRepair = () => {
  
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width:600px)");
  const imageWidth = isMobile ? 300 : 600;
  const imageHeight = isMobile ? 300 : 600;
  const isMobile1 = useMediaQuery(theme.breakpoints.down('sm'));
  const order = isMobile1 ? 2 : 1;
  return (
    
    <div>
    


      <Box sx={{ background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",pt:5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} 
            justifyContent={"center"}
            alignItems={"center"}>
                <Grid item xs={12}>
                <Typography variant="h3" textAlign={"center"}>Handset Repair</Typography>
              
              </Grid>
            
            <Grid item xs={12} md={6} lg={4} order={order}>
              <Box sx={{display:"flex",justifyContent:"center"}}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItemText
                sx={{ my: 0,textAlign:"center" }}
                primary="Course Details"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
                <ListItem>
                  <ListItemAvatar>
                      <WorkIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Job Role" secondary="Assistant Electrician" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                      <TimerIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Duration" secondary="90  Days" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                      <BeachAccessIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Study Level" secondary="12TH" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                      <StarHalfIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Experience" secondary="0 to 1 Years" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                      <CakeIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Minimum Job Entry Age" secondary="18 Years" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                      <TrendingUpIcon />
                  </ListItemAvatar>
                  <ListItemText primary="NSQF Level" secondary="4" />
                </ListItem>
              </List></Box>
            </Grid>
            <Grid item xs={12} md={6} order={1}>
              
            <Stack direction={isMobile1 ? 'column' : 'row'} spacing={0}>
              {course.map((row) => (
                <ListItem>
                  <ListItemText primary={row.name} secondary={row.details} />
                </ListItem>
))}

              </Stack>
              <Box
              >
                
                <Typography variant="h4" lineHeight={1.5}>
                  Brief Description
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  Handset repair engineer is responsible for performing handset repair, including hardware and software components, and testing the handset for adequacy post-repair.
                </Typography>

                <Typography variant="h4" lineHeight={1.5}>
                  Personal Attributes:
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  This job requires the individual to be analytical and be able to handle high-pressure situations to successfully perform the assigned responsibilities. They should have basic written and oral communication skills and should be able to apply practical judgment to successfully perform the assigned responsibilities.
                </Typography>
              </Box>
            </Grid>
            
            
          </Grid>
        </Container>
      </Box></div>
    
  );
};

export default HandsetRepair;
