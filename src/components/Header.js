import React, { useState } from "react";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import Drawer for the side menu
import { Divider, Stack } from "@mui/material";
import ProjectHover from "@/pages/projects/ProjectHover";
import CoursesHover from "@/pages/courses/CoursesHover";

import { useWindowScroll } from "react-use";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);


  const router = useRouter(); // Get the router object

  const isIndexPage = router.pathname === "/"; // Check if the current page is the index page

  const { y } = useWindowScroll(); // Use the useWindowScroll hook to get the scroll position
  const isScrolled = y > 0;

  const headerStyle = {
    backgroundColor: isIndexPage ? (isScrolled ? "black" : "transparent") : "black",
    transition: "background-color 0.3s",
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    // alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  const handleSubMenuClose = () => {
    setSubMenuOpen(false);
  };

  return (
    <>
      <AppBar component="nav" position="fixed" sx={headerStyle}>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={3} lg={5} xl={4}>
            <Stack direction={"row"} spacing={2}>
              <Link href="/" component="div">
                <Image
                  src="/logo1.png"
                  alt="IEACT logo"
                  width={70}
                  height={70}
                />
              </Link>
              <Hidden mdUp>
                <Box
                  height={70}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#d9a60b",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    IEACT
                  </Typography>
                </Box>
              </Hidden>
              <Hidden lgDown>
                <Box
                  height={70}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#d9a60b" }}>
                    INDRA EDUCATIONAL AND CHARITABLE TRUST
                  </Typography>
                </Box>
              </Hidden>
            </Stack>
          </Grid>
          {/* <Hidden mdUp>
          <Grid item>
             <Typography variant="h3" sx={{p:1}}> </Typography>
             </Grid>
</Hidden> */}
          <Grid item>
            <Toolbar>
              <Hidden lgUp>
                {/* Show menu icon and open side menu on small screens */}
                <Typography variant="h3" sx={{ p: 1 }}>
                  {" "}
                </Typography>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMenu}
                >
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>
                <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                  {/* Side menu items for small screens */}
                  <DrawerHeader>
                    <Typography variant="h6">IEACT</Typography>
                    <IconButton onClick={handleDrawerClose}>
                  
                      {" "}
                      <ChevronLeftIcon />
                      {/* // {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon/>} */}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />
                  <div
                    style={{
                      width: "200px",
                    }}
                  >
                    <Stack direction={"column"}>
                      <Link href="/">
                        <Button onClick={handleDrawerClose}>Home</Button>
                      </Link>
                      <Divider />
                      <Link href="/aboutus">
                        <Button onClick={handleDrawerClose}>About us</Button>
                      </Link>{" "}
                      <Divider />
                      <Button
                        onClick={toggleSubMenu}
                        sx={{ justifyContent: "left" }}
                      >
                        Projects
                      </Button>
                      {subMenuOpen && (
                        <div style={{ paddingLeft: "20px" }}>
                          <Stack direction={"column"}>
                            <Link href="/projects/nsdc/NSDC">
                              <Button onClick={handleDrawerClose}>NSDC</Button>
                            </Link>
                            <Link href="/projects/tnsdc/TNSDC">
                              <Button onClick={handleDrawerClose}>
                                {" "}
                                TNSTC
                              </Button>
                            </Link>
                            <Link href="/projects/moma/MoMA">
                              <Button onClick={handleDrawerClose}>
                                Day-NULM
                              </Button>
                            </Link>
                            <Link href="/projects/ddugky/DDU">
                              <Button onClick={handleDrawerClose}>
                                {" "}
                                DDU-GKY
                              </Button>
                            </Link>
                            <Link href="/projects/moma/MoMA">
                              <Button onClick={handleDrawerClose}>MoMA</Button>
                            </Link>{" "}
                          </Stack>
                        </div>
                      )}{" "}
                      <Divider />
                      <Button
                        onClick={toggleSubMenu}
                        sx={{ justifyContent: "left" }}
                      >
                        Courses
                      </Button>
                      {subMenuOpen && (
                        <div style={{ paddingLeft: "20px" }}>
                          <Stack direction={"column"}>
                            <Link href="/courses/ithelp/Ithelp">
                              <Button onClick={handleDrawerClose}>
                                IT Help Assistant
                              </Button>
                            </Link>
                            <Link href="/courses/assistantElect/Electrician">
                              <Button onClick={handleDrawerClose}>
                                AssitantElectrician
                              </Button>
                            </Link>
                            <Link href="/courses/generalDuty/Generalduty">
                              <Button onClick={handleSubMenuClose}>
                                Generalduty Assitant
                              </Button>
                            </Link>
                            <Link href="/courses/handset/HandsetRepair">
                              <Button onClick={handleSubMenuClose}>
                                Handset Repair
                              </Button>
                            </Link>{" "}
                          </Stack>
                        </div>
                      )}{" "}
                      <Divider />
                      <Link href="/aboutus">
                        <Button onClick={handleDrawerClose}>Affiliation-PIA</Button>{" "}
                      </Link>{" "}
                      <Divider />
                      <Link href="/contactform/contact">
                        <Button onClick={handleDrawerClose}>Contact Us</Button>
                      </Link>{" "}
                      <Divider />
                    </Stack>
                  </div>
                </Drawer>
              </Hidden>

              <Hidden smDown mdDown>
                <Stack direction={"row"} spacing={2}>
                  <Link href="/">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warm.main",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      Home
                    </Button>
                  </Link>

                  <Link href="/aboutus">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warm.main",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      About-Us
                    </Button>
                  </Link>
                  <ProjectHover />
                  <CoursesHover />
                  <Button
                    sx={{
                      fontSize: "1.2rem",
                      color: "warm.main",
                      "&:hover": { color: "secondary.dark" },
                    }}
                  >
                    Affiliation-PIA
                  </Button>

                  <Link href="/contactform/contact">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warm.main",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      Contact-Us
                    </Button>
                  </Link>
                </Stack>
              </Hidden>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}
