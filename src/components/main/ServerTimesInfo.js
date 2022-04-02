import React, {Fragment } from 'react';
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { GiSnakeTotem, GiBattleAxe, GiEgyptianSphinx, GiClockwork, GiIndiaGate, GiEgyptianWalk, GiEgyptianProfile, GiScarecrow } from "react-icons/gi";
import { BsFillFlagFill } from "react-icons/bs";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Clock from 'react-live-clock';
import { FormattedMessage } from "react-intl";
import Countdown from 'react-countdown';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #292727 30%, #1B1919 90%)',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
        borderRadius: 5,
    },
    title: {
        fontSize: 14,
        color: 'white'
    },
});

export default function ServerTimesInfo({date}) {
    const classes = useStyles();
    return (
        <Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <List className={classes.title}>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar>
                                <GiClockwork/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.ServerTime" /></b>} >
                            </ListItemText>
                        </ListItem>
                        <ListItem divider='false'>
                            <ListItemText >
                                <p>{'2022/03/20'}</p>
                            </ListItemText>
                            <ListItemText >
                                <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Santiago'} />
                            </ListItemText>
                        </ListItem>
                        {/*<ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiIndiaGate/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.Ftw.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date} />
                        </ListItem>*/}
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <BsFillFlagFill/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.CTF.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>
                        {/*<ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiBattleAxe/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.ARN.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiSnakeTotem/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.snk.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date} />
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiEgyptianSphinx/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.isis.Time" /></b>} >
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
                            <ListItemText primary={<b><FormattedMessage id="app.nei.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>
                        <ListItem divider='true' dense='true'>
                            <ListItemAvatar >
                                <GiScarecrow/>
                            </ListItemAvatar>
                            <ListItemText primary={<b><FormattedMessage id="app.sel.Time" /></b>} >
                            </ListItemText>
                            <Countdown date={date}/>
                        </ListItem>*/}
                    </List>
                </CardContent>
            </Card>
        </Fragment>
    )
}
