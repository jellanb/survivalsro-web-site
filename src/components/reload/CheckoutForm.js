import React, { useEffect, useState, Fragment, useContext } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import logo from '../../images/stripeLogo.png';
import '../../stripe.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../hooks/UserContext';
import { addSilkAfterPayment } from '../../helpers/fetchUsers';
import { UseFetchRollBackOrderPaymentStripe } from '../../helpers/fetchPayment';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: theme.spacing(200)
    }
  },
  mediaDownload: {
    height: 140
  },
  Card: {
    maxWidth: 345,
    backgroundColor: 'transparent',
    paddingRight: '10%',
    border: 0
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CheckoutForm(history) {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const { userCtx, setUserCtx } = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
    console.log(userCtx.silkPay);
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    addSilkAfterPayment(userCtx.username, userCtx.silkPay);
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://survivalsro.com'
      }
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
      setUserCtx({ ...userCtx, description: 'payment refused' });
      setOpen(true);
      UseFetchRollBackOrderPaymentStripe(userCtx.username, userCtx.silkPay);
    } else {
      setMessage('An unexpected error occured.');
      setUserCtx({ ...userCtx, description: 'payment refused' });
      setOpen(true);
      UseFetchRollBackOrderPaymentStripe(userCtx.username, userCtx.silkPay);
    }

    setIsLoading(false);
    history.push('/SingIn');
    return;
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" alignItems="center">
        <div className={classes.root}>
          <Card className={classes.Card} style={{ border: 'none', boxShadow: 'none' }}>
            <CardActionArea>
              <CardMedia className={classes.mediaDownload} image={logo} />
            </CardActionArea>
          </Card>
        </div>
      </Box>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}</span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{userCtx.description}</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <Button fullWidth variant="contained" color="primary" className={classes.submit}>
                Aceptar
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </Fragment>
  );
}
