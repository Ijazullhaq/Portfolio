import React from 'react';
import { Box, Typography, Link, Grid, Divider, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{
      backgroundColor: '#1976d2', 
      color: 'white', 
      padding: 2, 
      marginTop: 4, 
      textAlign: 'center'
    }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Social Media Links */}
        <Grid item>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: 'white', '&:hover': { color: '#ffb74d' } }}>
            <IconButton sx={{ color: 'white' }}>
              <LinkedIn />
            </IconButton>
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              LinkedIn
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://github.com" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: 'white', '&:hover': { color: '#ffb74d' } }}>
            <IconButton sx={{ color: 'white' }}>
              <GitHub />
            </IconButton>
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              GitHub
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="mailto:your.email@example.com" sx={{ display: 'flex', alignItems: 'center', color: 'white', '&:hover': { color: '#ffb74d' } }}>
            <IconButton sx={{ color: 'white' }}>
              <Email />
            </IconButton>
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              Email
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 2, backgroundColor: 'white' }} />
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        &copy; {new Date().getFullYear()} Ijaz Ull Haq. All rights reserved.
      </Typography>
    </Box>
    
  );
}

export default Footer;
