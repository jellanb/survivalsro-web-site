import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useReload } from '../hooks/useReload';
import BackDropPayment from '../components/common/progress/BackDropPayment';
import International from '../components/reload/international/International';
import imagenFondo from '../images/fondoReload.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${imagenFondo})`,
    backgroundSize: 'cover'
  }
}));
export default function Reload({ history }) {
  const classes = useStyles();
  const [totalSilk, setTotalSilk] = useState(1000);
  const [totalAmount, setTotalAmount] = useState(5);
  const { makePayment, load, setLoad, setUserCtx, userCtx, getDollarValueToPeso } = useReload(history);

  useEffect(() => {
    setUserCtx({ ...userCtx, amount: 5 });
  }, []);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl" component="main" className={classes.main}>
        <br />
        <br />
        <Grid container spacing={1}>
          <Grid item xl={12} lg={12} xs={12}>
            <International
              setLoad={setLoad}
              getDollarValueToPeso={getDollarValueToPeso}
              setTotalAmount={setTotalAmount}
              setTotalSilk={setTotalSilk}
              setUserCtx={setUserCtx}
              userCtx={userCtx}
              makePayment={makePayment}
              totalAmount={totalAmount}
              totalSilk={totalSilk}
              history={history}
            />
          </Grid>
        </Grid>
      </Container>
      <BackDropPayment open={load} />
    </div>
  );
}
