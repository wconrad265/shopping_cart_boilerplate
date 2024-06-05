import Product from "./Product.tsx";
import { Product as ProductType } from "../Types/Product";

interface PropTypes {
  products: ProductType[];
}

const ProductListing = ({ products }: PropTypes) => {
  const handleProductListCreation = () => {
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
      <ul className="product-list">{handleProductListCreation()}</ul>
    </div>
  );
};

export default ProductListing;
