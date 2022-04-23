import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import Installation from '../components/Guide/Installation';
import Start from '../components/Guide/Start';
import Uniques from '../components/Guide/Uniques';
import Leveling from '../components/Guide/Leveling';
import JupiterUniques from '../components/Guide/JupiterUniques';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { MAX_WIDTH } from '../constants';

const Container = styled(TabsUnstyled)(({ theme }) => ({
  display: 'flex',
  width: '90%',
  maxWidth: MAX_WIDTH,
  height: 'fit-content',
  minHeight: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: '95%'
  },
  [theme.breakpoints.down('md')]: {
    width: '95%'
  }
}));

const TabContainer = styled(TabsListUnstyled)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  wordWrap: 'break-word',
  gap: '0.3em',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(-2),
    overflowX: 'scroll',
    '::-webkit-scrollbar': {
      width: 0,
      background: 'transparent'
    }
  }
}));

const Tab = styled(TabUnstyled)(({ theme }) => ({
  backgroundColor: '#3f5067',
  border: '2px',
  borderColor: '#757a75',
  borderRadius: '1em 0 0 1em',
  borderStyle: 'double none double double',
  borderWidth: 'thick',
  color: '#afc8d6',
  fontSize: '1em',
  maxWidth: '10em',
  minHeight: '5em',
  width: 'auto',
  padding: '0.5em',
  textTransform: 'capitalize',
  '&.Mui-selected': {
    backgroundColor: '#3c7aa2',
    color: '#ffffff',
    fontWeight: 'bold',
    '> *': {
      fontSize: '1.1em'
    }
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '1em 1em 0 0',
    borderStyle: 'double double none double',
    minWidth: '6em',
    maxWidth: 'none'
  }
}));

const TabPanel = styled(TabPanelUnstyled)(({ theme }) => ({
  border: '2px #757a75',
  borderRadius: '0.5em',
  borderStyle: 'double',
  color: '#afc8d6',
  padding: 0,
  textAlign: 'center',
  width: '100%'
}));

const Guides = () => {
  const { t } = useTranslation();

  return (
    <Container defaultValue={0}>
      <TabContainer>
        <Tab>
          <Typography>{t('installation')}</Typography>
        </Tab>
        <Tab>
          <Typography>{t('start')}</Typography>
        </Tab>
        <Tab>
          <Typography>{t('leveling')}</Typography>
        </Tab>
        <Tab>
          <Typography>{t('uniques')}</Typography>
        </Tab>
        <Tab>
          <Typography>{t('jupiter.uniques')}</Typography>
        </Tab>
      </TabContainer>
      <TabPanel value={0} className="firefly-container constellation-bg">
        <Installation />
      </TabPanel>
      <TabPanel value={1} className="firefly-container constellation-bg">
        <Start />
      </TabPanel>
      <TabPanel value={2} className="firefly-container constellation-bg">
        <Leveling />
      </TabPanel>
      <TabPanel value={3} className="firefly-container constellation-bg">
        <Uniques />
      </TabPanel>
      <TabPanel value={4} className="firefly-container constellation-bg">
        <JupiterUniques />
      </TabPanel>
    </Container>
  );
};

export default Guides;
