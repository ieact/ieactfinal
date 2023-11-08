import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useMediaQuery } from '@mui/material';


const About = () => {
  
  const isMobile = useMediaQuery('(max-width:600px)');
  const imageWidth = isMobile ? 300 : 600;
  const imageHeight = isMobile ? 300 : 600;
  
  return (
    <div> {/* Add top padding to prevent content from overlaying the header */}

      <Box
        width="100%"
        display="flex"
        justifyContent="flex-end"
        sx={{
          position: "relative",
          background: `url("/hero.jpg") center / cover`,
          minHeight: { xs: 500, sm: 500, md: 600, lg: 789 },
        }}
      >
        <Box
          position="absolute"
          left="0"
          width="100%"
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
            About-Us
          </Typography>
        </Box>
      </Box>

      <Container>
        <Grid container spacing={2} sx={{justifyContent:"center",alignItems:"center" }}>
          {/* src={"/bg/aboutusgirl.svg"} */}
          <Grid item xs={12} sm={6} md={12} lg={12}>
            
          <Typography variant="h4" sx={{ lineHeight: 2,textAlign:"center" }}>Introduction</Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                Indira Education and Foundation Skill Development Program
                provides youth with leadership, social, communication, computers
                and basic life skills.
                <br />
                Provides a variety of personal skill development experiences
                including Short-term training in the garment industry is
                provided to youth between the ages of 18 to 45 years.
                <br /> After completing the training program, dedicated
                placement The group ensures that the candidates get employment
                in various textile sectors and also facilitates them for
                self-employment.</Typography>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Image
                src={"/bg/aboutusgirl.svg"}
                alt="Image" 
                width={imageWidth}
                height={imageHeight}
              />
              </Box>
              {/* <Box> */}
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={12}>
            <Box sx={{ lineHeight: 2 }}>
              
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
              
                Also, work To expand the scope of opportunities, increase
                the recruitment partner support system and new employment
                opportunities Investigate A typical job mapping activity is done
                at the central level.
                <br /> Indira Skill Trust works with NSDC, SSCs and State, for
                skill development and Central Government schemes in the Ministry
                of Entrepreneurship have got consultative status pan India To
                provide necessary skills to thousands of youth.
                <br /> The Institute's unique training approach provides
                industry-required, employability-linked appropriate skill
                training at pace, scale and standards. Well designed to deliver.
                <br /> Pradhan Mantri Kaushal Kendra (PMKVY) and DDU-GKY are
                among the most important partners for the government's flagship
                programme. Skills Foundation is one.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box>
              <Typography variant="h4" sx={{ lineHeight: 2,textAlign:"center" }}>
                Purpose of Skill Development Programmes
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                The main mission of Sikaram Skills Foundation in the field of
                education is to provide marketable skills to the many unemployed
                youth in India.
                <br /> In JET skills Ensures holistic development of trainees.
                Along with technical skills, JET skills training focuses on
                other dimensions of skill development— Numerical Ability,
                Science, Basic Information Technology, Career Orientation,
                Communication, Soft Skills & Personality Development and Work
                Ethics and Gives special importance. Considering the specific
                requirement of Safety, Health and Environment (SHE) sector.
                <br /> We firmly believe that future training includes the
                skills, abilities and learning attitudes needed to succeed in
                the future. A growing international movement focused on the
                skills students need to master in preparation for success in a
                rapidly changing, digital society This is in part. Many of these
                skills are related to deep learning, such as analytical
                reasoning, complex problem solving, and teamwork Based on
                mastering skills.
                <br /> These skills differ from traditional academic skills
                because they are not primarily based on content knowledge.
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ lineHeight: 2 ,textAlign:"center"}}>
              Mission Statement:
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2 }}>
              At Indira Educational charitable Trust, our mission is to provide
              exceptional education and skill development programs that empower
              individuals to achieve their full potential. We are dedicated to
              fostering a learning environment that encourages innovation,
              creativity, and personal growth.
              <br /> Our commitment to excellence extends to the following key
              principles:
              <br /> 1. **Educational Excellence:** We strive to offer the
              highest quality of education and training that equips our students
              with the knowledge and skills they need to excel in their chosen
              fields. <br />
              2. **Student-Centered Approach:** We put our students at the
              center of everything we do. Our goal is to provide a supportive
              and inclusive environment that ensures every student's success.
              <br /> 3. **Industry Relevance:** We maintain a close connection
              with industry trends, ensuring that our programs are up-to-date
              and aligned with the needs of today's job market.
              <br /> 4. **Community Engagement:** We actively engage with the
              community, contributing to its development and supporting local
              initiatives. <br />
              5. **Personal Development:** Beyond academic achievements, we are
              committed to nurturing personal growth and character development,
              preparing students for life's challenges.
            </Typography>
            <Typography variant="h3" sx={{ lineHeight: 2 ,textAlign:"center"}}>
              Vision Statement:
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2 }}>
              Our vision is to be recognized as a premier training institute
              known for its commitment to excellence, innovation, and holistic
              development.
              <br /> We aspire to:
              <br /> 1. **Leadership in Education:** Be a leader in the field of
              education and skill development, setting the standard for quality
              and innovation.
              <br /> 2. **Global Impact:** Extend our reach internationally,
              fostering partnerships and collaborations that benefit students on
              a global scale. <br />
              3. **Diversity and Inclusivity:** Create a diverse and inclusive
              community that celebrates differences and promotes a culture of
              respect and understanding.
              <br /> 4. **Lifelong Learning:** Encourage a culture of lifelong
              learning, inspiring students to continually pursue knowledge and
              growth.
              <br /> 5. **Alumni Success:** Measure our success by the
              accomplishments of our alumni, who make a positive impact on
              society and their chosen fields.
              <br /> 6. **Continuous Improvement:** Embrace a commitment to
              continuous improvement, constantly evolving to meet the changing
              needs of our students and the world.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
