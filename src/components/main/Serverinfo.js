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
                        <ListItemText primary={<p><b>CAP:</b> 110</p>} >
                        </ListItemText>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <SupervisorAccountIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Race:</b> Chinese/European</p>}/>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <EqualizerIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Chinese balance:</b>YES</p>}/>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ArrowUpwardIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Mastery:</b>330/220</p>}/>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <PermDataSettingIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>EXP/SP Rate:</b>Medium</p>} />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ArrowUpwardIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>FREE Silk:</b>YES</p>} />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ConfirmationNumberIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Magic POP:</b>Works</p>}/>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <EngineeringIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Play2Win:</b>YES</p>} />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <SettingsApplicationsIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Automatic-Events:</b>Works</p>} />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <CachedIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Job system:</b>Available</p>}/>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <BugReportSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>PK system:</b>Enabled</p>} />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <AddToPhotosSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Max PLUS:</b>12 with ADV</p>} />
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <GroupsSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Guild Limit:</b>24</p>}/>
                    </ListItem>
                    <ListItem divider='true' dense='true'>
                        <ListItemAvatar>
                            <ReduceCapacitySharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>Union Limit:</b>2</p>}/>
                    </ListItem>
                    <ListItem dense='true'>
                        <ListItemAvatar>
                            <LaptopChromebookSharpIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={<p><b>IP Limit:</b>6</p>} />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}
