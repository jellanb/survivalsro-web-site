import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import moneyImg from '../../../images/monedas.jpg';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  silkSection: {
    marginTop: '20px'
  }
}));

export default function CardMediaMoney({ handleChangeAmount, detailsValue, detailsLabel }) {
  const classes = useStyles();

  return (
    <Card sx={{ display: 'flex', margin: '5px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>
        <FormControlLabel
          onChange={handleChangeAmount}
          value={detailsValue}
          control={<Radio />}
          className={classes.silkSection}
          label={detailsLabel}
        />
      </Box>
      <CardMedia component="img" sx={{ width: 70 }} image={moneyImg} alt="Live from space album cover" />
    </Card>
  );
}
