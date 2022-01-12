import {React, useEffect} from 'react'
import Footer from '../components/Footer';
import { CART_EMPTY } from '../redux/constants/cartConstants';
import { useSelector, useDispatch } from 'react-redux'
import  './ConfirmationScreen.css'
import { Link} from 'react-router-dom';
import { emptyCart } from "../redux/actions/cartActions";

export default function Confirmation() {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;


      

      useEffect(()=> {

        dispatch(emptyCart());
        
        } ,[])

    return (

        <>
        <div className="confirm">
            <p>Thank you for shopping with us</p>
             <Link to="/">Go Back</Link>

            
        </div>

        
        </>
    )
}
