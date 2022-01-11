import React, {useState} from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import  './PaymentMethodScreen.css'
import { savePaymentMethod, saveBillingAddress } from '../redux/actions/cartActions';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";


export default function PaymentMethodScreen() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));

        navigate('/placeorder');
    }


    const cart = useSelector(state => state.cart);
    const {billingAddress} = cart;

    const  [fullName, setFullName] = useState(billingAddress.fullName);

    // {fullname} can be used to fetch data stored in browser local storage

    return (
        <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <form className="payform" onSubmit={submitHandler}>
        <div className="all">
          <div>
            <h1>Payment Method</h1>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="stripe">Stripe</label>
            </div>
          </div>
          <div>
            <label />
            <div className="cont-butt">
            <button className="primary" type="submit">
              Continue
            </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    )
}
