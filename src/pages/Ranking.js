import React, {Fragment} from 'react';
import {Container} from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UniqueGrid from '../components/ranking/UniqueGrid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'black',
        alignContent:'center'
    },
    root: {
        backgroundColor: theme.palette.background.default,
        alignItems:'center'
    },
    bar:{
        backgroundColor: '#5C5E68'
    },
    tab:{
        color:'white'
    }
}));

export default function Ranking(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

        return (
            <Fragment>
                <Container maxWidth='xl' className={classes.container}>
                    <AppBar position="static" className={classes.bar}>
                        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Jugadores" {...a11yProps(0)} />
                            <Tab label="Gremios" {...a11yProps(1)} />
                            <Tab label="Comerciantes" {...a11yProps(2)} />
                            <Tab label="Ladrones" {...a11yProps(3)} />
                            <Tab label="Cazadores" {...a11yProps(4)} />
                            {/*<Tab label="Unicos" {...a11yProps(5)} />*/}
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} className={classes.tab} index={0}>
                        Jugadores
                    </TabPanel>
                    <TabPanel value={value} className={classes.tab} index={1}>
                        Gremios
                    </TabPanel>
                    <TabPanel value={value} className={classes.tab} index={2}>
                        Comerciantes
                    </TabPanel>
                    <TabPanel value={value} className={classes.tab} index={3}>
                        Ladrones
                    </TabPanel>
                    <TabPanel value={value} className={classes.tab} index={4}>
                        Cazadores
                    </TabPanel>
                    {/*<TabPanel value={value} className={classes.tab} index={5}>
                        <UniqueGrid/>
                    </TabPanel>*/}
                </Container>
            </Fragment>
        );
}
