import React from 'react';
import { Box, Typography, LinearProgress, Grid } from '@mui/material';

function Skills() {
    const skills = [
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 93 },
        { name: 'Node.js', level: 80 },
        { name: 'Material UI', level: 85 },
        { name: 'Python', level: 60 },
        { name: 'MongoDB', level: 70 },
    ];

    return (
        <Box
            sx={{
                padding: { xs: 2, sm: 3, md: 4 }, // Adjusted padding for smaller box
                backgroundColor: '#f9f9f9',
                borderRadius: 4,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: '523px', // Reduced maxWidth for smaller box
                margin: '0 auto', // Centered horizontally with reduced space
            }}
        >
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 3,
                    color: '#1976d2',
                }}
            >
                Skills
            </Typography>
            <Grid container spacing={2}> {/* Reduced grid spacing */}
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Box sx={{ marginBottom: 2 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    marginBottom: 1,
                                    color: '#333', // Darker text for contrast
                                }}
                            >
                                {skill.name}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={skill.level}
                                sx={{
                                    height: 12, // Sleeker progress bar
                                    borderRadius: 1.5,
                                    backgroundColor: '#e0e0e0',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#1976d2',
                                    },
                                }}
                            />
                            <Typography
                                variant="caption"
                                sx={{ display: 'block', marginTop: 0.5, textAlign: 'right' }}
                            >
                                {skill.level}%
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Skills;
