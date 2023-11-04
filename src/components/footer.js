import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#23282e",
    color: "#fff",
    height: "2.5rem",
    width: "2.5rem",
  },
}));
const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollYValue(scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Disconnect the observer once in view
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  const classes = useStyles();
  const year = new Date();
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit text color
  };

  return (
    <div>
    <div
      style={{
        opacity: isInView ? 1 : 0,
        transform: `translateY(${isInView ? 0 : "1rem"})`,
        transition: "transform 3s, opacity 3s",
        marginTop:'4rem',
      }}
      ref={containerRef}
    >
      <Box
        sx={{ background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" }}
      >
        <Grid container spacing={4} sx={{ p: 2 }}>
          <Grid item xs={12} sm={8} md={4} lg={4}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Indra Educational And Charitable Trust
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 2 }}>
              IEACT is unique skill-building experiences including leadership,
              social, communication, computers, and basic life skills.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={2} lg={2}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Quik Links
            </Typography>
            <Stack direction="column" spacing={2}>
              <Link href="/" passHref>
                <Typography sx={{ textDecoration: "none" }}>Home</Typography>
              </Link>
              <Link href="/aboutus" passHref>
                <Typography sx={{ textDecoration: "none" }}>
                  About-Us
                </Typography>
              </Link>
              <Link href="/contactform/contact" passHref>
                <Typography sx={{ textDecoration: "none" }}>
                  Contact-Us
                </Typography>
              </Link>
              <Link href="/courses/assitantElect/Electrician" passHref>
                <Typography sx={{ textDecoration: "none" }}>Courses</Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Contact Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Stack direction="column">
                <Typography variant="h6">Admin Office</Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  Phone: 93630 55707, 9597690707
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  Email: ieact23@gmail.com
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  Address: 3rd Floor, Sathriya Tower, Maruti Nagar bus stop,
                  No.1 Tollgate, Trichy
                </Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="h6">Registered Office</Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  Address: No.1 Vasudeva Konar Complex, Kajapettai,
                  Trichy-620001
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            lg={12}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "25%",
                  background: "primary.main",
                  padding: "10px",
                }}
              >
                <TwitterIcon sx={{ color: "#757575" }} />
              </Box>
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "25%",
                  // background: "white",
                  padding: "10px",
                }}
              >
                <FacebookIcon sx={{ color: "#757575" }} />
              </Box>
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "25%",
                  // background: "white",
                  padding: "10px",
                }}
              >
                <InstagramIcon sx={{ color: "#757575" }} />
              </Box>
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "25%",
                  // background: "white",
                  padding: "10px",
                }}
              >
                <YouTubeIcon sx={{ color: "#757575" }} />
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50px", // Adjust the height as needed
                
              }}
            >
              <Typography sx={{ textAlign: "center" }}>
                Copyright &copy; {year.getFullYear()} Indra Educational &
                Charitable Trust. All Rights Reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div></div>
  );
};

export default Footer;
