import useField from "./hooks/useField";

interface PropTypes {
  title: string;
  quantity: number;
  price: number;
  visibility: string;
  toggleEditFormVisibility: () => void;
}

const EditForm = ({
  title,
  quantity,
  price,
  visibility,
  toggleEditFormVisibility,
}: PropTypes) => {
  const productName = useField("text", "product-name", title);
  const productPrice = useField("number", "product-price", quantity);
  const productQuantity = useField("number", "product-quantity", price);

  return (
    <div className="edit-form" style={{ display: visibility }}>
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
          <button type="button" onClick={toggleEditFormVisibility}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
