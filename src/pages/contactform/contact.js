// pages/contact.js

import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/system';
import styles from "@/styles/Home.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert('Form submitted successfully');
      } else {
        alert('Error submitting the form. Please try again later.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Rest of your component code...

  return (
    <>

<Box
      width="100vw"
      display="flex"
      justifyContent="flex-end"
      sx={{
        position: "relative",
        background: `url("/contact.jpg") center / cover`,
        minHeight: { xs: 500, sm: 500, md: 800, lg: 789 },
      }}
    >
      <Box
        position="absolute"
        left="0"
        width="100vw"
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
          Contact Us
        </Typography>
      </Box>
    </Box>

    <Box
          // width="100vw"
          // display="flex"
          // justifyContent="center"
          // alignItems={"center"}
          // sx={{
          //   background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
          //   height: { xs: 100, sm: 100, md: 100, lg: 100 },
          // }}
        >
         <Grid item xs={12}>
        {/* <Box
          sx={{
            background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
          }}
          className={styles.headerbox}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Contact-Us
          </Typography>
        </Box> */}
      </Grid>
        </Box>
        <Container>
        <Grid container spacing={2}>
         
        <Grid item xs={12} sm={12} md={6} lg={6}>
  <Typography variant="h4" sx={{ lineHeight: "2" }}>IEACT Location</Typography>
  {/* <Typography variant="h5" sx={{ lineHeight: "2" }}>Call us: 9am - 6pm</Typography>
  <Typography variant="h5" sx={{ lineHeight: "2" }}>Phone: 9874563214</Typography>
  <Typography variant="h5" sx={{ lineHeight: "2" }}>Email: ieact23@gmail.com</Typography> */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1002572415523!2d78.70943317575289!3d10.879978757273687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf68dc1a0f791%3A0x95da99f9045e4fa9!2sSATHRIYA%20TOWER!5e0!3m2!1sta!2sin!4v1698321606519!5m2!1sta!2sin"
    width="100%"  
    height="450"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    style={{ border: "none" }} 
  ></iframe>
</Grid>


         
         <Grid item xs={12} sm={12} md={6} lg={6}
          sx={{
             '& .MuiTextField-root': { m: 1, color:"primary"},
           }}>

      <form onSubmit={handleSubmit}>
        <br/> <br/>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          // sx={{ width: '46%' }}
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          // sx={{ width: '45%' }}
          required
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        <Button type="submit" variant="contained" sx={{ m: 1}} color="primary">
          Submit
        </Button>
      </form> </Grid> </Grid></Container>
    </>
  );
};

export default ContactForm;


// import React from 'react';
// import { Button, Container, Grid, TextField, Typography } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Box } from '@mui/system';

// const ContactForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//   };

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   const textVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 1 } },
//   };

//   return (
//     <>
//     <Box
//           width="100vw"
//           display="flex"
//           justifyContent="center"
//           alignItems={"center"}
//           sx={{
//             background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
//             height: { xs: 170, sm: 200, md: 200, lg: 200 },
//           }}
//         >
//           <Typography variant='h2'>
//             Contact
//           </Typography>
//         </Box>
//     <Container>
      
//       <Grid container spacing={2}>
//         {/* Left Column - Text */}
//         <Grid item xs={12} sm={12} md={6} lg={4} >
       
//           <Typography variant="h4" sx={{lineHeight:"2"}}>IEACT</Typography>
//           <Typography variant="h5" sx={{lineHeight:"2"}}>Call us: 9am - 6pm</Typography>
//           <Typography variant="h5" sx={{lineHeight:"2"}}>Phone: 9874563214</Typography>
//           <Typography variant="h5" sx={{lineHeight:"2"}}>Email: ieact23@gmail.com</Typography>
//         </Grid>

//         {/* Right Column - Form */}
//         <Grid item xs={12} sm={12} md={6} lg={8}
//          sx={{
//             '& .MuiTextField-root': { m: 1, color:"primary"},
//           }}>
//           <form onSubmit={handleSubmit} >
//             <TextField
//               label="Name"
//               variant="outlined"
//               sx={{ width: '46%'}}
//               required
//             />

//             <TextField
//               label="Phone Number"
//               variant="outlined"
//               sx={{ width: '45%'}}
//               required
//             />

//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               required
//               type="email"
//             />

//             <TextField
//               label="Message"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               required
//             />

//             <Button type="submit" variant="contained" color="primary">
//               Submit
//             </Button>
//           </form>
//         </Grid>
//       </Grid>
//     </Container></>
//   );
// };

// export default ContactForm;
