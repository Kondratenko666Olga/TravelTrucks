import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const ReviewsPage: React.FC = () => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState<string[]>([]);

  const handleAddReview = () => {
    setReviews([...reviews, review]);
    setReview('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Reviews
      </Typography>
      <Box>
        {reviews.map((rev, index) => (
          <Typography key={index} variant="body1" paragraph>
            {rev}
          </Typography>
        ))}
      </Box>
      <TextField
        label="Your Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddReview}>
        Submit
      </Button>
    </Container>
  );
};

export default ReviewsPage;
