import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Box } from "@mui/material";

function CoursesHover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Button  sx={{fontSize:"1.2rem", color:'warning.dark','&:hover': {color:'secondary.dark'} }}>Courses</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <Link href="/courses/ithelp/Ithelp">
          <MenuItem onClick={handleClose}>IT Help Assistant</MenuItem>
        </Link>
        <Link href="/courses/assistantElect/Electrician">
          <MenuItem onClick={handleClose}>AssitantElectrician</MenuItem>
        </Link>
        <Link href="/courses/generalDuty/Generalduty">
          <MenuItem onClick={handleClose}>Generalduty Assitant</MenuItem>{" "}
        </Link>
        <Link href="/courses/handset/HandsetRepair">
          <MenuItem onClick={handleClose}>Handset Repair</MenuItem>{" "}
        </Link>
      </Menu>
    </div>
  );
}

export default CoursesHover;
