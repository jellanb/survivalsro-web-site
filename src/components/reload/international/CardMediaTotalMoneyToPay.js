import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TotalPayImg from '../../../images/totalMonedas.png';

export default function CardMediaTotalMoneyToPay({ textSilk, textValue, quantitySilk, amount }) {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', width: '200px' }}>
          <Typography component="div" variant="h6">
            {`${textValue} ${amount} USD`}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`${textSilk} : ${quantitySilk}`}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '20%', height: '20%' }}
        image={TotalPayImg}
        alt="Live from space album cover"
      />
    </Card>
  );
}
