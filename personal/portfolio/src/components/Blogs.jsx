import React from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";

function Blog() {
  const blogs = [
    { title: "My Journey in Web Development", content: "I began my web development journey out of curiosity about how websites worked. Initially, I struggled with understanding HTML and CSS. My first breakthrough came when I built a simple to-do list using JavaScript. It felt like magic seeing code translate into something functional! As I progressed, I explored frameworks like React.js, which opened doors to creating dynamic and responsive apps. Building a personal blog app was a significant milestone. It taught me the importance of clean code and modular components. Web development has been a transformative experience. It’s not just about writing code but solving real-world problems. I look forward to exploring new technologies and contributing to meaningful projects." },
    { title: "Building Projects with React.js", content: "React.js became my go-to library for building web applications due to its simplicity and power. One of my favorite projects is a blog app where users can create, update, and delete posts. I implemented React Router for dynamic routes, ensuring each blog post had a unique URL. Using Context API, I managed authentication seamlessly, and lazy loading improved the app’s performance." },
    { title: "AI in Healthcare: Developing Smart Solutions", content: "Pamir Diagnosis X-Ray SmartScan AI, aims to address this by using AI to detect abnormalities in chest X-rays. We trained a Convolutional Neural Network (CNN) on Kaggle’s chest X-ray dataset, focusing on pneumonia detection. The model achieved high accuracy, providing timely diagnoses where medical experts are scarce. Challenges like data preprocessing and model optimization taught me valuable lessons about AI in real-world applications. This project reinforced my belief in AI's potential to transform healthcare for underserved population" },
    { title: "4. Data Structures and Algorithms: My Learning Path", content: "Learning Data Structures and Algorithms (DSA) has been an exciting yet challenging journey. I started with arrays and linked lists, gradually moving to trees and graphs. One resource that stood out for me was LeetCode, which helped me practice real-world problems. I learned the importance of time complexity when optimizing solutions for binary search or dynamic programming." },

];

  return (
    <Container sx={{ padding: 4 }}>
      {/* Blog Section */}
      <Typography
        variant="h5"
        sx={{ marginBottom: 2, textAlign: "center", fontWeight: "bold" }}
      >
        My Blog
      </Typography>
      {blogs.map((blog, index) => (
        <Card key={index} sx={{ marginBottom: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {blog.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              {blog.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Blog;
