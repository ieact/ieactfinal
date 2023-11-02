import { Box, Button, Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function createData(name, details) {
  return { name, details };
}
const rows = [
  createData("Duration", "90 Days"),
  createData("Study Level", "12TH"),
  createData("Experience", "0 to 1 Years"),
  createData("Minimum Job Entry Age", "18 Years"),
  createData("NSQF Level", "4"),
  createData("Role Description", ""),
];
const HandsetRepair = () => {
  return (
    <>
    <Box
      width="100vw"
      display="flex"
      justifyContent="flex-end"
      sx={{
        position: "relative",
        background: `url("/courses/handset.jpg") center / cover`,
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
          Handset Repair
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
         Handset Repair
        </Typography>
      </Box> */}

      <Box sx={{ background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={8}>
              <Box
                sx={{
                
                  background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
                }}
              >
                 <Image
                    src={"/courses/laptop.svg"}
                    alt="Image"
                    width={"600"}
                    height={"600"}
                  />
                <Typography variant="h6">
                  <List>
                    <ListItem>• Sector: TELECOM</ListItem>
                    <ListItem>• SUB-SECTOR: Handset</ListItem>
                    <ListItem>• OCCUPATION: Customer Service</ListItem>
                    <ListItem>• REFERENCE ID: TEL/Q2201</ListItem>
                    <ListItem>• ALIGNED TO: NCO-2015/7422.0203</ListItem>
                  </List>
                </Typography>
                
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
            <Grid item xs={12} sm={12} md={5} lg={4}>
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
                          Handset Repair
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Job Role</TableCell>
                        <TableCell align="right">Handset Repair</TableCell>
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HandsetRepair;
