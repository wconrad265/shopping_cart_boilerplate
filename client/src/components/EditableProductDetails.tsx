import { Product } from "../Types/Product";

interface ProductProps extends Product {
  onProductDeletion: (id: string) => void;
  onAddToCartItem: (id: string) => void;
  onEditFormVisibility: () => void;
}

const EditableProductDetails = ({
  onEditFormVisibility,
  onProductDeletion,
  onAddToCartItem,
  title,
  price,
  quantity,
  _id,
}: ProductProps) => {
  return (
    <>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity}</p>
        <div className="actions product-actions">
          <button
            className="add-to-cart"
            onClick={() => onAddToCartItem(_id)}
            disabled={quantity === 0}
          >
            Add to Cart
          </button>
          <button className="edit" onClick={onEditFormVisibility}>
            Edit
          </button>
        </div>
      </div>
      <button className="delete-button" onClick={() => onProductDeletion(_id)}>
        <span>X</span>
      </button>
    </>
  );
};

export default EditableProductDetails;
