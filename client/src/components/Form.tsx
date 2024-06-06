import { SyntheticEvent } from "react";
import useField from "./hooks/useField";
import { NewProduct } from "../Types/Product";

interface FormProps {
  onFormSubmission: (product: NewProduct, callback?: () => void) => void;
  isFormVisible: boolean;
  className: string;
  onFormVisibility: () => void;
  initialPrice?: string;
  initialName?: string;
  initialQuantity?: string;
}

const Form = ({
  onFormSubmission,
  isFormVisible,
  className,
  onFormVisibility,
  initialPrice = "",
  initialName = "",
  initialQuantity = "",
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

    onFormSubmission(newProductInfo, resetForm);
    onFormVisibility();
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
            <input
              required
              type={productName.type}
              id={productName.id}
              name={productName.name}
              value={productName.value}
              onChange={productName.onChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Product Price:</label>
            <input
              required
              type={productPrice.type}
              id={productPrice.id}
              name={productPrice.name}
              value={productPrice.value}
              onChange={productPrice.onChange}
              min="0"
              step="0.01"
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-quantity">Product Quantity:</label>
            <input
              required
              type={productQuantity.type}
              id={productQuantity.id}
              name={productQuantity.name}
              value={productQuantity.value}
              onChange={productQuantity.onChange}
            />
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
