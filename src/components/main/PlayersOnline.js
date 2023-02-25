import { Fragment, React } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  users: {
    textAlign: 'center'
  }
}));

export default function PlatersOnline({ playesOnlineNames }) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Fragment>
      <ListItem divider="true" dense="true">
        <ListItemAvatar>
          <PersonIcon fontSize="small" />
        </ListItemAvatar>
        <ListItemText primary={<b>{t('app.PlayersOnline')}</b>}></ListItemText>
      </ListItem>
      <List
        sx={{
          background: 'transparent',
          width: '100%',
          maxWidth: 360,
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
          color: 'white'
        }}
        subheader={<li />}
      >
        {playesOnlineNames.map((name, index) => (
          <li key={`section-${index}`}>
            <ul>
              <ListItem key={`item-${index}`}>
                <ListItemText className={classes.users} primary={`${name}`} />
              </ListItem>
            </ul>
          </li>
        ))}
      </List>
    </Fragment>
  );
}
