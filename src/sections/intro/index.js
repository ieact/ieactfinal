import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  Container,
  CardContent,
  Paper,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import Image from "next/image";

const sscImg = [
  {
    id: 1,
    imageUrl: "/classroom2.jpg",
    description:
      "we provide free skill development training to unemployed individuals.",
    alt: "Class1",
    onHoverdes: "Our Classroom",
  },
  {
    id: 2,
    imageUrl: "/skill1.jpg",
    description:
      "Empowering the unemployed through skill development. We bridge the gap between aspirations and opportunities.",
    alt: "Class2",
    onHoverdes: "Skill Training",
  },
  {
    id: 3,
    imageUrl: "/interviewp.jpg",
    description:
      "We also arrange job interviews and placements, helping you start your career journey.",
    alt: "Class3",
    onHoverdes: "Interview",
  },
  {
    id: 4,
    imageUrl: "/job.jpg",
    description: " Join us to unlock your potential and transform your life.",
    alt: "Class4",
    onHoverdes: "Placed In Good Job",
  },
];

const Intro = () => {
  return (
    <Box
      sx={{
        // height: "230vh",
        minHeight: { xs: 580, sm: 530, md: 800, lg: "100vh" },
        pt: "76px",
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid
          container
          spacing={2}
          display="flex"
          flexWrap="wrap"
          justifyContent={"center"}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              textAlign={"center"}
              sx={{ color: "#757575" }}
              lineHeight={1.5}
            >
              Free Skill Development Programs
            </Typography>
            <Typography variant="h3" textAlign={"center"} lineHeight={1.5}>
              Bridging the Gap: Skill Development and Employment
            </Typography>
          </Grid>

          {sscImg.map((item) => (
            <Grid item sx={12} md={6} lg={3}>
              <Card
                sx={{
                  minWidth: 300,
                  minHeight:600,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardHeader title={item.onHoverdes} />
                <CardMedia
                  component="img"
                  height="360"
                  src={item.imageUrl}
                  alt="Paella dish"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "auto",
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
