import { UseFetchCreateOrderPayment } from '../helpers/fetchPayment'
//import { UseFetchGetPesoToDollar } from '../helpers/fetchCmfChile'
import {useContext, useState} from 'react'
import { UserContext } from './UserContext'

export const useReload = (history) => {
    const { userCtx, setUserCtx } = useContext(UserContext)
    const [load, setLoad] = useState(false)

    const getDollarValueToPeso = async () => {
        //const { Dolares } = await UseFetchGetPesoToDollar();
        //const { Valor : pesos } = Dolares[0];
        return 804 //pesos
    }

    const makePayment = async (amount, silk, paymentDesc) => {
        if (!userCtx.username) {
            history.push('/SingIn')
            return
        }
        if (paymentDesc === 'PAGAR CON PAYPAL') {
            const result = await UseFetchCreateOrderPayment(userCtx.username, amount, silk)
            return result.href
        }
        if (paymentDesc === 'PAGAR CON MERCADOPAGO (CHILE)') {
            history.push('/MercadoPago')
            return
        }
    }

    const SilkRatio = [
        {
            title: 'eleccioón de silk 100 = 100$ a 1000 = 1000$',
            max: 1000,
            min: 100,
            defaultValue: 100,
            mark: [
                {
                    value: 0,
                },
                {
                    value: 100,
                },
                {
                    value: 200,
                },
                {
                    value: 300,
                },
                {
                    value: 400,
                },
                {
                    value: 500,
                },
                {
                    value: 600,
                },
                {
                    value: 700,
                },
                {
                    value: 800,
                },
                {
                    value: 900,
                }
            ]
        },
        {
            title: 'eleccioón de silk 1000 = 1000$ a 10000 = 10000$',
            max: 10000,
            min: 1000,
            defaultValue: 1000,
            mark: [
                {
                    value: 0,
                },
                {
                    value: 1000,
                },
                {
                    value: 2000,
                },
                {
                    value: 3000,
                },
                {
                    value: 4000,
                },
                {
                    value: 5000,
                },
                {
                    value: 6000,
                },
                {
                    value: 7000,
                },
                {
                    value: 8000,
                },
                {
                    value: 9000,
                }
            ]
        },
    ]
    return { makePayment, load, setLoad, SilkRatio, setUserCtx, userCtx, getDollarValueToPeso }
}
