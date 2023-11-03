import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react';

const LandingSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine when to change the scroll state
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '3rem',
    opacity: scrolled ? 1 : 0, // Start with opacity 0 and animate to 1
    transform: `translateY(${scrolled ? 0 : '1rem'})`, // Move from bottom to center
    transition: 'transform 0.6s, opacity 0.6s',
  };
  const jobs = [
    {
      id: 1,
      imageUrl: "/bg/interview.svg",
      title: "Interview Scheduled Mission",
      alt: "",
      description:
        "To provide life-changing apprenticeships to youth in underserved communities across India and uplift their livelihood",
    },
    {
      id: 2,
      imageUrl: "/bg/educ.svg",
      title: "Skill Development & Training",
      alt: "",
      description:
        "Provide Quality Education to all the category of the people of rural especially to the underprivileged weakers sections of the society.",
    },
    {
      id: 3,
      imageUrl: "/bg/inter.svg",
      title: "Kaushal Melas",
      alt: "",
      description:
        "Indira Skills arranged many events for Awareness programs & Job Melas and has a success rates of Recruitment and Placements",
    },
  ];

  return (
    <div>
      <Box
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        sx={{
          background: " linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
          height: { xs: 1600, sm: 1200, md: 750, lg: 730 },
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ p: "2rem", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                Our Offers
              </Typography>
            </Grid>
            {jobs.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} sx={{ p: 2 }}>
                <Box
                  sx={{
                    height: "300",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "column",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={`Image ${item.description}`}
                    style={{ height: 120 }}
                  />
                  <Typography variant="h5" sx={{ lineHeight: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default LandingSection;
