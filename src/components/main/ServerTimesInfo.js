import React, { Fragment } from 'react';
import ServerClock from './server-time/ServerClock';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { GiClockwork } from 'react-icons/gi';
import ListItemText from '@material-ui/core/ListItemText';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  time: {
    textAlign: 'center'
  }
}));

export default function ServerTimesInfo({ serverTime }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const time = Date.parse(serverTime);

  return (
    <Fragment>
      <ListItem divider="true" dense="true">
        <ListItemAvatar>
          <GiClockwork />
        </ListItemAvatar>
        <ListItemText primary={<b>{t('app.ServerTime')}</b>} />
      </ListItem>
      <ListItem className={classes.time}>
        <ListItemText className={classes.users}>
          <ServerClock time={time} />
        </ListItemText>
      </ListItem>

      <ListItem divider="true" dense="true" />

      {/* <ListItemAvatar >
                                <GiIndiaGate/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.Ftw.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date} /> */}
      {/*<ListItem divider="true" dense="true">
              <ListItemAvatar>
                <BsFillFlagFill />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <b>
                    <FormattedMessage id="app.CTF.Time" />
                  </b>
                }
              ></ListItemText>
              <Countdown date={date} />
            </ListItem>*/}
      {/*<ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiBattleAxe/>
                            </ListItemAvatar>
                            <ListItemText primary={<b>{t('app.ARN.Time')}'</b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiSnakeTotem/>
                            </ListItemAvatar>
                            <ListItemText primary={<b>{t('app.snk.Time')}'</b>} >
                            </ListItemText>
                            <Countdown date={date} />
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiEgyptianSphinx/>
                            </ListItemAvatar>
                            <ListItemText primary={<b>{t('app.isis.Time')}'</b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiEgyptianProfile/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.anu.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiEgyptianWalk/>
                            </ListItemAvatar>
                            <ListItemText primary={<b>{t('app.nei.Time')}'</b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiScarecrow/>
                            </ListItemAvatar>
                            <ListItemText primary={<b>{t('app.sel.Time')}'</b>} >
                            </ListItemText>
                            <Countdown date={date}/>
          </ListItem>*/}
    </Fragment>
  );
}
