import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMediaQuery,useTheme } from "@mui/material";
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
import { Stack } from "@mui/system";


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

const ItHelp = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width:600px)");
  const imageWidth = isMobile ? 300 : 600;
  const imageHeight = isMobile ? 300 : 600;
  const isMobile1 = useMediaQuery(theme.breakpoints.down('sm'));
  const order = isMobile1 ? 2 : 1;

  return (
    <div>

      <Box
        sx={{
          background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
          pt: 5,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
              <Grid item xs={12}>
                <Typography variant="h3" textAlign={"center"}>IT Help Assistant</Typography>
              
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
              <Box>
                <Typography variant="body1" lineHeight={2}>
                  Domestic IT Help desk Attendant in the IT-ITES Industry is
                  also known as a Helpdesk Executive, Service Desk Executive,
                  Technology Support Executive, IT Support Executive, Helpdesk
                  Coordinator.
                </Typography>
                <Typography variant="h4" lineHeight={1.5}>
                  Brief Description
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  Individuals at this job are mainly responsible for the smooth
                  running of computer systems and ensuring users get maximum
                  benefits from them. Individual tasks vary depending on the
                  size and structure of the organization, but may include
                  installing and configuring computer hardware operating systems
                  and applications; monitoring and maintaining computer systems
                  and networks; talking staff/clients through a series of
                  actions, either face to face or over the telephone to help set
                  up systems or resolve issues; troubleshooting system and
                  network problems and diagnosing and solving hardware/software
                  faults, etc.
                </Typography>
                <Typography variant="h4" lineHeight={1.5}>
                  Personal Attributes:
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  This job requires the individual to have thorough knowledge of
                  various technology trends and processes as well as updated
                  knowledge about IT initiatives. He/she should be highly
                  motivated and energetic with the ability to self-direct daily
                  activities.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ItHelp;
