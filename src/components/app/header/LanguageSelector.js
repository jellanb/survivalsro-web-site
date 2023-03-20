import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import { IconFlagES, IconFlagUS, IconFlagTR, IconFlagBR } from 'material-ui-flags';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { COOKIE_LANGUAGE_KEY } from '../../../constants';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderRadius: '0%',
    backgroundColor: '#1B1919',
    borderColor: 'white',
    paper: 'white'
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

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const classes = useStyles();

  const handleChange = (event) => {
    switch (event.target.value) {
      case 'en': {
        i18n.changeLanguage('en');
        localStorage.setItem(COOKIE_LANGUAGE_KEY, 'en');
        break;
      }
      case 'pt': {
        i18n.changeLanguage('pt');
        localStorage.setItem(COOKIE_LANGUAGE_KEY, 'pt');
        break;
      }
      case 'tr': {
        i18n.changeLanguage('tr');
        localStorage.setItem(COOKIE_LANGUAGE_KEY, 'tr');
        break;
      }
      case 'es': {
        i18n.changeLanguage('es');
        localStorage.setItem(COOKIE_LANGUAGE_KEY, 'es');
        break;
      }
      default: {
        i18n.changeLanguage('es');
        localStorage.setItem(COOKIE_LANGUAGE_KEY, 'es');
        break;
      }
    }
  };

  return (
    <Box sx={{ minWidth: 30 }} className={classes.toolbar}>
      <FormControl>
        <Select
          className={classes.toolbar}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={i18n.language}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'es'}>
            <IconButton>
              <IconFlagES />
            </IconButton>
          </MenuItem>
          <MenuItem value={'en'}>
            <IconButton>
              <IconFlagUS />
            </IconButton>
          </MenuItem>
          <MenuItem value={'tr'}>
            <IconButton>
              <IconFlagTR />
            </IconButton>
          </MenuItem>
          <MenuItem value={'pt'}>
            <IconButton>
              <IconFlagBR />
            </IconButton>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
