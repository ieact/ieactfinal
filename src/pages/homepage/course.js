
import styles from "@/styles/Home.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from 'react';


 




const data = [
    {
      id: 1,
      imageUrl: "/courses/ithelp.svg",
      description: "Domestic IT Help Desk Assistant",
      link: "/courses/ithelp/Ithelp",
      alt: "Domestic IT Help Desk Assistant image",
    },
    {
      id: 2,
      imageUrl: "/courses/electri.svg",
      description: "Assitant Electrician",
      link: "//courses/assistantElect/Electrician",
      alt: "Assitant Electrician image",
    },
    {
      id: 3,
      imageUrl: "/courses/laptop.svg",
      description: "Handset  Repair Engineering",
      link: "/courses/handset/HandsetRepair",
      alt: "Assitant Electrician image",
    },
    {
      id: 4,
      imageUrl: "/courses/general.svg",
      description: "General Duty Assistant",
      link: "/courses/generalDuty/Generalduty",
      alt: "Assitant Electrician image",
    },
  ];
const Course = () => {


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
      height: '1vh',
      fontSize: '3rem',
      opacity: scrolled ? 1 : 0, // Start with opacity 0 and animate to 1
      transform: `translateY(${scrolled ? 0 : '1rem'})`, // Move from bottom to center
      transition: 'transform 1s, opacity 1s',
    };
  return (
    <>
    <Box
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        sx={{
          background: " linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
          height: { xs: 1700, sm: 1200, md: 1000, lg: 789 },
        }}
      >
        <section id="sectioncourse">
          <Container>
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Grid item xs={12}>
              <div style={textStyles}>

                <Typography variant="h3" sx={{textAlign:"center",justifyContent:"center"}}>Courses Our Offer</Typography>
                  
               </div>
              </Grid>

              {data.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Box
                    className={styles.box}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "column",
                    }}
                  >
                    {/* <Card sx={{minHeight:"250"}}> */}
                    <img
                      src={item.imageUrl}
                      alt={`Image ${item.description}`}
                      style={{ height: 120 }}
                    />
                    <Typography variant="h6" sx={{ lineHeight: 2 }}>
                      {item.description}
                    </Typography>
                    <a href={item.link}>
                      <Button variant="contained" sx={{ lineHeight: 1.5 }}>
                        View Details
                      </Button>
                    </a>
                    {/* </Card> */}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>
      </Box></>
  )
}

export default Course