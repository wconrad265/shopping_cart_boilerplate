import { Product as ProductType } from "../Types/Product";
import { useState } from "react";
import Form from "./Form";

interface ProductProps extends ProductType {
  onAddingProduct: (product: NewProduct) => void;
}

const Product = ({ title, quantity, price, onAddingProduct }: ProductProps) => {
  const [isEditFormVisible, setEditFormVisible] = useState(false);

  const handleEditFormVisibility = () => {
    setEditFormVisible((prevState) => !prevState);
  };

  return (
    <>
      <li className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{quantity}</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="edit" onClick={handleEditFormVisibility}>
              Edit
            </button>
          </div>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
        <Form
          onFormSubmission={onAddingProduct}
          isFormVisible={isEditFormVisible}
          className="edit-form"
          onFormVisibility={handleEditFormVisibility}
          initialName={title}
          initialPrice={price}
          initialQuantity={quantity}
        />
      </li>
    </>
  );
};

export default Product;
