import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Paper, Snackbar, Alert } from '@mui/material';

function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    // Simulating a successful form submission
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ padding: 3, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={6} sx={{ padding: 3, width: 350, borderRadius: 2 }}>
        <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: '#fafafa' }}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: '#fafafa' }}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                sx={{ backgroundColor: '#fafafa' }}
                required
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
