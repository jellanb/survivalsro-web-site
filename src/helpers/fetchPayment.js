export const UseFetchCreateOrderPayment = async (username, amount, silk) => {
  const url = `${process.env.REACT_APP_API_URL}/users/create-payment-paypal?username=${username}&amount=${amount}&silkQuantity=${silk}`;
  return (await fetch(url, { mode: 'cors', method: 'GET' })).json();
};

export const UseFetchCreateOrderPaymentStripe = async (username, amount, silk) => {
  const url = `${process.env.REACT_APP_API_URL}/users/create-payment-stripe?username=${username}&amount=${amount}&silkQuantity=${silk}`;
  return (await fetch(url, { mode: 'cors', method: 'POST' })).json();
};

export const UseFetchRollBackOrderPaymentStripe = async (username, silk) => {
  const url = `${process.env.REACT_APP_API_URL}/users/rollback-payment-stripe?username=${username}&silkQuantity=${silk}`;
  return (await fetch(url, { mode: 'cors', method: 'POST' })).json();
};
