import { styled, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import levelUpImg from '../../images/leveling-guide/lvlup.jpeg';
import powerLevelImg from '../../images/uniques-guide/powerLevel.jpeg';
import Image from '../common/Image';
import { makeStyles } from '@material-ui/core/styles';
import cardFond from '../../images/fondoGuias.jpg';

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
  card1: {
    backgroundImage: `url(${cardFond})`,
    backgroundSize: 'cover',
    display: 'flex'
  },
  card2: {
    backgroundImage: `url(${cardFond})`,
    backgroundSize: 'cover'
  }
}));

const Leveling = () => {
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
        {t('leveling.guide.title')}
      </Typography>
      <Grid container spacing={0} justifyContent="center" style={{ display: 'flex' }}>
        <Card className={classes.card1}>
          <Grid item s={12} lg={6}>
            <Text>{t('leveling.guide.text1')}</Text>
          </Grid>
          <Grid item s={12} md={6}>
            <Image src={levelUpImg} alt="levelup" aspectRatio={2.325} />
          </Grid>
        </Card>

        <Grid item style={{ display: 'flex', margin: '2em 0', width: '100%' }}></Grid>

        <Card className={classes.card2}>
          <Grid item lg={12} alignItems="center" style={{ display: 'flex' }}>
            <Text style={{ textAlign: 'center' }}>{t('leveling.guide.text2')}</Text>
          </Grid>
          <Grid item lg={12}>
            <Image src={powerLevelImg} alt="power-level-uniques" style={{ maxWidth: '100%' }} aspectRatio={2} />
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};

export default Leveling;
