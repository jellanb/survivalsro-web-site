import GuildNameOccupied from "./GuildNameOccupied";
import {Fragment} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { GiDeathZone } from 'react-icons/gi';
import GroupIcon from '@material-ui/icons/Group';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles({
    main: {
        backgroundColor: 'black',
        flexGrow: 1,
    },
    barInfo: {
        background: 'linear-gradient(45deg, #292727 30%, #1B1919 90%)',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
        borderRadius: 5,
    }
});

export default function GeneralInformationBar({fortressInfo, userLastKill, usersOnlineCount}) {
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="static" className={classes.main}>
                <Toolbar variant="dense" className={classes.barInfo}>
                    <Grid container spacing={1}>
                        {fortressInfo.map((ftwInfo) => (<GuildNameOccupied ftwInfo={ftwInfo} />))}
                        <Grid item xl={3} lg={3} xs={3}>
                            <Typography variant="h6" >
                                <GiDeathZone/> {`Last unique kills: ${userLastKill}`}
                            </Typography>
                        </Grid>
                        <Grid item xl={3} lg={3} xs={3}>
                            <Typography variant="h6" color={'secondary'}>
                                <GroupIcon/>
                                <FormattedMessage id='app.barUsersOnline'/>
                                {`: ${usersOnlineCount}` }
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
