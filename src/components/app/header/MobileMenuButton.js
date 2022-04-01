import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {makeStyles} from "@material-ui/core/styles";
import {Fragment} from "react";
import MobileMenuAction from './MobileMenuAction';


const useStyles = makeStyles((theme) => ({
    button: {
        flexGrow: 1,
        backgroundColor: '#1B1919',
    }
}));

export default function MobileMenuButton({userCtx}) {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleCLick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const classes = useStyles();
    return (
        <Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={classes.button}>
                        <MobileMenuAction open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClick={handleCLick} userCtx={userCtx}/>
                    </Toolbar>
                </AppBar>
            </Box>

        </Fragment>
    );
}
