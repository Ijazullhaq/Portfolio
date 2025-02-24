import React, { useState } from 'react';
import { Box, Typography, Button, Collapse, Card, CardContent, CardActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Education() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const educationData = [
        {
            degree: 'High School',
            institution: 'Paktai High School',
            year: '2007 - 2019',
            details: 'Studied general school subjects such as Mathematics, Biology, Chemistry, History, Geography, and more. Graduated with honors.',
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Management and Technology (UMT)',
            year: '2019 - 2023',
            details: 'Completed my Bachelor’s degree in Computer Science from UMT, gaining expertise in Data Structures, Algorithms, Programming, Web & Mobile Development, AI, and Data Science. This provided a solid foundation for a professional career.',
        },
    ];

    const handleToggle = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}
            >
                Education
            </Typography>
            {educationData.map((edu, index) => (
                <Card
                    key={index}
                    sx={{
                        marginBottom: 2,
                        backgroundColor: '#f4f6f8',
                        borderRadius: 4,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {edu.degree}
                            </Typography>
                            <Button
                                variant="text"
                                size="small"
                                onClick={() => handleToggle(index)}
                                endIcon={
                                    expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />
                                }
                                sx={{ color: '#1976d2' }}
                            >
                                {expandedIndex === index ? 'Hide Details' : 'View Details'}
                            </Button>
                        </Box>
                        <Typography variant="subtitle2" sx={{ color: 'gray', marginTop: 1 }}>
                            {edu.institution} ({edu.year})
                        </Typography>
                    </CardContent>
                    <Collapse in={expandedIndex === index}>
                        <CardActions sx={{ padding: 2 }}>
                            <Typography variant="body2">{edu.details}</Typography>
                        </CardActions>
                    </Collapse>
                </Card>
            ))}
        </Box>
    );
}

export default Education;
