import React, { useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCampers } from '../../redux/campersSlice';
import { Camper } from '../../redux/types'; // Переконайтеся, що ви імпортували правильний тип

const CampersList: React.FC = () => {
  const dispatch = useAppDispatch();
  
  // Явно вказуємо, що campersList є масивом типу Camper[]
  const { campersList, status } = useAppSelector((state) => state.campers as { campersList: Camper[]; status: string });

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'failed') {
    return <Typography variant="h6">Failed to load campers.</Typography>;
  }

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-around" gap={4}>
      {campersList.map((camper) => (
        <Card key={camper.id} sx={{ width: 300 }}>
          <CardMedia
            component="img"
            image={camper.imageUrl}
            alt={camper.name}
            sx={{ height: 180 }}
          />
          <CardContent>
            <Typography variant="h6">{camper.name}</Typography>
            <Typography variant="body2">Price: €{camper.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CampersList;
