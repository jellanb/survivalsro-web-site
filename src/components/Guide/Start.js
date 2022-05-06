import { Grid, styled, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import welcomeImg from '../../images/start-guide/welcomeImg.jpeg';
import inventoryImg from '../../images/start-guide/inventoryImg.jpeg';
import questsImg from '../../images/start-guide/questsImg.jpeg';
import cardFond from '../../images/fondoGuias.jpg';
import Image from '../common/Image';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  height: '100%',
  with: '100%',
  padding: '1em 2em'
}));

const Text = styled('p')(({ theme }) => ({
  textAlign: 'left',
  fontSize: '1.5em',
  padding: '1em',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundImage: `url(${cardFond})`,
    backgroundSize: 'cover',
    display: 'flex'
  }
}));

const Start = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const fireflies = Array(40)
    .fill(0)
    .map((_, i) => <div key={i} className="firefly"></div>);

  return (
    <Container>
      {fireflies}
      <Typography
        type="h1"
        style={{ fontSize: '2em', fontFamily: 'var(--survivalLikeFontFamily)', marginBottom: '1em' }}
      >
        {t('start.guide.title')}
      </Typography>

      <Grid container spacing={0}>
        <Card className={classes.card}>
          <Grid item s={12} md={7} alignItems="center" style={{ display: 'flex' }}>
            <Text>{t('start.guide.text1')}</Text>
          </Grid>
          <Grid item s={12} md={5}>
            <Image src={welcomeImg} alt="map" />
          </Grid>
        </Card>

        <Grid item style={{ display: 'flex', margin: '2em 0', width: '100%' }}></Grid>
        <Card className={classes.card}>
          <Grid item s={12} md={3}>
            <Image src={inventoryImg} alt="map" style={{ maxWidth: '150%' }} aspectRatio={0.95} />
          </Grid>
          <Grid item s={12} md={6} alignItems="center" style={{ display: 'flex' }}>
            <Text>{t('start.guide.text2')}</Text>
          </Grid>
          <Grid item s={12} md={3} />
        </Card>

        <Grid item style={{ display: 'flex', margin: '2em 0', width: '100%' }}></Grid>

        <Grid item s={12} md={3} />
        <Card className={classes.card}>
          <Grid item s={12} md={6} alignItems="center" style={{ display: 'flex' }}>
            <Text>{t('start.guide.text3')}</Text>
          </Grid>

          <Grid item s={12} md={3} alignItems="center" style={{ display: 'flex' }}>
            <Image src={questsImg} alt="map" style={{ maxWidth: '100%' }} aspectRatio={1} />
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};

export default Start;
