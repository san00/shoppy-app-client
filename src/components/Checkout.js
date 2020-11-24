import React, { useState } from 'react'
import Heading from '../styles/Heading';
import Cart from './Cart';
import {CardElement} from '@stripe/react-stripe-js'

function Checkout() {
    const [signinDetails, setSigninDetails] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSigninDetails({ ...signinDetails, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
      
      return (
        <section>
         
            <Heading h2>Checkout</Heading>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Name"
              onChange={handleChange}
            ></input>
            <label>Username</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Confirmation email address"
              onChange={handleChange}
            ></input>
            <label>Email address</label>{" "}
            <input
              name="address"
              type="address"
              id="address"
              placeholder="Shipping address"
              onChange={handleChange}
            ></input>
            <label>Password</label>
            <input
              name="city"
              type="city"
              id="city"
              placeholder="Shipping city"
              onChange={handleChange}
            ></input>
            <label>city</label>
            <input
              name="postcode"
              type="postcode"
              id="postcode"
              placeholder="postcode"
              onChange={handleChange}
            ></input>
            <label>post code</label>
            <div><CardElement/></div>
            <div>
              <input type="submit" id="submit" value="pay with card"></input>
              <label>Pay with card</label>
            </div>           
          </form>
          <Cart/>
        </section>
      );
}

export default Checkout
