import { useState } from "react";
import useField from "./hooks/useField";

const AddForm = () => {
  const productName = useField("text", "product-name", "");
  const productPrice = useField("number", "product-price", "");
  const productQuantity = useField("number", "product-quantity", "");
  const [isAddFormVisible, setAddForm] = useState(false);

  const toggleAddFormVisibility = () => {
    setAddForm((prevState) => !prevState);
  };

  return (
    <>
      <p>
        <button
          className="add-product-button"
          onClick={toggleAddFormVisibility}
        >
          Add A Product
        </button>
      </p>
      <div
        className="add-form"
        style={{ display: isAddFormVisible ? "block" : "none" }}
      >
        <form>
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
            <button type="button" onClick={toggleAddFormVisibility}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForm;
