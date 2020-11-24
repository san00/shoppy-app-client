import React from "react";

function CartItem({ productToAdd, quantity, productTotal }) {
  return (
    <React.Fragment>
      <p>
        {productToAdd.name} x {quantity} @ {productTotal}
      </p>
    </React.Fragment>
  );
}

export default CartItem;
