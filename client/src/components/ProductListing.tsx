import Product from "./Product.tsx";
import { Product as ProductType, NewProduct } from "../Types/Product";

interface PropTypes {
  products: ProductType[];
  onAddingProduct: (product: NewProduct) => void;
}

const ProductListing = ({ products, onAddingProduct }: PropTypes) => {
  const handleProductListCreation = () => {
    return (
      <>
        {products.map((product) => (
          <Product
            key={product._id}
            onAddingProduct={onAddingProduct}
            {...product}
          />
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
