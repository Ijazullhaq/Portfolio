import React from 'react';
import { Box, Typography, Button, Grid, Avatar, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

function Header() {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#1976d2',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
                boxShadow: 4,
                textAlign: 'center',
            }}
        >
            {/* Animated Profile Picture */}
            <motion.div
                whileHover={{
                    scale: 1.1, // Zoom in on hover
                    rotate: 5, // Slight rotation
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
            >
                <Avatar
                    alt="Ijaz Ull Haq"
                    src="/Ijaz (2)JPG" // Replace with your image path
                    sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                    }}
                />
            </motion.div>

            {/* Name and Title */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                Ijaz Ull Haq
            </Typography>
            <Typography variant="h6" sx={{ marginTop: 1 }}>
                Full Stack Developer
            </Typography>

            {/* Social Media Links */}
            <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com"
                        target="_blank"
                        sx={{
                            '&:hover': { backgroundColor: '#0a66c2' },
                            padding: 1,
                        }}
                    >
                        <LinkedIn />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        color="inherit"
                        href="https://github.com"
                        target="_blank"
                        sx={{
                            '&:hover': { backgroundColor: '#333' },
                            padding: 1,
                        }}
                    >
                        <GitHub />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        color="inherit"
                        href="mailto:your.email@example.com"
                        sx={{
                            '&:hover': { backgroundColor: '#f44336' },
                            padding: 1,
                        }}
                    >
                        <Email />
                    </IconButton>
                </Grid>
            </Grid>

            {/* Brief Description or Tagline */}
            <Typography variant="body1" sx={{ marginTop: 2, fontStyle: 'italic' }}>
                Passionate about building scalable web applications and learning new technologies.
            </Typography>
        </Box>
    );
}

export default Header;
