import { useEffect, useState } from "react";
import { Product as ProductType } from "../Types/Product";
import { mockProducts } from "../../mockData/data.ts";
import Product from "./Product.tsx";

const ProductListing = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts((prevState) => prevState.concat(mockProducts));
  }, []);

  const createProductList = () => {
    return (
      <>
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </>
    );
  };

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">{createProductList()}</ul>
    </div>
  );
};

export default ProductListing;
