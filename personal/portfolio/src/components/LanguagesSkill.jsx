import React from 'react';
import { Box, Typography, Rating, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

// Sample data for languages and their skill levels (1-5 scale)
const languages = [
  { name: 'English', level: 3.5 },
  { name: 'Dari', level: 4 },
  { name: 'Pashto', level: 5 },
  { name: 'Urdu', level: 3.8 },
];

function LanguageSkills() {
  return (
    <Box sx={{ padding: 6 }}>
      <Typography variant="h5" color='blue'  sx={{ marginBottom: 2 }}>
        Languages
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="flex-start">
        {languages.map((language) => (
          <Box key={language.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              {language.name}
            </Typography>
            <Rating
              name={`rating-${language.name}`}
              value={language.level}
              precision={0.5}
              readOnly
              size="small"
              icon={<StarIcon />}
              emptyIcon={<StarIcon sx={{ opacity: 0.55 }} />}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default LanguageSkills;
