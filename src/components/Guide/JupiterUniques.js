import { styled, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import baalImg from '../../images/uniques-guide/baal.png';
import earthImg from '../../images/uniques-guide/earth.png';
import yunoImg from '../../images/uniques-guide/yuno.png';
import jupiterImg from '../../images/uniques-guide/jupiter.png';
import zielImg from '../../images/uniques-guide/ziel.png';
import copperCoinImg from '../../images/uniques-guide/copper-coin.jpeg';
import ironCoinImg from '../../images/uniques-guide/iron-coin.jpeg';
import silverCoinImg from '../../images/uniques-guide/silver-coin.jpeg';
import goldCoinImg from '../../images/uniques-guide/gold-coin.jpeg';
import astralImg from '../../images/uniques-guide/astral.jpeg';
import immortalImg from '../../images/uniques-guide/immortal.jpeg';
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
    minHeight: '550px',
    minWidth: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '480px'
  },
  [theme.breakpoints.down('xs')]: {
    minHeight: '340px'
  }
}));

const BaalImg = styled(Img)(({ theme }) => ({
  top: 0,
  left: -100,
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '40%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    left: -130
  },
  [theme.breakpoints.down('xs')]: {
    left: -90
  }
}));

const YunoImg = styled(Img)(({ theme }) => ({
  top: 230,
  right: 40,
  zIndex: '3',
  [theme.breakpoints.down('md')]: {
    left: 450
  },
  [theme.breakpoints.down('sm')]: {
    top: 150,
    left: 250,
    width: '50%'
  },
  [theme.breakpoints.down('xs')]: {
    top: 120,
    width: '70%',
    left: 130
  }
}));

const EarthImg = styled(Img)(({ theme }) => ({
  top: 200,
  left: 40,
  zIndex: '2',
  [theme.breakpoints.down('md')]: {
    left: 150
  },
  [theme.breakpoints.down('sm')]: {
    left: 100,
    top: 160,
    width: '50%'
  },
  [theme.breakpoints.down('xs')]: {
    left: 20
  }
}));

const JupiterImg = styled(Img)(({ theme }) => ({
  top: -180,
  right: -180,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    right: -300,
    top: -250,
    width: '90%'
  },
  [theme.breakpoints.down('sm')]: {
    top: -160,
    right: -190,
    width: '120%'
  },
  [theme.breakpoints.down('xs')]: {
    right: -120,
    top: -100
  }
}));

const ZielImg = styled(Img)(({ theme }) => ({
  top: 50,
  left: 200,
  width: '35%',
  [theme.breakpoints.down('md')]: {
    top: -10,
    left: 250,
    width: '30%'
  },
  [theme.breakpoints.down('sm')]: {
    left: 150,
    width: '35%'
  },
  [theme.breakpoints.down('xs')]: {
    width: '40%',
    left: 100
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
      <Typography
        variant="h1"
        style={{ fontSize: '2em', fontFamily: 'var(--survivalLikeFontFamily)', margin: '0.5em 0' }}>
        {t('jupiter.uniques.guide.title')}
      </Typography>
      <Grid container spacing={0}>
        <UniquesContainer item s={12} lg={7}>
          <BaalImg src={baalImg} alt="power-level-uniques" />
          <YunoImg src={yunoImg} alt="power-level-uniques" />
          <EarthImg src={earthImg} alt="power-level-uniques" />
          <JupiterImg src={jupiterImg} alt="power-level-uniques" />
          <ZielImg src={zielImg} alt="power-level-uniques" />
        </UniquesContainer>
        <Grid item s={12} lg={5} style={{ marginBottom: '2em' }}>
          <Grid item sm={12} lg={12} style={{ marginBottom: '2em' }}>
            <Text style={{ padding: 0, margin: 0, textAlign: 'justify' }}>{t('jupiter.uniques.guide.text1')}</Text>
          </Grid>

          <Grid container lg={12}>
            <Grid
              item
              xs={6}
              s={6}
              md={6}
              lg={6}
              justifyContent="center"
              style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
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
            </Grid>
            <Grid
              item
              xs={6}
              s={6}
              md={6}
              lg={6}
              justifyContent="center"
              style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
              <table>
                <tr>
                  <td>
                    <img src={globalImg} alt={'global'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                  <td>
                    <img src={reverseImg} alt={'reverse'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={immortalImg} alt={'astral'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                  <td>
                    <img src={astralImg} alt={'reverse'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={goldCoinImg} alt={'astral'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                  <td>
                    <img src={silverCoinImg} alt={'reverse'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={ironCoinImg} alt={'astral'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                  <td>
                    <img src={copperCoinImg} alt={'reverse'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <img src={potsImg} alt={'astral'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={dimensionImg} alt={'astral'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                  <td>
                    <img src={speedImg} alt={'reverse'} style={{ height: '40px', maxWidth: '100%' }} />
                  </td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JupiterUniques;
