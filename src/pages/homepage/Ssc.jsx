import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
  CardActionArea,
  Container,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  hiddenText: {
    display: "none",
  },
}));
const SscLanding = () => {
  const sscImg = [
    {
      id: 1,
      imageUrl: "/ssc/Apparel logo.png",
      description: "Apparel made -ups & Home Furnishing Sector Skill Council",
      alt: "Apparel made -ups & Home Furnishing Sector Skill Council logo",
      link: "https://sscamh.com/",
      onHoverdes: "ssc apparel solution",
    },
    {
      id: 2,
      imageUrl: "/ssc/thsc.jpg",
      description: "Tourism & Hospitality Skill Council",
      alt: "Tourism & Hospitality Skill Council logo",
      link: "https://thsc.in/",
      onHoverdes: "ssc apparel solution",
    },
    {
      id: 3,
      imageUrl: "/ssc/nasscom.png",
      description: "IT- ITeS SSC NASSCOM",
      alt: "IT- ITeS SSC NASSCOM logo",
      link: "https://www.sscnasscom.com/",
      onHoverdes: "ssc apparel solution",
    },
    {
      id: 4,
      imageUrl: "ssc/essci1.png",
      description: " Electronics Sector Skills Council of India",
      alt: "Image 1",
      link: "https://www.essc-india.org/",
      onHoverdes: "ssc apparel solution",
    },
    {
      id: 5,
      imageUrl: "/ssc/DWSSC.png",
      description: "Domestic Workers Sector Skill Council",
      alt: "Domestic Workers Sector Skill Council logo",
      link: "http://dwsscindia.com/",
      onHoverdes: "ssc apparel solution",
    },
    {
      id: 6,
      imageUrl: "/ssc/healthcare.png",
      description: "Healthcare Sector Skill Council",
      alt: "Healthcare Sector Skill Council logo",
      link: "https://healthcare-eskilling.com/#:~:text=HSSC%20is%20a%20NCVET%20recognized%20awarding%20body%20under,diagnostics%2C%20and%20associations%20from%20both%20public%20%26%20private.",
      onHoverdes: "ssc apparel solution",
    },
    {
      id: 7,
      imageUrl: "/ssc/csdc.jpeg",
      description: "Construction Skill Development Council OF India",
      alt: "Construction Skill Development Council OF India logo",
      link: "https://www.csdcindia.org/",
    },
    {
      id: 8,
      imageUrl: "/ssc/beauty.png",
      description: "Beauty & Wellness Sector Skill Council",
      alt: "Beauty & Wellness Sector Skill Council logo",
      link: "https://www.bwssc.in/",
    },
    // ... (other items)
  ];

  const [hoveredItem, setHoveredItem] = useState(null);
  const [isTextHidden, setIsTextHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setIsTextHidden(false);
      } else {
        setIsTextHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Box sx={{ py: 5,
      }}  >
        <div
          className={`${classes.scrollEffectText} ${
            isTextHidden ? classes.hiddenText : ""
          }`}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              justifyContent: "center",
              lineHeight:2,
              color: "black",
            }}
          >
            Skill Sector Council
          </Typography>
        </div>
        <Container maxWidth="xl">
          
        <Typography variant="h6" sx={{justifyContent:"center"}}>
            Skill Sector Councils are organizations that play a pivotal role in
            bridging the gap between industry needs and workforce skills. They
            focus on identifying industry-specific skill requirements,
            developing standardized training programs, and ensuring the
            workforce is equipped with the right skills to excel in various
            sectors. These councils promote skill development, enhance
            employability, and foster economic growth by aligning education and
            training with the evolving demands of industries.
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent={"center"}>
            {sscImg.map((item) => (
              <Card
                component={Link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.id}
                sx={{
                  textDecoration: "none",
                  width: 280,
                  m: "2rem",
                  mt: "3rem",
                  backgroundColor:
                    hoveredItem === item.id ? "primary.light" : "#ffff",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  boxShadow: "3px 3px 12px 2px rgba(0, 0, 0, 0.6)",
                  transition: "0.2s",
                  margin: "0 2rem",
                  transform:
                    hoveredItem === item.id ? "translateY(-2rem)" : "none",
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardActionArea
                  component={Link}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {hoveredItem === item.id ? (
                    <CardContent>
                      <Typography variant="subtitle1">
                        {item.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ display: "none" }}
                      >
                        Learn more
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "white" }}>
                        {item.onHoverdes}
                      </Typography>
                    </CardContent>
                  ) : (
                    <>
                      {/* <CardMedia component="img" height="70"  image={item.imageUrl} alt={item.alt} */}

                      <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <img
                          src={item.imageUrl}
                          alt={`Image ${item.alt}`}
                          style={{ height: 70 }}
                        ></img>
                      </Box>
                      {/* </CardMedia> */}
                      <CardContent>
                        <Typography variant="subtitle1">
                          {item.description}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary">
                      Learn more
                    </Typography> */}
                      </CardContent>
                    </>
                  )}
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default SscLanding;
