import React, {useState} from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { cartReducer } from '../redux/reducers/cartReducer'
import { useSelector } from 'react-redux'
import CartItem from "../components/CartItemOrder";
import CartItemOrder from "../components/CartItemOrder";
import "./CartScreen.css";
import StripeCheckout from 'react-stripe-checkout'


import { Link , useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';

import  './PlaceOrderScreen.css'


export default function PlaceOrderScreen() {

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    const navigate = useNavigate();


    const [ema, setEma] = useState({
        name:"fehmi",
        lastname:"leci",
        email:"femo@live.it",
        message:"Hello simple msg"
});

    const getCartSubTotal = () => {

        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);

      };

 

      const getCartCount = () => {
        console.log(cartItems.qty);
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
      };


      const makePayment = token => {


        const body_1 = {

            ema, cartItems
          }

        const body = {
    
          token, cartItems, cart
        }

        const headers = {
          "Content-Type" : "application/json"
        }
    
        return fetch('http://localhost:5000/payment_card' , {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        }).then( response => {
          console.log("Response ", response)
          const {status} = response;

          if(status === 200){

            navigate('/');
            console.log("You paid fucker, Status ", status)
            console.log("Token ", token.id)

            return fetch('http://localhost:5000/api/forma' , {

          method: "POST",
      headers,
      body: JSON.stringify(body_1)
        }).then(response => {
          
          console.log(response)
        }).catch(error => console.log(error))


          }
    
        })
        .catch(error => console.log(error))
        
      }


    return (
        
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
           





            <div className="cartscreen">
        <div className="cartscreen__left">
        <div className="row top">
                <div className="col-2">
                    <ul>
                        
                            <div className="ship_info">
                                <h2>Billing Address</h2>
                                <p>
                                    <span className="fullname"><strong>Name: </strong>{cart.billingAddress.fullName}</span><br />
                                    <span className="address"><strong>Address: </strong>{cart.billingAddress.address},&nbsp;
                                    {cart.billingAddress.city},&nbsp;{cart.billingAddress.postalCode},&nbsp;
                                    {cart.billingAddress.country}</span>

                                </p>
                            </div>
                        

                        
                            <div className="ship_info">
                                <h2>Shipping Address</h2>
                                <p>
                                    <span className="fullname"><strong>Name: </strong>{cart.shippingAddress.fullName_ship}</span><br />
                                    <span className="address"><strong>Address: </strong>{cart.shippingAddress.address_ship},&nbsp;
                                    {cart.shippingAddress.city_ship},&nbsp;{cart.shippingAddress.postalCode_ship},&nbsp;
                                    {cart.shippingAddress.country_ship}</span>

                                </p>
                            </div>
                       


                        
                            <div className="paym_meth">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method: </strong>{cart.paymentMethod}

                                </p>
                            </div>
                        

                        
                            <div className="card card-body">
                                <h2>Order Items</h2>


             
                  {cartItems.map((item) => (
                     <CartItemOrder
                     key={item.product}
                     item={item}
                   />
                  ))}
                
                                


                            </div>
                        
                        </ul>
                    <div className="col-1">

                    </div>
                </div>
            </div>
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
          <StripeCheckout 
        stripeKey="pk_test_51KG4qlEJlYE6AglXN3kXqFDvEPL5B9PZDxeZX6JmgsXYzHtxI8olvw9rZhbVqwvWD4CUsJLn79CaH14mwenxsqSe00cd34mY1y" 
        token= {makePayment}
        name="Buy React"
        amount={cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2) * 100}
        >
          <button className="btn-large blue">Buy React man</button>
        </StripeCheckout>
          </div>
        </div>
      </div>



      <Footer />



        </div>
    )
}
