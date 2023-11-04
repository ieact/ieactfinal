import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Stack } from "@mui/system";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CakeIcon from "@mui/icons-material/Cake";
import TimerIcon from "@mui/icons-material/Timer";

function createData(name, details) {
  return { name, details };
}
const course = [
  createData("Sector", "Healthcare"),
  createData("Sub Sector", "General Duty Assistant"),
  createData("Occupation", "Nursing Care Assistant"),
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

const Electrician = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width:600px)");
  const imageWidth = isMobile ? 300 : 600;
  const imageHeight = isMobile ? 300 : 600;
  const isMobile1 = useMediaQuery(theme.breakpoints.down("sm"));
  const order = isMobile1 ? 2 : 1;
  return (
    <>
      <div>
        <Box
          sx={{
            background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
            pt: 6,
          }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <Typography variant="h3" textAlign={"center"}>
                  {" "}
                  Assitant Electrician
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={4} order={order}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Paper
                    elevation={10}
                    sx={{ p: 2, bgcolor: "background.paper" }}
                  >
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                      }}
                    >
                      <ListItemText
                        sx={{ my: 0, textAlign: "center" }}
                        primary="Course Details"
                        primaryTypographyProps={{
                          fontSize: 20,
                          fontWeight: "medium",
                          letterSpacing: 0,
                        }}
                      />
                      <ListItem>
                        <ListItemAvatar>
                          <WorkIcon />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Job Role"
                          secondary="Assistant Electrician"
                        />
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
                        <ListItemText
                          primary="Experience"
                          secondary="0 to 1 Years"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <CakeIcon />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Minimum Job Entry Age"
                          secondary="18 Years"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <TrendingUpIcon />
                        </ListItemAvatar>
                        <ListItemText primary="NSQF Level" secondary="4" />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={1}>
                <Stack direction={isMobile1 ? "column" : "row"} spacing={0}>
                  {course.map((row) => (
                    <ListItem>
                      <ListItemText
                        primary={row.name}
                        secondary={row.details}
                      />
                    </ListItem>
                  ))}
                </Stack>
                <Box>
                  <Typography variant="body1" lineHeight={2}>
                    The assistant electrician is responsible for the
                    installation and maintenance of electrical systems in
                    buildings or industrial premises. They are also involved
                    with diagnosing
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    Brief Description
                  </Typography>
                  <Typography variant="body1" lineHeight={2}>
                    Installation, repair, and maintenance of temporary LV
                    electrical connections at construction sites and residential
                    and commercial buildings.
                    <br />
                    Electrician&quot;s Assistant Level-4 Electrician or above
                    for installation, repair, and maintenance of permanent
                    connections.
                    <br /> Individual LV is single Appropriate selection and use
                    of phase wiring and skillful use of hand and power tools
                  </Typography>

                  <Typography variant="h4" lineHeight={1.5}>
                    Personal Attributes:
                  </Typography>
                  <Typography variant="body1" lineHeight={2}>
                    The job holder is expected to be physically fit and able to
                    withstand extreme conditions while working on site. Able to
                    work in locations; Familiar with basic electrical works
                    functions and functions.
                    <br /> Person can work within a team, variety related to
                    electrical work Handle tools and materials safely and
                    sensibly and take responsibility for their own work.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default Electrician;
