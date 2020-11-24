import React, { useState, useEffect } from "react";
import axios from "axios";
import BrandsList from "./BrandsList";

function FetchBrands() {
  const [queryBrand, setQueryBrand] = useState([]);

  const uri = 'http://localhost:1337/Brands'

  useEffect(() => {
    const fetchBrandData = async () => {
      const response = await axios.get(uri, {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`,
        },
      });
      setQueryBrand(response.data);
    };
    fetchBrandData();
  }, []);

  return (
    <div>
      <BrandsList query={queryBrand}/>
    </div>
  );
}

export default FetchBrands;
