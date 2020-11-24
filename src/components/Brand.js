import React from "react";

import Text from "../styles/Text";
import Heading from "../styles/Heading";
import Button from "../styles/Button";
import {
  Container,
  CardDetails,
  CardDetailsInner,
  CardImage,
  CardBkgrndImage,CardLink
} from "../styles/BrandCard";

import Beer from "../images/beer.jpg";

function Brand({ brand, setActiveBrand }) {
  return (
    <CardLink to={`/brews/${brand.id}`}>
      <Container
        onClick={() => {
          setActiveBrand(brand.brews[0].name);
        }}
      >
        <CardBkgrndImage src={Beer} alt="a glass of beer"/>
        <CardImage
          src={`http://localhost:1337${brand.image[0].url}`}
          alt="brand logo"
        ></CardImage>
        <Heading h4>{brand.name ? brand.name : "Name unavailable"}</Heading>
        <CardDetails>
          <Text textAlignLeft>
            {brand.description ? brand.description : "Description unavailable"}
          </Text>
        </CardDetails>
        <CardDetailsInner>
          <Button brands >See brews</Button>
        </CardDetailsInner>
      </Container>
    </CardLink>
  );
}

export default Brand;
