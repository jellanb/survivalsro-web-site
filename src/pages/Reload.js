import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import SelectionReload from '../components/SelectionReload';
import Typography from "@material-ui/core/Typography";
import logoPaypal from '../images/logoPaypal.png';
import logoMercadoPago from '../images/logo-mercadopago.png';
import CardMedia from '@material-ui/core/CardMedia';
import { useReload } from "../hooks/useReload";
import imagenFondo from '../images/fondoReload.jpg';
import BackDropPayment from '../components/common/BackDropPayment'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    backgroundImage:  `url(${imagenFondo})`,
    backgroundSize: 'cover',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  heroContent: {
    padding: theme.spacing(0, 0, 0),
  },
  media: {
    height: 140,
  },
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
    title: 'MercadoPago',
    buttonText: 'Pagar con MercadoPago (Chile)',
    buttonVariant: 'contained',
    href: 'https://mega.nz/file/fAwg2JhL#5xOJ16GCpME6R-6SOGjY10ZZPmO6yyPJ4bluCCGg5js',
    image: logoMercadoPago
  }
];

export default function Reload({history}) {
  const classes = useStyles();
  const [totalSilk, setTotalSilk] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const { makePayment, load, setLoad, SilkRatio, setUserCtx, userCtx, getDollarValueToPeso } = useReload(history)

  const handleChangeAmount = async (quantity) => {
    setLoad(true);
    const value = parseInt(await getDollarValueToPeso()) + 1;
    setTotalAmount(quantity/200)
    setTotalSilk(quantity)
    setUserCtx({...userCtx, amount: quantity/200 * value, silkPay: quantity})
    setLoad(false);
  }


  const handlePaymentClick = async (event) => {
    const paymentDesc = event.target.innerText
    setLoad(true)
      const redirectPaypal = await makePayment(totalAmount, totalSilk, paymentDesc)
      if(!redirectPaypal){
        setLoad(false)
        return
      }
      window.open(redirectPaypal, "_blank")
    setLoad(false)
  }

  return (
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="xl" component="main" className={classes.main}>
            {SilkRatio.map((selection) => (
                <SelectionReload
                    title={selection.title}
                    max={selection.max}
                    min={selection.min}
                    defaultValue={selection.defaultValue}
                    mark={selection.mark}
                    handleChange={handleChangeAmount}
                />
            ))}
            <Grid>
              <Grid item xs={2} sm={4} md={2}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom>Total Silk : {totalSilk}</Typography>
                    <Typography gutterBottom>Total Silk a pagar : {totalAmount} $</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={5} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={2}></Grid>
              {client.map((tier) => (
                  <Grid item key={tier.title} xs={12} sm={tier.title === 'Paypal' ? 12 : 6} md={4}>
                    <Card>
                      <CardMedia
                          className={classes.media}
                          image={tier.image}
                          title="Paypal"
                      />
                      <CardContent>
                      </CardContent>
                      <CardActions>
                        <Button
                            onClick={handlePaymentClick}
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
            <br/>
            <Grid item xs={12} sm={6} md={4}></Grid>
          </Container>
        <BackDropPayment open={load} />
      </React.Fragment>
  )
}
