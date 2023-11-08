import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "sticky",
    border: "10px solid linear-gradient(to right, red, purple)", // Set the border to the linear gradient
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
    background: "white", // Change background to the linear gradient
    color: "#333",
    padding: "30px",
    borderRadius: "10px",
    marginBottom: "20px",
    top: "6rem", // Adjust as needed
    "& h2": {
      padding: "0",
    },
    "& span": {
      display: "block",
      fontSize: "14px",
      color: "#0c4eb9",
    },
  },
  imageBox: {
    overflow: "hidden",
  },
  imageWrapper: {
    borderRadius: "0.5rem",
  },
  wrapper: {
    padding: "60px 0 0", // Adjust the top padding to create space between the header and the cards
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
}));

const YourComponent = () => {
  const choose = [
    {
      id: 1,
      title: "CSR Projects",
      description:
        " A host of content services at your doorstep and Development",
      imageUrl: "/skill/support.jpg",
    },
    {
      id: 2,
      title: "Corporate Alliance",
      description:
        " Recruitment and Staffing solutions for a wide range of JDs invarious sectors",
      imageUrl: "/skill/success.jpg",
    },
    {
      id: 3,
      title: "Campus",
      description:
        " Helping school students in nurturing their Vocational skill sets for a brighter future.",
      imageUrl: "/skill/skill.jpg",
    },
    {
      id: 4,
      title: "Career Counselling",
      description:
        "Implementing placement linked Skill Career Development and Project.",
      imageUrl: "/skill/counselling.jpg",
    },
    {
      id: 5,
      title: "Government Projects",
      description:
        "Implementing placement linked Skill Development Projects for various Central.",
      imageUrl: "/skill/project.jpg",
    },
    {
      id: 6,
      title: "Infrastructure",
      description:
        " We have well equipped and good infrastructure for All Training Sectors",
      imageUrl: "/skill/infrastructure.jpg",
    },
  ];
  const classes = useStyles();

  return (
    <Box
      sx={{
        background: " linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        paddingBottom: "30px",py:5
      }}
    >
      <Grid item xs={12} >
        <Typography variant="h3" align="center">
          Why Choose Us
        </Typography>
      </Grid>
      <div className={classes.wrapper}>
        {choose.map((item) => (
          <Card key={item.id} className={classes.card}>
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <CardContent
                  sx={{
                    display: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" color="#757575">
                    {item.description}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box className={classes.imageBox}>
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    width={300}
                    height={200}
                    className={classes.imageWrapper}
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default YourComponent;
