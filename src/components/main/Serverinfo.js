import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CachedIcon from '@mui/icons-material/Cached';
import BugReportSharpIcon from '@mui/icons-material/BugReportSharp';
import AddToPhotosSharpIcon from '@mui/icons-material/AddToPhotosSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import ReduceCapacitySharpIcon from '@mui/icons-material/ReduceCapacitySharp';
import LaptopChromebookSharpIcon from '@mui/icons-material/LaptopChromebookSharp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #292727 30%, #1B1919 90%)',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
        marginRight: '10%',
        borderRadius: 5,
    },
    title: {
        fontSize: 14,
        color: 'white'
    },
});

export default function ServerInfo() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <List className={classes.title}>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <SettingsAccessibilityIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='CAP: 110' >
                        </ListItemText>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <SupervisorAccountIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Race: Chinese/European' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <EqualizerIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Chinese balance: YES' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ArrowUpwardIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Mastery: 330/220' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <PermDataSettingIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='EXP/SP Rate: Medium' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ArrowUpwardIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='FREE Silk: YES' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ConfirmationNumberIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Magic POP: Works' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <EngineeringIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Play2Win: YES' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <SettingsApplicationsIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Automatic-Events: Works' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <CachedIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Job system: Available' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <BugReportSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='PK system: Enabled' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <AddToPhotosSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Max PLUS: 12 with ADV' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <GroupsSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Guild Limit: 24' />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ReduceCapacitySharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Union Limit: 2' />
                    </ListItem>
                    <ListItem dense='true'>
                        <ListItemAvatar>
                            <LaptopChromebookSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='IP Limit: 8' />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}
