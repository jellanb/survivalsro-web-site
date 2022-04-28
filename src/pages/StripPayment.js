import React, { Fragment, useContext, useEffect, useState } from 'react';
import CheckoutForm from '../components/reload/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { UserContext } from '../hooks/UserContext';
import { UseFetchCreateOrderPaymentStripe } from '../helpers/fetchPayment';
import Grid from '@material-ui/core/Grid';
import BackDropPayment from '../components/common/progress/BackDropPayment';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

export default function StripPayment(history) {
  const [clientSecret, setClientSecret] = useState('');
  const { userCtx, setUserCtx } = useContext(UserContext);
  const [load, setLoad] = useState(true);
  const amount = userCtx.silkPay / 200;
  useEffect(async () => {
    if (!userCtx.username) {
      history.push('/SingIn');
      return;
    }
    // Create PaymentIntent as soon as the page loads
    const result = await UseFetchCreateOrderPaymentStripe(userCtx.username, amount, userCtx.silkPay);
    setClientSecret(result.clientSecret);
    setLoad(false);
  }, []);

  const appearance = {
    theme: 'stripe'
  };
  const options = {
    clientSecret,
    appearance
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xl={3} lg={3} xs={12}></Grid>
        <Grid item xl={6} lg={6} xs={12} style={{ display: 'grid', justifyContent: 'center' }}>
          <br />
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
          <br />
        </Grid>
        <Grid item xl={3} lg={3} xs={12}></Grid>
      </Grid>
      <BackDropPayment open={load} />
    </Fragment>
  );
}
