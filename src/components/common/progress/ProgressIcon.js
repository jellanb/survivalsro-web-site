import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import iconMain from "../../../images/logocentro5.png";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1,
        backgroundColor: 'transparent',
    },
    iconMain: {
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(30),
            height: theme.spacing(8),
            maxWidth: 345,
        },
        backgroundColor: 'transparent',
    },
    cardMediaIconMain: {
        backgroundColor: 'transparent',
    }
}));

function TypographyDemo() {
    const classes = useStyles();
    return (
        <Typography variant="h6" className={classes.title}>
            <Card className={classes.iconMain}>
                <CardMedia className={classes.cardMediaIconMain} image={iconMain} />
            </Card>
        </Typography>
    );
}

export default function ProgressIcon() {
    return (
            <Skeleton component={TypographyDemo}
                      sx={{ bgcolor: 'grey.900' }}
                      variant="rectangular"
                      width={210}
                      height={118}
            />
    );
}
