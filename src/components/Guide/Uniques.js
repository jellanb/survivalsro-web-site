import { styled, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import powerLevelImg from '../../images/uniques-guide/powerLevel.jpeg';
import elitesImg from '../../images/uniques-guide/elites.jpeg';
import arenaImg from '../../images/uniques-guide/arena.jpeg';
import astralImg from '../../images/uniques-guide/astral.jpeg';
import dimensionImg from '../../images/uniques-guide/dimension.jpeg';
import globalImg from '../../images/uniques-guide/global.jpeg';
import potsImg from '../../images/uniques-guide/pots.jpeg';
import reverseImg from '../../images/uniques-guide/reverse.jpeg';
import speedImg from '../../images/uniques-guide/speed.jpeg';
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

const VideoSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  with: '100%',
  marginTop: '2em',
  marginBottom: '2em'
}));

const Video = styled('iframe')(({ theme }) => ({
  width: '70%',
  height: 500,
  maxWidth: 1000,
  alignSelf: 'center',
  [theme.breakpoints.down('md')]: {
    width: '90%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
    height: 250
  }
}));

const Uniques = () => {
  const { t } = useTranslation();
  const urlUniques = process.env['REACT_APP_UNIQUES_VIDEO_URL'];

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
        {t('uniques.guide.title')}
      </Typography>
      <Grid container spacing={0}>
        <Grid item s={12} lg={7}>
          <Image src={powerLevelImg} alt="power-level-uniques" style={{ maxWidth: '100%' }} aspectRatio={2} />
        </Grid>
        <Grid item s={12} lg={5} alignItems="center">
          <h1 style={{ fontSize: '2.5em' }}>{t('uniques.guide.text1.title')}</h1>
          <Text>{t('uniques.guide.text1')}</Text>
        </Grid>

        <Grid item style={{ display: 'flex', margin: '1em 0', width: '100%' }}></Grid>

        <Grid item s={12} lg={7}>
          <Image src={elitesImg} alt="power-level-uniques" style={{ maxWidth: '100%' }} aspectRatio={2.278} />
        </Grid>
        <Grid item s={12} lg={5} alignItems="center">
          <h1 style={{ fontSize: '2.5em' }}>{t('uniques.guide.text2.title')}</h1>
          <Text>{t('uniques.guide.text2')}</Text>
          <Grid item lg={12} alignItems="center" justifyContent="center" style={{ display: 'flex', gap: '0.5em' }}>
            <img src={arenaImg} alt={'arena'} style={{ minHeight: '40px', maxWidth: '100%' }} />
            <img src={astralImg} alt={'astral'} style={{ minHeight: '40px', maxWidth: '100%' }} />
            <img src={dimensionImg} alt={'dimension'} style={{ minHeight: '40px', maxWidth: '100%' }} />
            <img src={globalImg} alt={'global'} style={{ minHeight: '40px', maxWidth: '100%' }} />
            <img src={potsImg} alt={'pots'} style={{ minHeight: '40px', maxWidth: '100%' }} />
            <img src={reverseImg} alt={'reverse'} style={{ minHeight: '40px', maxWidth: '100%' }} />
            <img src={speedImg} alt={'speed'} style={{ minHeight: '40px', maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Grid>

      <VideoSection>
        <Video
          src={urlUniques}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Video>
      </VideoSection>
    </Container>
  );
};

export default Uniques;
