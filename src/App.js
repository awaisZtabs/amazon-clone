import './App.css';
import React, { useEffect } from "react";

import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login";
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


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
         <Route path="/login" element={[ <Login/>]} />
           <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
