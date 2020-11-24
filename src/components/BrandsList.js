import React, { useState } from "react";
import Brand from "./Brand";

import Flex from "../styles/Flex";
import Heading from "../styles/Heading";

function BrandsList({ query }) {
  const [activeBrand, setActiveBrand] = useState("");

  const displayResults = query ? (
    query.map((brand) => {
      if (brand.brews[0].name === activeBrand || activeBrand === "") {
        return (
          <Brand brand={brand} key={brand.id} setActiveBrand={setActiveBrand} />
        );
      }
    })
  ) : (
    <h2>'Unable to load brands'</h2>
  );
  return (
    <section>
      <Flex justifyCenter>
        <Heading h3>Brands we stock</Heading>
      </Flex>
      <Flex justifyCenter>{displayResults}</Flex>
    </section>
  );
}

export default BrandsList;
