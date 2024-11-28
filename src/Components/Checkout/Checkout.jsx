import React from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { businessName, amountPaid, itemsBought } = location.state || {};
  

  return ( <div className="background20">
    <div className="checkout-container20">
      <h2>Checkout</h2>
      <p><b>Business Name:</b> {businessName}</p>
      <p><b>Amount Paid:</b> ${amountPaid}</p>
      <p><b>Items Bought:</b> {itemsBought}</p>
      <button className="pay-button20">Proceed to Payment</button>
    </div>
    </div>
  );
};

export default Checkout;