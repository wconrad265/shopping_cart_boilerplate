import Product from "./EditableProduct.tsx";
import { Product as ProductType } from "../Types/Product";

interface PropTypes {
  products: ProductType[];
  onEditingProduct: (product: ProductType) => void;
  onProductDeletion: (id: string) => void;
  onAddToCartItem: (id: string) => void;
}

const ProductListing = ({
  products,
  onEditingProduct,
  onProductDeletion,
  onAddToCartItem,
}: PropTypes) => {
  const handleProductListCreation = () => {
    return (
      <>
        {products.map((product) => (
          <Product
            key={product._id}
            onEditingProduct={onEditingProduct}
            onProductDeletion={onProductDeletion}
            onAddToCartItem={onAddToCartItem}
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
