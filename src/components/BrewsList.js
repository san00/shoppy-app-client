import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Brew from "./Brew";

import Flex from "../styles/Flex";

function BrewsList({ brandId }) {
  const context = useContext(CartContext);

  const displayResults = context.cart.products ? (
    context.cart.products.map((brew) => {
      if (brew.brand.id === brandId) {
        return <Brew brew={brew} key={brew.id} />;
      }
    })
  ) : (
    <h2>'Unable to load brews'</h2>
  );
  return<Flex justifyCenter>{displayResults}</Flex>;
}

export default BrewsList;
