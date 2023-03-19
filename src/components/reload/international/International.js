import * as React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import RadioGroup from '@mui/material/RadioGroup';
import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import logoPaypal from '../../../images/logoPaypal.png';
import logoStripe from '../../../images/logo-stripe_0.jpg';
import { Fragment } from 'react';
import CardMediaMoney from './CardMediaMoney';
import { Image } from '@mui/icons-material';
import totalImg from '../../../images/totalMonedas.png';
import CardMediaTotalMoneyToPay from './CardMediaTotalMoneyToPay';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
  },
  heroContent: {
    padding: theme.spacing(0, 0, 0)
  },
  media: {
    height: 180
  }
}));

const client = [
  {
    title: 'Paypal',
    buttonText: 'Pagar con paypal',
    buttonVariant: 'contained',
    href: 'https://mega.nz/file/fAwg2JhL#5xOJ16GCpME6R-6SOGjY10ZZPmO6yyPJ4bluCCGg5js',
    image: logoPaypal
  },
  {
    title: 'stripe',
    buttonText: 'Pagar con Stripe',
    buttonVariant: 'contained',
    href: 'https://mega.nz/file/fAwg2JhL#5xOJ16GCpME6R-6SOGjY10ZZPmO6yyPJ4bluCCGg5js',
    image: logoStripe
  }
];

const values = [
  { value: '1000', label: '1000 Silk' },
  { value: '3000', label: '3000 Silk' },
  { value: '6000', label: '6000 Silk' },
  { value: '10000', label: '10000 Silk' },
  { value: '15000', label: '15000 Silk' },
  { value: '20000', label: '20000 Silk' }
];

export default function International({
  setTotalAmount,
  setTotalSilk,
  setUserCtx,
  userCtx,
  makePayment,
  totalAmount,
  totalSilk,
  setLoad
}) {
  const classes = useStyles();
  const { t } = useTranslation();
  const handleChangeAmount = async (event) => {
    const silk = event.target.value;
    if (silk === '1000') {
      const amount = 5;
      setTotalAmount(amount);
      setTotalSilk(1000);
      setUserCtx({ ...userCtx, amount: amount, silkPay: 1000 });
    }
    if (silk === '3000') {
      const amount = 12;
      setTotalAmount(amount);
      setTotalSilk(3000);
      setUserCtx({ ...userCtx, amount: amount, silkPay: 3000 });
    }
    if (silk === '6000') {
      const amount = 20;
      setTotalAmount(amount);
      setTotalSilk(6000);
      setUserCtx({ ...userCtx, amount: amount, silkPay: 6000 });
    }
    if (silk === '10000') {
      const amount = 35;
      setTotalAmount(amount);
      setTotalSilk(10000);
      setUserCtx({ ...userCtx, amount: amount, silkPay: 10000 });
    }
    if (silk === '15000') {
      const amount = 42;
      setTotalAmount(amount);
      setTotalSilk(15000);
      setUserCtx({ ...userCtx, amount: amount, silkPay: 15000 });
    }
    if (silk === '20000') {
      const amount = 49;
      setTotalAmount(amount);
      setTotalSilk(20000);
      setUserCtx({ ...userCtx, amount: amount, silkPay: 20000 });
    }
  };

  const handlePaymentClick = async (event) => {
    const paymentDesc = event.target.innerText;
    setLoad(true);
    const redirectPaypal = await makePayment(totalAmount, totalSilk, paymentDesc);
    if (!redirectPaypal) {
      setLoad(false);
      return;
    }
    window.open(redirectPaypal, '_blank');
    setLoad(false);
  };

  return (
    <Fragment>
      <Grid container spacing={5} direction="row" alignItems="center" justify="center">
        <Grid item xs={1} sm={2} md={2} />
        <Grid item xs={10} sm={6} md={6}>
          <Card>
            <CardContent>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{t('app.payment.title')}</FormLabel>
                <RadioGroup
                  defaultValue={'1000'}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  {values.map((detail, index) => (
                    <CardMediaMoney
                      key={index}
                      handleChangeAmount={handleChangeAmount}
                      detailsValue={detail.value}
                      detailsLabel={detail.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} sm={2} md={2} />
      </Grid>
      <Grid container spacing={5} alignItems="flex-end">
        <Grid item xs={1} sm={5} md={5} />
        <Grid item xs={10} sm={4} md={2}>
          <CardMediaTotalMoneyToPay
            textSilk={t('app.payment.totalSilk')}
            quantitySilk={totalSilk}
            textValue={t('app.payment.totalAmount')}
            amount={totalAmount}
          />
        </Grid>
        <Grid item xs={1} sm={5} md={5} />
      </Grid>
      <br />
      <Grid container spacing={5} alignItems="flex-end">
        <Grid item xs={12} sm={6} md={2}></Grid>
        {client.map((tier) => (
          <Grid item key={tier.title} xs={12} sm={tier.title === 'Paypal' ? 12 : 6} md={4}>
            <Card>
              <CardMedia className={classes.media} image={tier.image} title={tier.title} />
              <CardContent></CardContent>
              <CardActions>
                <Button onClick={handlePaymentClick} fullWidth variant={tier.buttonVariant} color="primary">
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <Grid item xs={12} sm={6} md={4}></Grid>
    </Fragment>
  );
}
