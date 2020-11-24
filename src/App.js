import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyle from "./styles/Global";
import "./App.css";
import Signin from "./components/Signin";
import Checkout from "./components/Checkout";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import FetchBrands from "./components/FetchBrands";
import FetchBrews from "./components/FetchBrews";
import CartContextProvider from "./components/CartContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PageHeader from "./components/PageHeader";

const stripePromise = loadStripe(
  "pk_test_51HT7lKFEHYfVhrmpZNS7TvpspVyIcHrQU8Qk22zTHe8D77YBnnglkCUYnuC5ZJnGX1RkGNBztRMXsm0FrfKgCpGs00QriiP3dT"
);

function App() {
  return (
    <CartContextProvider>
      <Router>
        <GlobalStyle />
        <PageHeader></PageHeader>
        <Navbar />
        <Route path="/" exact component={FetchBrands} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Elements stripe={stripePromise}>
          <Route path="/checkout" component={Checkout} />
        </Elements>
        <Route path="/brews/:brandId" component={FetchBrews} />
      </Router>
    </CartContextProvider>
  );
}

export default App;
