import { Product as ProductType } from "../Types/Product";
import { useState } from "react";
import EditForm from "./EditForm";

interface ProductProps extends ProductType {}

const Product = ({ title, quantity, price }: ProductProps) => {
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
        <EditForm
          visibility={isEditFormVisible ? "block" : "none"}
          title={title}
          quantity={quantity}
          price={price}
          toggleEditFormVisibility={handleEditFormVisibility}
        />
      </li>
    </>
  );
};

export default Product;
