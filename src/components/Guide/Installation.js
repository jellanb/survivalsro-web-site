import { styled } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import bruja from '../../images/InstalationImg1.png';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  height: '100%',
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

const Installation = () => {
  const { t } = useTranslation();
  const urlW7 = process.env['REACT_APP_INSTALL_GUID_W7_URL'];
  const urlW10 = process.env['REACT_APP_INSTALL_GUID_W10_URL'];
  const fireflies = Array(40)
    .fill(0)
    .map((_, i) => <div key={i} className="firefly"></div>);

  return (
    <Container>
      {fireflies}
      <FontFace />

      <Text>{t('installation.guide.text1')}</Text>

      <VideoSection>
        <h4>{t('windows10')}</h4>
        <Video
          src={urlW10}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Video>
      </VideoSection>

      <VideoSection>
        <h4>{t('windows7')}</h4>
        <Video
          src={urlW7}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Video>
      </VideoSection>
    </Container>
  );
};

const FontFace = () => {
  return <div className="font-face-gm">In this section we need have title whit font Ethnocentric and color white!</div>;
};

export default Installation;
