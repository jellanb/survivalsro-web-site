import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import teleportImgGuid from '../../images/teleportGuide.jpeg';
import initialItemsImgGuide from '../../images/intialItensGuide.jpeg';
import npcImgGuide from '../../images/npcGuide.jpeg';
import { Image } from '@mui/icons-material';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  with: '100%',
  padding: '1em 2em',
  //backgroundImage: `url(${bruja})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '92.5% 6%',
  backgroundSize: '22em',
  [theme.breakpoints.down('sm')]: {
    background: 'transparent'
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const guides = [{ img: initialItemsImgGuide }, { img: npcImgGuide }, { img: teleportImgGuid }];
export default function Drops() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('installation.drops.title')}</h1>
      <Grid container spacing={2}>
        {[darkTheme].map((theme, index) => (
          <Grid item xs={6} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2
                }}
              >
                {guides.map((guide, index) => (
                  <Item key={index} elevation={index}>
                    <Image src={guide.img} />
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
