import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Day = () => {
  return (
    <div>
      <Box>
        <Box
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
            height: { xs: 100, sm: 125, md: 150, lg: 150 },
            marginTop: "4rem",
          }}
        >
          <Typography variant="h3" color="secondary">
            DAY-NULM
          </Typography>
        </Box>
        <Grid item xs={12}></Grid>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ lineHeight: 2, justifyContent: "space-between" }}>
                <Typography variant="h4">About</Typography>

                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  To reduce poverty and vulnerability of the urban poor
                  households by enabling them to access gainful self employment
                  and skilled wage employment opportunities, resulting in an
                  appreciable improvement in their livelihoods on a sustainable
                  basis, through building strong grassroots level institutions
                  of the poor. The mission would aim at providing shelters
                  equipped with essential services to the urban homeless in a
                  phased manner. In addition, the mission would also address
                  livelihood concerns of the urban street vendors by
                  facilitating access to suitable spaces, institutional credit,
                  social security and skills to the urban street vendors for
                  accessing emerging market opportunities. NULM is a non-profit
                  organization dedicated to providing free and quality
                  education. We are committed to creating an inclusive learning
                  environment that
                </Typography>
                <br />
                <Typography variant="h4">
                  The components of the DAY-NULM are:
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  ⚫ Social Mobilization and Institution Development (SM&ID).{" "}
                  <br />
                  ⚫ Capacity Building and Training (CB&T).
                  <br /> ⚫Employment through Skill Training and Placement
                  (EST&P).
                  <br />⚫ Self Employment Programme (SEP).⚫ Support to Urban
                  Street Vendors (SUH). <br />
                  ⚫Scheme of Shelter for Urban Homeless (SUSV), and an
                  exclusive component, Innovation & Special Projects (1&SP).
                  <br />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Typography
                variant="h3"
                sx={{ lineHeight: 2, textAlign: "center" }}
              >
                National Urban Livelihood Mission- ESTP (NULM)
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                National Urban Livelihoods Mission (NULM) was launched by the
                Ministry of Housing and Urban Poverty Alleviation (MHUPA),
                Government of India in 23rd September, 2013 by replacing the
                existing Swarna Jayanti Shahari Rozgar Yojana (SJSRY). The NLM
                will focus on organizing urban poor in their strong grassroots
                level institutions, creating opportunities for skill development
                leading to market-based employment and helping them to set up
                self employment venture by ensuring easy access to credit. The
                Mission is aimed at providing shelter equipped with essential
                services to the urban homeless in a phased manner. In addition,
                the Mission would also address livelihood concerns of the urban
                street vendors. For more details visit the NULM Website.
              </Typography>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                Objectives:
              </Typography>
              <Typography>
                The broader objective of the Employment through Skills Training
                & Placement (EST&P) Program is- To provide an asset to the urban
                poor in the form of skills for sustainable livelihood To
                increase the income of urban poor through structured,
                market-oriented certified courses that can provide salaried
                employment and/or self- employment opportunities which will
                eventually lead to better living standards and alleviation of
                urban poverty on a sustainable basis •Ensure inclusive growth
                with increased contribution of skilled urban poor to the
                National Economy.
              </Typography>
              <Typography variant="h4"> Certification:</Typography>

              <Typography>
                Each successful candidate undertaking training under EST&P
                component of NULM should be awarded a certificate issued by a
                competent agency which has acceptability in the industry.
                Assessment of the skills gained should be done by an independent
                certifying agency. The training agency should not be entrusted
                with the assessment and certification of the trainees to ensure
                objective assessment, SSC NASSCOM is one the Certification
                Agency (CA). empanelled for EST&P program.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Day;
