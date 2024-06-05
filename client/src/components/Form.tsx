import { SyntheticEvent, useState } from "react";
import useField from "./hooks/useField";
import { NewProduct } from "../Types/Product";

interface AddFormProps {
  onAddingNewProduct: (product: NewProduct) => void;
}

const AddForm = ({ onAddingNewProduct }: AddFormProps) => {
  const productName = useField("text", "product-name", "");
  const productPrice = useField("number", "product-price", "");
  const productQuantity = useField("number", "product-quantity", "");
  const [isAddFormVisible, setAddForm] = useState(false);

  const handleAddFormVisibility = () => {
    setAddForm((prevState) => !prevState);
  };

  const handleAddingNewProduct = (e: SyntheticEvent) => {
    e.preventDefault;
    const newProduct: NewProduct = {
      title: String(productName.value),
      price: Number(productPrice.value),
      quantity: Number(productQuantity.value),
    };

    onAddingNewProduct(newProduct);
  };

  return (
    <>
      <p>
        <button
          className="add-product-button"
          onClick={handleAddFormVisibility}
        >
          Add A Product
        </button>
      </p>
      <div
        className="add-form"
        style={{ display: isAddFormVisible ? "block" : "none" }}
      >
        <form onSubmit={handleAddingNewProduct}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name:</label>
            <input required {...productName} />
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Product Price:</label>
            <input required min="0" step="0.01" {...productPrice} />
          </div>
          <div className="input-group">
            <label htmlFor="product-quantity">Product Quantity:</label>
            <input required {...productQuantity} />
          </div>
          <div className="actions form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={handleAddFormVisibility}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForm;
