import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
                About Me
            </Typography>
            <Typography>
                I am a passionate software developer with expertise in creating responsive and
                user-friendly web applications. My goal is to bring ideas to life with clean and
                efficient code.
            </Typography>
        </Box>
    );
}

export default About;
