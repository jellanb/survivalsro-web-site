import { UseFetchCreateOrderPayment, UseFetchCreateOrderPaymentStripe } from '../helpers/fetchPayment';
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

export const useReload = (history) => {
  const { userCtx, setUserCtx } = useContext(UserContext);
  const [load, setLoad] = useState(false);

  const getDollarValueToPeso = async () => {
    //const { Dolares } = await UseFetchGetPesoToDollar();
    //const { Valor : pesos } = Dolares[0];
    return 804; //pesos
  };

  const makePayment = async (amount, silk, paymentDesc) => {
    if (!userCtx.username) {
      history.push('/SingIn');
      return;
    }
    if (paymentDesc === 'PAGAR CON PAYPAL') {
      const result = await UseFetchCreateOrderPayment(userCtx.username, amount, silk);
      return result.href;
    }
    if (paymentDesc === 'PAGAR CON MERCADOPAGO (CHILE)') {
      history.push('/MercadoPago');
      return;
    }
    if (paymentDesc === 'PAGAR CON STRIPE') {
      history.push('/stripe');
      return;
    }
  };
  return { makePayment, load, setLoad, setUserCtx, userCtx, getDollarValueToPeso };
};
