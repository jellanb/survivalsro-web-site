import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Discord from '@material-ui/icons/Chat';
import Sidebar from './Siderbar';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import imagenElitepevpers from '../../../images/elitepvpers.png';
import vsroplus from '../../../images/thumbnail_main.png'

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" style={{ color: 'white'}} href="http://survivalsro.com/">
                survivalsro.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(6, 0),
        background: 'linear-gradient(360deg, #232121 30%, #1B1919 90%)',
        color: 'white'
    },
    mediaDownload: {
        height: 50,
    },
    Card: {
        maxWidth: 220,
        backgroundColor: 'transparent',
        paddingRight: '0%',
    },
}));

const sidebar = {
    social: [
        { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/survivalsro/?hl=es-la' },
        { name: 'WhatsApp', icon: WhatsApp, url: 'https://chat.whatsapp.com/FUoXQdPsizjKZFv3UWgg3Q' },
        { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/profile.php?id=100069379890071' },
        { name: 'Discord', icon: Discord, url: 'https://discord.gg/GRfHYPnwPp' },
    ],
};

const parnets = [
    { name: 'elitepvpers', image:`${imagenElitepevpers}`, url:`https://www.elitepvpers.com/`},
    { name: 'vplus', image:`${vsroplus}`, url:`http://vsroplus.com/`}
]


export default function Footer({ description, title }) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container>
                <Grid item lg={4} xs={12}>
                </Grid>
            <Grid item lg={4} xs={12}>
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center">
                    {description}
                </Typography>
                <Copyright />
                <Typography variant="subtitle1" align="center">
                    POWERED BY VPS CHAIN FROM EEUU
                </Typography>
                <Typography variant="subtitle1" align="center">
                    PARTNERS
                    {parnets.map((container,index) =>
                        <div className={classes.root} align={'center'}>
                        <Grid>
                            <Partner key={index} classes={classes} container={container} />
                        </Grid>
                        </div>)}
                </Typography>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Sidebar
                    social={sidebar.social}
                    />
                </Grid>
            </Grid>
        </footer>
    )

    function Partner({classes, container}) {
        console.log(classes);
        console.log(container);
        return (
            <Grid item xl={2} lg={6}>
                <Card className={classes.Card} style={{ border: "none", boxShadow: "none" }}>
                    <CardActionArea href={`${container.url}`} target="_blank">
                            <CardMedia
                                className={classes.mediaDownload}
                                image={container.image}
                            />
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
}



Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};
