import React, {useState} from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import  './ShippingAddressScreen.css'
import {useDispatch, useSelector} from 'react-redux'
import { saveBillingAddress, saveShippingAddress } from '../redux/actions/cartActions';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../components/Footer';


export default function ShippingAddressScreen() {

    const cart = useSelector(state => state.cart);
    const {billingAddress, shippingAddress} = cart;


    const  [fullName, setFullName] = useState(billingAddress.fullName);
    const  [address, setAddress] = useState(billingAddress.address);
    const  [city, setCity] = useState(billingAddress.city);
    const  [postalCode, setPostalCode] = useState(billingAddress.postalCode);
    const  [country, setCOuntry] = useState(billingAddress.country);


    const  [fullName_ship, setFullName_ship] = useState(shippingAddress.fullName_ship);
    const  [address_ship, setAddress_ship] = useState(shippingAddress.address_ship);
    const  [city_ship, setCity_ship] = useState(shippingAddress.city_ship);
    const  [postalCode_ship, setPostalCode_ship] = useState(shippingAddress.postalCode_ship);
    const  [country_ship, setCOuntry_ship] = useState(shippingAddress.country_ship);

    //INFO SHIPPING
    const navigate = useNavigate();

    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(saveBillingAddress({fullName,address,city,postalCode,country}));
        dispatch(saveShippingAddress({fullName_ship,address_ship,city_ship,postalCode_ship,country_ship}));

        navigate('/placeorder');
        console.log(fullName);
    };

   

    return (
        <div>
            <CheckoutSteps step1 ></CheckoutSteps>
        <div className="address_forms">
            <form className="form">
               <div className= "formDiv"> <div>
                    <h2 className="title">Billing Address</h2>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter full name" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                    type="text" 
                    id="address" 
                    placeholder="Enter Address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input 
                    type="text" 
                    id="city" 
                    placeholder="Enter City" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input 
                    type="text" 
                    id="postalCode" 
                    placeholder="Enter postal Code" 
                    value={postalCode} 
                    onChange={(e) => setPostalCode(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="country">Country</label>
                    <input 
                    type="text" 
                    id="country" 
                    placeholder="Enter Country" 
                    value={country} 
                    onChange={(e) => setCOuntry(e.target.value)} 
                    required
                    ></input>
                </div>

                 </div>

                
            </form>



            <form className="form_ship">
               <div className= "formDiv"> <div>
                    <h2 className="title">Shipping Address</h2>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter full name" 
                    value={fullName_ship} 
                    onChange={(e) => setFullName_ship(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                    type="text" 
                    id="address" 
                    placeholder="Enter Address" 
                    value={address_ship} 
                    onChange={(e) => setAddress_ship(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input 
                    type="text" 
                    id="city" 
                    placeholder="Enter City" 
                    value={city_ship} 
                    onChange={(e) => setCity_ship(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input 
                    type="text" 
                    id="postalCode" 
                    placeholder="Enter postal Code" 
                    value={postalCode_ship} 
                    onChange={(e) => setPostalCode_ship(e.target.value)} 
                    required
                    ></input>
                </div>

                <div>
                    <label htmlFor="country">Country</label>
                    <input 
                    type="text" 
                    id="country" 
                    placeholder="Enter Country" 
                    value={country_ship} 
                    onChange={(e) => setCOuntry_ship(e.target.value)} 
                    required
                    ></input>
                </div>

                 </div>

            </form>
            
        </div>
            
        <div className="contin">
                    <label/>
                    <button className="primary" type="submit" onClick={submitHandler}>Continue</button> 
                </div> 

            
        </div>

        
    )
}
