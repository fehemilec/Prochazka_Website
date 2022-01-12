import React from 'react'
import  './CheckoutSteps.css'


export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Shipping</div>
            <div className={props.step2 ? 'active1' : 'empty'}>Place Order</div>
 
        </div>
    )
}
