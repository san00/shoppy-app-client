import React, { useContext } from "react";
import { CartContext } from "./CartContext";

import Text from "../styles/Text";
import Image from "../styles/Image";
import Card from "../styles/Card";
import Heading from "../styles/Heading";
import Button from "../styles/Button"
import Flex from "../styles/Flex";

function Brew({ brew }) {
  const { setCartIds, setRemoveFromCartIds } = useContext(CartContext);

  return (
    <Card>
      <Image
        src={`http://localhost:1337${brew.image.url}`}
        alt="brew logo"
      ></Image>
      <Heading h5>{brew.name}</Heading>
      <Text>{brew.description}</Text>
      <Text>{brew.price}</Text>
      <Flex>
      <Button small
        onClick={() => {
          setCartIds(brew.id);
        }}
      >
       Add to cart
      </Button >
      <Button secondary small
        onClick={() => {
          setRemoveFromCartIds(brew.id);
        }}
      >
       Remove
      </Button>
      </Flex>
    </Card>
  );
}

export default Brew;
