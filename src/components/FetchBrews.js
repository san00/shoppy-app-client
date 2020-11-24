import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BrewsList from "./BrewsList";
import { CartContext } from "./CartContext";

function FetchBrews(props) {
  const [brewQuery, setBrewQuery] = useState([]);
  const setProducts = useContext(CartContext).setProducts;

  const brewsUri = "http://localhost:1337/Brews";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(brewsUri, {
        data: {
          query: `query {
                brand(id:"${props.match.params.brandId}") {
                  _id
                  name
                  brews {
                    _id
                    name
                    image {
                      url
                    }
                    price
                  }
                }
              }`,
        },
      });
      setBrewQuery(res.data);
      setProducts(res.data);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <BrewsList brandId={props.match.params.brandId} />
    </div>
  );
}

export default FetchBrews;
