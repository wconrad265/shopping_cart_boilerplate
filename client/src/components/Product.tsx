import { NewProduct, Product as ProductType } from "../Types/Product";
import { useState } from "react";
import Form from "./Form";

interface ProductProps extends ProductType {
  onEditingProduct: (product: ProductType) => void;
  onProductDeletion: (id: string) => void;
  onAddToCartItem: (id: string) => void;
}

const Product = ({
  title,
  quantity,
  price,
  _id,
  onEditingProduct,
  onProductDeletion,
  onAddToCartItem,
}: ProductProps) => {
  const [isEditFormVisible, setEditFormVisible] = useState(false);

  const handleEditFormVisibility = () => {
    setEditFormVisible((prevState) => !prevState);
  };

  const handleEditFormSubmission = async (newProductInfo: NewProduct) => {
    try {
      await onEditingProduct({ _id, ...newProductInfo });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <li className="product">
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
            <button className="edit" onClick={handleEditFormVisibility}>
              Edit
            </button>
          </div>
        </div>
        <button
          className="delete-button"
          onClick={() => onProductDeletion(_id)}
        >
          <span>X</span>
        </button>
        <Form
          onFormSubmission={handleEditFormSubmission}
          isFormVisible={isEditFormVisible}
          className="edit-form"
          onFormVisibility={handleEditFormVisibility}
          initialName={title}
          initialPrice={String(price)}
          initialQuantity={String(quantity)}
        />
      </li>
    </>
  );
};

export default Product;
