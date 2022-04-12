import { styled } from '@material-ui/core';
import { textAlign } from '@mui/system';
import { useTranslation } from 'react-i18next';
import chBg1 from './ch-bg-1.png';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  with: '100%',
  padding: '1em 2em',
  backgroundImage: `url(${chBg1})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '92.5% 6%',
  backgroundSize: '22em',
  [theme.breakpoints.down('sm')]: {
    background: 'none'
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

  return (
    <Container>
      <h1>{t('installation.guide.title')}</h1>

      <Text>{t('installation.guide.text1')}</Text>

      <VideoSection>
        <h4>{t('windows10')}</h4>
        <Video
          src="https://www.youtube.com/embed/7EBi2CuEgXc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
      </VideoSection>

      <VideoSection>
        <h4>{t('windows7')}</h4>
        <Video
          src="https://www.youtube.com/embed/7EBi2CuEgXc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
      </VideoSection>
    </Container>
  );
};

export default Installation;
