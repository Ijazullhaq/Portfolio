import React from "react";
import { Box, Typography, Card, CardContent, Button, Grid, Chip, CardMedia } from "@mui/material";

function Projects() {
  const projects = [
    {
      title: "Realway Tecket Booking system",
      description: "The Railway Ticket Booking System is a web-based platform designed to simplify and automate the process of booking train tickets for passengers. This system allows users to search for available trains, book tickets, view booking history, and manage their accounts, all through a user-friendly interface.",
      link: "#",
      tools: ["React", "MUI", "Vite","JavaScript", ],
      image: "https://www.rightsofemployees.com/wp-content/uploads/2022/11/Indian-Railway-Ticket-Booking.jpg",
    },
    {
      title: "E-commerce App",
      description: "The E-commerce App is a web-based platform designed to facilitate online shopping for customers. The system allows users to browse products, add items to their cart, proceed to checkout, and make secure payments. The app also includes an admin panel for managing products, orders, and customers, creating a seamless experience for both users.",
      link: "#",
      tools: ["React", "Node.js", "Stripe API", "Payment"],
      image: "https://www.figma.com/community/resource/a61032c4-13e5-4119-b59f-611bb0136d7d/thumbnail", 
    },
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 4,
          color: "#333",
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200px"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ marginBottom: 2 }}>
                  {project.tools.map((tool, i) => (
                    <Chip
                      key={i}
                      label={tool}
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  ))}
                </Box>
                <Button
                  href={project.link}
                  target="_blank"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
