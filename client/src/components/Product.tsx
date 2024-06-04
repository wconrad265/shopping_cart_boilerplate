import { Product as ProductType } from "../Types/Product";

interface ProductProps extends ProductType {}

const Product = ({ title, quantity, price }: ProductProps) => {
  return (
    <>
      <li className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{quantity}</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="edit">Edit</button>
          </div>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
      </li>
    </>
  );
};

export default Product;
