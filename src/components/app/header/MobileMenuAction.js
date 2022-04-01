import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Fragment } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MobileControlAccount from "./MobileControlAccount";

const useStyles = makeStyles((theme) => ({
    containerMenuItems: {
        backgroundColor: 'transparent',
    }
}));


export default function MobileMenuAction({open, anchorEl, setAnchorEl, handleClick, userCtx}) {
    const classes = useStyles();
    const { username, silk, isSingIn } = userCtx;
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Fragment>
            <IconButton
                color='inherit'
                edge="start"
                aria-label="menu"
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                className={classes.containerMenuItems}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to='/'>
                        Inicio
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to='/download'>
                        Descargas
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to='/politics'>
                        Politicas
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {
                        (username)
                            ? <Button>
                                <Link style={{ textDecoration: 'none', color: 'black'}} to='/Reload'>
                                    Recargar
                                </Link>
                            </Button>
                            : <Button>
                                <Link style={{ textDecoration: 'none', color: 'black'}} to='/SingUp'>
                                    Crear Cuenta
                                </Link>
                            </Button>
                    }
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <MobileControlAccount username={username} silk={silk} isSingIn={isSingIn} />
                </MenuItem>
            </Menu>
        </Fragment>
    );
}

