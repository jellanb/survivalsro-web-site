import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useSingIn } from '../../../hooks/useSingIn';
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function AccountActionsButton({ username, silk }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const { handleLogoutClick } = useSingIn()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Avatar src="/broken-image.jpg" />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <AccountBoxIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={username} />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <AttachMoneyIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to={'/reload'} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemText primary={silk} />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleLogoutClick}>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Salir" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <VpnKeyIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to={'/editAccount'} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemText primary="Cambiar clave" />
                    </Link>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
