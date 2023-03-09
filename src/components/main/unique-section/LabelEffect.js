import React, { useState } from 'react';
import { Fade, FormControlLabel } from '@mui/material';
import { Typography } from '@material-ui/core';

export default function LabelEffect() {
  const [checked, setChecked] = useState(false);

  setTimeout(() => setChecked(!checked), 1000);

  return (
    <Fade in={checked}>
      <Typography style={{ color: 'green' }}>{`Live`}</Typography>
    </Fade>
  );
}
