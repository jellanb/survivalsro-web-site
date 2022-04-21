import { Grid, styled } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import welcomeImg from '../../images/start-guide/welcomeImg.jpeg';
import inventoryImg from '../../images/start-guide/inventoryImg.jpeg';
import questsImg from '../../images/start-guide/questsImg.jpeg';
import flareHot1 from '../../images/flareHot1.png';
import Image from '../common/Image';

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
  padding: '1em',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const Start = () => {
  const { t } = useTranslation();
  const fireflies = Array(40)
    .fill(0)
    .map((_, i) => <div key={i} className="firefly"></div>);

  return (
    <Container className="firefly-container">
      {fireflies}
      <h1 className={'glow'} style={{ marginBottom: '1em' }}>
        {t('start.guide.title')}
      </h1>

      <Grid container spacing={0}>
        <Grid item s={12} md={7} alignItems="center" style={{ display: 'flex' }}>
          <Text>{t('start.guide.text1')}</Text>
        </Grid>
        <Grid item s={12} md={5}>
          <Image src={welcomeImg} alt="map" />
        </Grid>

        <Grid item s={12} justifyContent="center" style={{ display: 'flex', margin: '2em 0' }}>
          <img src={flareHot1} alt={'flare'} style={{ maxWidth: '50%' }} />
        </Grid>

        <Grid item s={12} md={3}>
          <Image src={inventoryImg} alt="map" style={{ maxWidth: '100%' }} aspectRatio={0.95} />
        </Grid>

        <Grid item s={12} md={6} alignItems="center" style={{ display: 'flex' }}>
          <Text>{t('start.guide.text2')}</Text>
        </Grid>
        <Grid item s={12} md={3} />

        <Grid item s={12} justifyContent="center" style={{ display: 'flex', margin: '2em 0' }}>
          <img src={flareHot1} alt={'flare'} style={{ maxWidth: '50%' }} />
        </Grid>

        <Grid item s={12} md={3} />

        <Grid item s={12} md={6} alignItems="center" style={{ display: 'flex' }}>
          <Text>{t('start.guide.text3')}</Text>
        </Grid>

        <Grid item s={12} md={3} alignItems="center" style={{ display: 'flex' }}>
          <Image src={questsImg} alt="map" style={{ maxWidth: '100%' }} aspectRatio={1} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Start;
