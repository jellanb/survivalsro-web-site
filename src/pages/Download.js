import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import imagenDownload  from '../images/sroDownload.png'
import donwloadFond from '../images/donwloadFond.jpg';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.0),
    },
    heroContent: {
        padding: theme.spacing(8, 14, 0),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
        backgroundColor: 'transparent'
    },
    root: {
        maxWidth: 345,
        backgroundColor: 'transparent'
      },
    media: {
        height: 240,
    },
    containedMain: {
        backgroundImage:  `url(${donwloadFond})`,
        backgroundSize: 'cover',
    }
}));

const client = [
    {
        title: 'Mega Mirror',
        buttonText: 'download Client',
        buttonVariant: 'contained',
        href: process.env["REACT_APP_DOWNLOAD_CLIENT_MEGA"]
    },
    {
        title: 'Google Mirror',
        buttonText: 'download Client',
        buttonVariant: 'contained',
        href: process.env["REACT_APP_DOWNLOAD_CLIENT_GOOGLE"]
    },
    {
        title: 'Mediafire Mirror',
        buttonText: 'download Client',
        buttonVariant: 'contained',
        href: process.env["REACT_APP_DOWNLOAD_CLIENT_MEDIAFIRE"]
    },
];

const sbot = [
    {
        title: 'Sbot Mediafire',
        buttonText: 'download bot',
        buttonVariant: 'contained',
        href: 'https://www.mediafire.com/file/t25ppxlvslimwhp/SBOT_1.0.38_Survival.rar/file'
    },
    {
        title: 'Sbot Mega Mirror',
        buttonText: 'download bot',
        buttonVariant: 'contained',
        href: 'https://mega.nz/file/zQJGGbxB#4MdetlFocsukuH68SnOANayjLDJCNRZ5SE59JjcHWw8'
    }
]

export default function Pricing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl' className={classes.containedMain}>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Card className={classes.root} style={{ border: "none", boxShadow: "none" }}>
                <CardMedia
                className={classes.media}
                image={imagenDownload}
                />
            </Card>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="xl" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {client.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                </CardContent>
                                <CardActions>
                                    <Button
                                    onClick={()=> window.open(tier.href, "_blank")}
                                    fullWidth
                                    variant={tier.buttonVariant}
                                    color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item md={2}></Grid>
                    {sbot.map((bot) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={bot.title} xs={12} sm={bot.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={bot.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={bot.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                </CardContent>
                                <CardActions>
                                    <Button
                                    onClick={()=> window.open(bot.href, "_blank")}
                                    fullWidth
                                    variant={bot.buttonVariant}
                                    color="primary">
                                        {bot.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br></br>
                <br></br>
            <br></br>
            <br></br>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            </Container>
        </React.Fragment>
    );
}
