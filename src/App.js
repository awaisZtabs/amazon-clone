import './App.css';
import React, { useEffect } from "react";

import Header from './components/Header';
import Home from './components/Home';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Login from "./components/Login";
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51JwRyJA6HGnPCEGPFfQHclKP3sOh2CaSEnCcigt2qjhRvfhCpttitr8JwkYvIeeWBVZW4EYW6ys776qTFvzwbB3400FvrCvA8s"
);
function App() {
  const [{ user }, dispatch] = useStateValue();
    useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
       dispatch({ type: 'SET_USER', user: authUser });
      } else {
         dispatch({ type: 'SET_USER', user: null });
      }
    });
  }, []);

  return (
    <Router >
      <div className="App">
        <Routes>
        <Route path="/checkout" element={[<Header />, <Checkout/>]} />
        <Route path="/orders" element={[<Header />, <Orders/>]} />
        <Route path="/login" element={[ <Login/>]} />
        <Route path="/payment" element={[ <Elements stripe= {promise}> <Payment/> </Elements>]} />
        <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
