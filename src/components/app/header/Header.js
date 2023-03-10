import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import iconMain from '../../../images/logocentro5.png';
import ControlAccount from './ControlAccount';
import { UserContext } from '../../../hooks/UserContext';
import Box from '@mui/material/Box';
import MobileMenuButton from './MobileMenuButton';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#1B1919',
    height: theme.spacing(12)
  },
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  title: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  iconMain: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(8),
      maxWidth: 345
    },
    backgroundColor: '#1B1919'
  },
  cardMediaIconMain: {
    backgroundColor: '#1B1919'
  }
}));

export default function Header() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { userCtx } = useContext(UserContext);
  const { username, silk, isSingIn } = userCtx;
  console.log(userCtx);

  return (
    <header>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Card className={classes.iconMain}>
              <CardMedia className={classes.cardMediaIconMain} image={iconMain} />
            </Card>
          </Typography>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
              <Button>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                  {t('app.buttonMain')}
                </Link>
              </Button>
              <Button>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/guides">
                  {t('guides')}
                </Link>
              </Button>
              <Button>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/download">
                  {t('app.buttonDownload')}
                </Link>
              </Button>
              <Button>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/politics">
                  {t('app.buttonPolitic')}
                </Link>
              </Button>
              {username ? (
                <Button>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/Reload">
                    {t('app.buttonReload')}
                  </Link>
                </Button>
              ) : (
                <Button>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/SingUp">
                    {t('app.buttonSingUp')}
                  </Link>
                </Button>
              )}
              <ControlAccount isSingIn={isSingIn} silk={silk} username={username} />
              <LanguageSelector />
            </ButtonGroup>
          </Box>
          <Box component="span" sx={{ display: { xl: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
            <MobileMenuButton userCtx={userCtx} />
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
