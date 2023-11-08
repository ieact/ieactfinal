import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  Container,
  CardContent,
} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';


const sscImg = [
  {
    id: 1,
    imageUrl: "/classroom3.jpg",
    description:
      "we provide free skill development training to unemployed individuals.",
    alt: "Class1",
    onHoverdes: "Our Classroom",
  },
  {
    id: 2,
    imageUrl: "/skill1.jpg",
    description:
      "Empowering the unemployed through skill development. ",
      // We bridge the gap between aspirations and opportunities.
    alt: "Class2",
    onHoverdes: "Skill Training",
  },
  {
    id: 3,
    imageUrl: "/interviewp.jpg",
    description:
      "Arranging interviews and placements to launch your career.",
    alt: "Class3",
    onHoverdes: "Interview",
  },
  {
    id: 4,
    imageUrl: "/job1.jpg",
    description: " Join us to unlock your potential and transform your life.",
    alt: "Class4",
    onHoverdes: "Placed In Good Job",
  },
];

const Intro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  const [fontSize, setFontSize] = useState(0);

  const handleScroll = () => {
    if (inView) {
      setFontSize(48);
    } else {
      setFontSize(25);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box
      sx={{
        // height: "230vh",
        minHeight: { xs: 580, sm: 530, md: 800, lg: "100vh" },
        py:5,
        // bgcolor: "background.paper",
       background: `linear-gradient(to right, #f09819, #edde5d)`,
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
              // variant="h4"
              textAlign={"center"}
              sx={{ color: "#757575" }}
              lineHeight={1.5}
              ref={ref}
              style={{ fontSize: `${fontSize}px` }}
            >
              Free Skill Development Programs
            </Typography>
            <Typography variant="h3" textAlign={"center"} sx={{color:"#1A1A71"}} lineHeight={1.5}>
              Bridging the Gap: Skill Development and Employment
            </Typography>
          </Grid>

          {sscImg.map((item) => (
            <Grid item sx={12} md={6} lg={3}>
              <Card
                sx={{
                  minWidth: 300,
                  maxHeight:'300',
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: '#f5e7e2' // Replace with your desired warm white color
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
