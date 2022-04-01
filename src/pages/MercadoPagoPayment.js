import React, { Fragment } from 'react'
import CheckoutMercadoPago from '../components/reload/CheckoutMercadoPago';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";

import '../App.module.css'

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundSize: 'cover',
        padding: theme.spacing(4, 3),
        display: 'grid',
        paddingTop: theme.spacing(15)
    }
}));

export default function  MercadoPagoPayment({history}) {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl" component="main" className={classes.main}>
                <CheckoutMercadoPago history={history}/>
            </Container>
        </Fragment>
    )
}
