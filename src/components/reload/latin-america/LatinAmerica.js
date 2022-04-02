import {Fragment} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import ReactCountryFlag from "react-country-flag"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Discord from '@material-ui/icons/Chat';
import image1Reseller from '../../../images/WhatsApp Image 2022-03-06 at 01.25.54.jpeg';
import Sidebar from "../../app/footer/Siderbar";

const useStyles = makeStyles((theme) => ({
    box:{
        marginLeft: '5%'
    },
    cardContent:{
        background: 'linear-gradient(45deg, #292727 30%, #1B1919 90%)',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
        borderRadius: 5,
    },
    typography:{
        color: 'white'
    }
}));

const sidebar = {
    social: [
        { name: '', icon: InstagramIcon, url: 'https://www.instagram.com/survivalsro/?hl=es-la' },
        { name: '', icon: WhatsApp, url: 'https://chat.whatsapp.com/FUoXQdPsizjKZFv3UWgg3Q' },
        { name: '', icon: FacebookIcon, url: 'https://www.facebook.com/profile.php?id=100069379890071' },
        { name: '', icon: Discord, url: 'https://discord.gg/GRfHYPnwPp' },
    ],
};

export default function LatinAmerica() {
    const classes = useStyles();
    return (
        <Fragment>
            <br/>
            <Card sx={{ display: 'flex' }} className={classes.cardContent}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <CardContent sx={{ flex: '1 0 auto' }} >
                        <Typography component="div" variant="h5" className={classes.typography}>
                            Reseller
                        </Typography>
                        <Typography variant="subtitle1" className={classes.typography} component="div">
                            Colombia <ReactCountryFlag countryCode="CO" />
                        </Typography>
                        <Typography variant="subtitle1" className={classes.typography} component="div">
                            PJ: <b>Dzon</b>
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Grid container>
                            <Grid item lg={5} xs={2}>
                                <Sidebar
                                    social={sidebar.social}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 276 }}
                    image={image1Reseller}
                    alt="Live from space album cover"
                />
            </Card>
        </Fragment>
    );
}
