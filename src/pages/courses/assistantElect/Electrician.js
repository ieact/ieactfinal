import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
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
        background: `url("/courses/electrician.jpg") center / cover`,
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
        >Assitant Electrician
        </Typography>
      </Box>
    </Box>

      <Box>
      {/* <Grid item xs={12}>
        <Box
          sx={{
            background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
          }}
          className={styles.headerbox}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Electrician
          </Typography>
        </Box>
      </Grid> */}
        <Box
          sx={{
            background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",pt:2
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={7} lg={8}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
                  }}
                >
                  <Image
                    src={"/courses/electri.svg"}
                    alt="Image"
                    width={"600"}
                    height={"600"}
                  />
                  <Typography variant="h6">
                    <List>
                      <ListItem>• Sector: Construction</ListItem>
                      <ListItem>
                        • Sub Sector: Real Estate and Infrastructure
                        Construction
                      </ListItem>
                      <ListItem>
                        • Industry: Construction Electrical Works
                      </ListItem>
                      <ListItem>• Reference ID: CON/Q0602</ListItem>
                      <ListItem> • Revised: NCO-2004/7137.2</ListItem>
                    </List>
                  </Typography>
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
              <Grid item xs={12} sm={12} md={5} lg={4}>
                <Stack direction={"column"} spacing={2}>
                <Paper>
                  <TableContainer>
                    <Table
                      sx={{
                        minWidth: 250,
                        background:
                          "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                      }}
                      aria-label="caption table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="center" colSpan={2}>
                            Assistant Electrician
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Job Role</TableCell>
                          <TableCell align="right">
                            Assistant Electrician
                          </TableCell>
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
                          <TableCell align="center" colSpan={2}>
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
                </TableContainer></Paper></Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Electrician;
