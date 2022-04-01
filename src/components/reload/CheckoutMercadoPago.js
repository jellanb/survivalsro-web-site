import React, { useState, Fragment } from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {useCheckOutMercadoPago, useMercadoPagoApi} from "../../hooks/useCheckOutMercadoPago";
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    main: {
        height: 550,
    },
}));

const INITIAL_STATE = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
};

export default function MercadoPagoForm({history}) {
    const classes = useStyles();
    const [state, setState] = useState(INITIAL_STATE);
    const resultPayment = useMercadoPagoApi();
    const { paymentSuccess } = useCheckOutMercadoPago(history);

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.dataset.name || e.target.name]: e.target.value,
        });
    };

    const handleInputFocus = (e) => {
        setState({ ...state, focus: e.target.dataset.name || e.target.name });
    };

    return (
        <Fragment className="container">
            <Card
                cvc={state.cvc}
                expiry={state.cardExpirationMonth + state.cardExpirationYear}
                name={state.cardholderName}
                number={state.cardNumber}
                focused={state.focus}
                brand={state.issuer}
            />
            <Container maxWidth="xl" component="main" className={classes.main}>
                <form id="form-checkout">
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <input
                                    type="tel"
                                    name="cardNumber"
                                    id="form-checkout__cardNumber"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={2}>
                            <div className="form-control">
                            <input
                                type="tel"
                                name="cardExpirationMonth"
                                id="form-checkout__cardExpirationMonth"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <div className="form-control">
                                <input
                                    type="tel"
                                    name="cardExpirationYear"
                                    id="form-checkout__cardExpirationYear"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <div className="form-control">
                                <input
                                    type="tel"
                                    name="cvc"
                                    id="form-checkout__securityCode"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="cardholderName"
                                    id="form-checkout__cardholderName"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <input
                                    type="email"
                                    name="cardholderEmail"
                                    id="form-checkout__cardholderEmail"
                                    onFocus={handleInputFocus}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <select name="issuer" id="form-checkout__issuer"/>
                                <select name="identificationType" id="form-checkout__identificationType" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="identificationNumber"
                                    id="form-checkout__identificationNumber"
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <select name="installments" id="form-checkout__installments" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <BootstrapButton
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    id="form-checkout__submit"
                                    disableRipple className={classes.margin}>
                                    Pagar
                                </BootstrapButton>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={3}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="form-control">
                                <progress value="0" className="progress-bar">
                                    Cargando...
                                </progress>
                            </div>
                        </Grid>
                    </Grid>
            </form>
            {resultPayment && paymentSuccess()}
            </Container>
        </Fragment>
    );
}
