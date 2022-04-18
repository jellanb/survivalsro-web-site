import { Grid, styled } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import bruja from '../../images/InstalationImg1.png';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  with: '100%',
  padding: '1em 2em'
}));

const Text = styled('p')(({ theme }) => ({
  textAlign: 'left',
  fontSize: '1.5em',
  width: '80%',
  padding: '1em',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const Start = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('start.guide.title')}</h1>

      <Grid container spacing={2}>
        <Grid xs={8}>
          <Text>{t('start.guide.text1')}</Text>
        </Grid>
        <Grid xs={4}>
          <img src={bruja} alt="map" />
        </Grid>

        <Grid xs={8}>
          <img src={bruja} alt="map" />
        </Grid>
        <Grid xs={8}>
          <Text>{t('start.guide.text2')}</Text>
        </Grid>

        <Grid xs={3}>
          <img src={bruja} alt="map" />
        </Grid>

        <Grid xs={6}>
          <Text>{t('start.guide.text3')}</Text>
        </Grid>

        <Grid xs={3}>
          <img src={bruja} alt="map" />
        </Grid>
      </Grid>

      <Text>{t('start.guide.text2')}</Text>
      <Text>{t('start.guide.text3')}</Text>
    </Container>
  );
};

export default Start;
