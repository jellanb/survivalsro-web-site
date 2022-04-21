import { styled } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import bruja from '../../images/InstalationImg1.png';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  with: '100%',
  padding: '1em 2em',
  backgroundImage: `url(${bruja})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '92.5% 6%',
  backgroundSize: '22em',
  [theme.breakpoints.down('sm')]: {
    background: 'transparent'
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

const Leveling = () => {
  const { t } = useTranslation();
  const fireflies = Array(40)
    .fill(0)
    .map((_, i) => <div key={i} className="firefly"></div>);

  return (
    <Container className="firefly-container">
      {fireflies}
      <h1 className={'glow'} style={{ marginBottom: '1em' }}>
        {t('leveling.guide.title')}
      </h1>
    </Container>
  );
};

export default Leveling;
