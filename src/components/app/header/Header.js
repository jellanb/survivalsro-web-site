import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import iconMain from '../../../images/logocentro5.png';
import ControlAccount from './ControlAccount';
import { UserContext } from '../../../hooks/UserContext';
import Box from '@mui/material/Box';
import MobileMenuButton from './MobileMenuButton';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: '#1B1919',
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    title: {
        flexGrow: 1,
        backgroundColor: 'black',
    },
    iconMain: {
        "& > *": {
          margin: theme.spacing(1),
          width: theme.spacing(30),
          height: theme.spacing(8),
          maxWidth: 345,
        },
        backgroundColor: '#1B1919',
    },
    cardMediaIconMain: {
        backgroundColor: '#1B1919',
    }
}));


export default function Header() {
    const classes = useStyles();
    const  { userCtx }  = useContext(UserContext);
    const { username, silk, isSingIn } = userCtx;

    return (
        <React.Fragment>
             <AppBar position="static" className={classes.toolbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Card className={classes.iconMain}>
                                <CardMedia className={classes.cardMediaIconMain} image={iconMain} />
                        </Card>
                    </Typography>
                    <Box component="span" sx={{ display: { xs: 'none', md:'none', lg: 'block', ms: 'none' } }}>
                    <ButtonGroup  variant="text" color="inherit" aria-label="text primary button group">
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>
                                Inicio
                            </Link>
                        </Button>
                        {/*<Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/ranking'>
                                Ranking
                            </Link>
                        </Button>*/}
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/download'>
                                Descargas
                            </Link>
                        </Button>
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/politics'>
                                Politicas
                            </Link>
                        </Button>
                        {
                            (username)
                                ? <Button>
                                    <Link style={{ textDecoration: 'none', color: 'white'}} to='/Reload'>
                                        Recargar
                                    </Link>
                                </Button>
                                : <Button>
                                    <Link style={{ textDecoration: 'none', color: 'white'}} to='/SingUp'>
                                        Crear Cuenta
                                    </Link>
                                </Button>
                        }
                        <ControlAccount username={username} silk={silk} isSingIn={isSingIn}/>
                    </ButtonGroup>
                    </Box>
                    <Box component="span" sx={{ display: { xl: 'none', md:'none', sm: 'block' } }}>
                        <MobileMenuButton userCtx={userCtx}/>
                    </Box>
                </Toolbar>
             </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};
