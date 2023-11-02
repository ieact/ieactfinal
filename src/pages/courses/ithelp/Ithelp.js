import { Box, Button, Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
const Electrician = () => {
  return (
    <>
    <Box
      width="100vw"
      display="flex"
      justifyContent="flex-end"
      sx={{
        position: "relative",
        background: `url("/hero.jpg") center / cover`,
        minHeight: { xs: 500, sm: 500, md: 800, lg: 789 },
      }}
    >
      <Box
        position="absolute"
        left="0"
        width="100vw"
        sx={{
          height: { xs: 500, sm: 500, md: 600, lg: 789 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Typography
          position="absolute"
          
          sx={{
            fontSize: { xs: 32, md: 86 },
            color: "primary.main",
          }}
        >
          Domestic IT Help Assistant
          
        </Typography>
      </Box>
    </Box>
{/* 
      <Box
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingBottom: 3,
          background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
          height: { xs: 150, sm: 125, md: 180, lg: 100 },
        }}
      >
        <Typography variant="h3" color="secondary">
          IT Help
        </Typography>
      </Box> */}

      <Box sx={{ background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",pt:2 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={8}>
              <Box
                sx={{
                  background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
                }}
              >
                  <Image
                    src={"/courses/ithelp.svg"}
                    alt="Image"
                    width={"600"}
                    height={"600"}
                  />
                <Typography variant="h6">
                  <List>
                    <ListItem>• Sector: Construction</ListItem>
                    <ListItem>• Sub Sector: Real Estate and Infrastructure Construction</ListItem>
                    <ListItem>• Industry: Construction Electrical Works</ListItem>
                    <ListItem>• Reference ID: CON/Q0602</ListItem>
                    <ListItem> • Revised: NCO-2004/7137.2</ListItem>
                  </List>
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  Domestic IT Help desk Attendant in the IT-ITES Industry is also known as a Helpdesk Executive, Service Desk Executive, Technology Support Executive, IT Support Executive, Helpdesk Coordinator.
                </Typography>
                <Typography variant="h4" lineHeight={1.5}>
                  Brief Description
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  Individuals at this job are mainly responsible for the smooth running of computer systems and ensuring users get maximum benefits from them. Individual tasks vary depending on the size and structure of the organization, but may include installing and configuring computer hardware operating systems and applications; monitoring and maintaining computer systems and networks; talking staff/clients through a series of actions, either face to face or over the telephone to help set up systems or resolve issues; troubleshooting system and network problems and diagnosing and solving hardware/software faults, etc.
                </Typography>
                <Typography variant="h4" lineHeight={1.5}>
                  Personal Attributes:
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  This job requires the individual to have thorough knowledge of various technology trends and processes as well as updated knowledge about IT initiatives. He/she should be highly motivated and energetic with the ability to self-direct daily activities.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4}>
              
            <Stack direction={"column"} spacing={2}>
                <Paper >
                <TableContainer>
                  <Table
                    sx={{
                      minWidth: 250,
                      background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                    }}
                    aria-label="caption table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          General Duty Assistant
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Job Role</TableCell>
                        <TableCell align="right">General Duty Assistant</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.details}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell>
                      <Link href={'/contactform/contact'}>
                            <Button>Apply now</Button></Link>
                          </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                </Paper>
                <Paper>
                <TableContainer>
                  <Table
                    sx={{
                      minWidth: 250,
                      background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                    }}
                    aria-label="caption table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          General Duty Assistant
                        </TableCell>
                      </TableRow>
                     
                    </TableHead>
                    <TableBody>
                      {course.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.details}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                       
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer></Paper>
                </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Electrician;
