import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export default function CVTabsMobileFirst() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                width: '100%',
                maxWidth: '570px',
                margin: '0 auto',
                mt: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: 2,
                marginBottom: '30px'
            }}
        >
            {/* Title for Tabs */}
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    padding: 2,
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                }}
            >
                Trainings
            </Typography>

            {/* AppBar for Tabs */}
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#1976d2',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    indicatorColor="secondary"
                    textColor="inherit"
                    aria-label="CV sections"
                    sx={{
                        '.MuiTab-root': { fontSize: '0.9rem' }, // Smaller font for mobile
                    }}
                >
                    <Tab label="PNY Training" {...a11yProps(0)} />
                    <Tab label="HHRD Lahore" {...a11yProps(1)} />
                    <Tab label="UN-Dev Program (UNDP)" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            {/* Tab Panels */}
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Typography variant="h5" sx={{ mb: 1, fontSize: '1.3rem' }}>
                    Web Development
                </Typography>
                <Typography variant="body2"  sx={{ mb: 1, fontSize: '1.2rem' }}>2021-2022</Typography>
                <Typography variant="body2">During my time at PNY Training, I gained hands-on experience 
                    in web development. I worked on designing, developing, and maintaining websites using 
                    technologies such as HTML, CSS, JavaScript, and tools I have used ReactJS, Material UI. 
                    I was involved in front-end developments. My project as Portfolio, To Do, Online Quiz App, E-commerce, dashboard Etc.</Typography>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Typography variant="h6" sx={{ mb: 1, fontSize: '1.3rem' }}>
                    Sustainbale Development Intiative
                </Typography>
                <Typography variant="body3" sx={{ mb: 3, fontSize: '1.2rem' }}>2020- June end</Typography>
                <Typography variant="body2">6 months internship including community services, assessments
                monitoring, evaluating, translating and retrieve data in the database</Typography>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography variant="h6" sx={{ mb: 1, fontSize: '1.3rem' }}>
                    AI and Data Science Training Program
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, fontSize: '1.2rem' }}>2024-end</Typography>
                <Typography variant="body2">During this program covered key topics such as machine learning,
                     deep learning, data analysis, and AI model development. This experience allowed me to apply 
                     advanced AI techniques to real-world problems.  I developed a project called
                      "X-Raw Smart Scan AI Diagnosis," which utilizes AI to enhance accuracy in medical X-Ray imaging to diagnosis Phenomina.</Typography>
            </TabPanel>
        </Box>
    );
}
