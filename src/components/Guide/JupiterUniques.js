import { styled, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import baalImg from '../../images/uniques-guide/baal.png';
import earthImg from '../../images/uniques-guide/earth.png';
import yunoImg from '../../images/uniques-guide/yuno.png';
import jupiterImg from '../../images/uniques-guide/jupiter.png';
import zielImg from '../../images/uniques-guide/ziel.png';
import arenaImg from '../../images/uniques-guide/arena.jpeg';
import astralImg from '../../images/uniques-guide/astral.jpeg';
import dimensionImg from '../../images/uniques-guide/dimension.jpeg';
import globalImg from '../../images/uniques-guide/global.jpeg';
import potsImg from '../../images/uniques-guide/pots.jpeg';
import reverseImg from '../../images/uniques-guide/reverse.jpeg';
import speedImg from '../../images/uniques-guide/speed.jpeg';

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

const Img = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {}
}));

const UniquesContainer = styled(Grid)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    minHeight: '350px',
    minWidth: '100%'
  }
}));

const BaalImg = styled(Img)(({ theme }) => ({
  top: 0,
  left: -100,
  width: '60%',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    left: -80
  }
}));

const YunoImg = styled(Img)(({ theme }) => ({
  top: 230,
  right: 40,
  zIndex: '3',
  [theme.breakpoints.down('sm')]: {
    top: 150,
    right: -40,
    width: '70%'
  }
}));

const EarthImg = styled(Img)(({ theme }) => ({
  top: 200,
  left: 40,
  zIndex: '2',
  [theme.breakpoints.down('sm')]: {
    left: -20,
    top: 120,
    width: '80%'
  }
}));

const JupiterImg = styled(Img)(({ theme }) => ({
  top: -200,
  right: -180,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    top: -100,
    right: -100,
    width: '120%'
  }
}));

const ZielImg = styled(Img)(({ theme }) => ({
  top: 50,
  left: 200,
  width: '35%',
  [theme.breakpoints.down('sm')]: {
    left: 120
  }
}));

const JupiterUniques = () => {
  const { t } = useTranslation();
  const fireflies = Array(40)
    .fill(0)
    .map((_, i) => <div key={i} className="firefly"></div>);

  return (
    <Container>
      {fireflies}
      <h1 className={'glow'} style={{ marginBottom: '1em' }}>
        {t('jupiter.uniques.guide.title')}
      </h1>
      <Grid container spacing={0}>
        <UniquesContainer item s={12} lg={7}>
          <BaalImg src={baalImg} alt="power-level-uniques" />
          <YunoImg src={yunoImg} alt="power-level-uniques" />
          <EarthImg src={earthImg} alt="power-level-uniques" />
          <JupiterImg src={jupiterImg} alt="power-level-uniques" />
          <ZielImg src={zielImg} alt="power-level-uniques" />
        </UniquesContainer>
        <Grid item s={12} lg={5} style={{ marginBottom: '2em' }}>
          <Text>{t('jupiter.uniques.guide.text1')}</Text>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', padding: '0.5em' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 1em', textAlign: 'left', fontSize: '1.5em' }}>
                <li>{t('reverse.scrolls')}</li>
                <li>{t('immortals.11D')}</li>
                <li>{t('astrals.11D')}</li>
                <li>{t('gold.coins')}</li>
                <li>{t('silver.coins')}</li>
                <li>{t('iron.coins')}</li>
                <li>{t('copper.coins')}</li>
                <li>{t('increase.pots')}</li>
                <li>{t('dimension.hole')}</li>
                <li>{t('move.speed.150')}</li>
              </ul>
            </div>
            <div style={{ width: '50%', padding: '0.5em', marginLeft: '1em', display: 'grid' }}>
              <img src={arenaImg} alt={'arena'} style={{ minHeight: '40px', maxWidth: '100%' }} />
              <img src={astralImg} alt={'astral'} style={{ minHeight: '40px', maxWidth: '100%' }} />
              <img src={dimensionImg} alt={'dimension'} style={{ minHeight: '40px', maxWidth: '100%' }} />
              <img src={globalImg} alt={'global'} style={{ minHeight: '40px', maxWidth: '100%' }} />
              <img src={potsImg} alt={'pots'} style={{ minHeight: '40px', maxWidth: '100%' }} />
              <img src={reverseImg} alt={'reverse'} style={{ minHeight: '40px', maxWidth: '100%' }} />
              <img src={speedImg} alt={'speed'} style={{ minHeight: '40px', maxWidth: '100%' }} />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JupiterUniques;
