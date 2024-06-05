import { SyntheticEvent } from "react";
import useField from "./hooks/useField";
import { NewProduct } from "../Types/Product";

interface FormProps {
  onFormSubmission: (product: NewProduct) => void;
  isFormVisible: boolean;
  className: string;
  onFormVisibility: () => void;
  initialPrice?: number;
  initialName?: string;
  initialQuantity?: number;
}

const Form = ({
  onFormSubmission,
  isFormVisible,
  className,
  onFormVisibility,
  initialPrice = 0,
  initialName = "",
  initialQuantity = 0,
}: FormProps) => {
  const productName = useField("text", "product-name", initialName);
  const productPrice = useField("number", "product-price", initialPrice);
  const productQuantity = useField(
    "number",
    "product-quantity",
    initialQuantity
  );

  const resetForm = () => {
    productName.reset();
    productPrice.reset();
    productQuantity.reset();
  };

  const handleFormSubmission = (e: SyntheticEvent) => {
    e.preventDefault();
    const newProductInfo: NewProduct = {
      title: String(productName.value),
      price: Number(productPrice.value),
      quantity: Number(productQuantity.value),
    };

    onFormSubmission(newProductInfo);
    onFormVisibility();
    resetForm();
  };

  return (
    <>
      <div
        className={className}
        style={{ display: isFormVisible ? "block" : "none" }}
      >
        <form onSubmit={handleFormSubmission}>
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
            <button type="button" onClick={onFormVisibility}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
