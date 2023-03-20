import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import teleportImgGuid from '../../images/teleportGuide.jpeg';
import initialItemsImgGuide from '../../images/intialItensGuide.jpeg';
import npcImgGuide from '../../images/npcGuide.jpeg';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const guides = [{ img: initialItemsImgGuide }, { img: npcImgGuide }, { img: teleportImgGuid }];

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'black'
  },
  media: {
    paddingTop: '56.25%',
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  rootCard: {
    backgroundSize: 'cover'
  }
}));
export default function Drops() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Fragment>
      <Box sx={{ width: '100%', color: 'white' }}>
        <h1>{t('starting.guide.title')}</h1>
        <br />
        <Stack spacing={2}>
          {guides.map((info, index) => (
            <Card key={index} className={classes.rootCard}>
              <CardMedia image={info.img} className={classes.media} />
            </Card>
          ))}
        </Stack>
      </Box>
    </Fragment>
  );
}
