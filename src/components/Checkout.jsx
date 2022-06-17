import React from "react";
import "../checkout.css";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
        </Link>

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;