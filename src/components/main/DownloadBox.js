import React, { Fragment } from 'react';
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import imagenDownload from "../../images/sroDownload.png";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            width: theme.spacing(200),
        },
    },
    mediaDownload: {
        height: 240,
    },
    Card: {
        maxWidth: 345,
        backgroundColor: 'transparent',
        paddingRight: '10%'
    },
}));

export default function DownloadBox () {
    const classes = useStyles();
    return (
        <Fragment>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <div className={classes.root}>
                    <Card className={classes.Card} style={{ border: "none", boxShadow: "none" }}>
                        <CardActionArea>
                            <Link to='/download' >
                                <CardMedia
                                    className={classes.mediaDownload}
                                    image={imagenDownload}
                                />
                            </Link>
                        </CardActionArea>
                    </Card>
                </div>
            </Box>
        </Fragment>
        );
}
