import { styled, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import bruja from '../../images/InstalationImg1.png';
import Image from '../common/Image';

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

const Leveling = () => {
  const { t } = useTranslation();
  const fireflies = Array(40)
    .fill(0)
    .map((_, i) => <div key={i} className="firefly"></div>);

  return (
    <Container>
      {fireflies}
      <h1 className={'glow'} style={{ marginBottom: '1em' }}>
        {t('leveling.guide.title')}
      </h1>
      <Grid container spacing={0}>
        <Grid item s={12} lg={6}>
          <Text>{t('leveling.guide.text1')}</Text>
        </Grid>
        <Grid item s={12} md={6}></Grid>

        <Grid item lg={12} alignItems="center" style={{ display: 'flex' }}>
          <Text style={{ textAlign: 'center' }}>{t('leveling.guide.text2')}</Text>
        </Grid>
        <Grid item lg={12}>
          <Grid item sm={12} md={6} lg={3}></Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Leveling;
