import {useContext, useEffect, useState} from "react";
import useScript from "./useScript";
import { formConfig } from "../helpers/MercadoPagoFormConfig.js";
import { UserContext } from "./UserContext";
import dotenv from 'dotenv';
import { addSilkAfterPayment } from '../helpers/fetchUsers';
dotenv.config();

export const useCheckOutMercadoPago = (history) => {
    const [load, setLoad] = useState(false)
    const { userCtx, setUserCtx } = useContext(UserContext)
    function paymentSuccess() {
        addSilkAfterPayment(userCtx.username, userCtx.silkPay);
        setUserCtx({...userCtx, silk: userCtx.silk + userCtx.silkPay});
        history.push('/');
    }
    return {
        paymentSuccess,
        setLoad,
        load
    }
}

export function useMercadoPagoApi() {
    const [resultPayment, setResultPayment] = useState(undefined);
    const { userCtx } = useContext(UserContext);
    console.log(userCtx);
    const { MercadoPago } = useScript(
        process.env.REACT_APP_URL_API_MP,
        "MercadoPago"
    );

    const amount = userCtx.amount.toString();
    useEffect(() => {
        if (MercadoPago) {
            const mp = new MercadoPago(process.env.REACT_APP_PUBLIC_KEY_MP);
            const cardForm = mp.cardForm({
                amount: amount,
                autoMount: true,
                form: formConfig,
                callbacks: {
                    onFormMounted: (error) => {
                        if (error)
                            return console.warn(
                                "Form Mounted handling error: ",
                                error
                            );
                    },

                    onSubmit: (event) => {
                        event.preventDefault();

                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            amount,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = cardForm.getCardFormData();

                        fetch(
                            process.env.REACT_APP_URL_SURVIVALSRO_SERVER,
                            {
                                // entry point backend
                                method: "POST",
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Request-Method":
                                        "GET, POST, DELETE, PUT, OPTIONS",
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    token,
                                    issuer_id,
                                    payment_method_id,
                                    transaction_amount: userCtx.buySilkQuantity,
                                    installments: Number(installments),
                                    description: "Silk",
                                    payer: {
                                        email,
                                        identification: {
                                            type: identificationType,
                                            number: identificationNumber,
                                        },
                                    },
                                }),
                            }
                        )
                            .then((res) => res.json())
                            .then((data) => setResultPayment(data))
                            .catch((err) => {
                                setResultPayment(err);
                            });
                    },
                    onFetching: (resource) => {
                        // Animate progress bar
                        const progressBar =
                            document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");

                        return () => {
                            progressBar.setAttribute("value", "0");
                        };
                    },
                },
            });
        }
    }, [MercadoPago]);

    return resultPayment;
}
