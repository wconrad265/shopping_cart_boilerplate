import { NewProduct, Product as ProductType } from "../Types/Product";
import { useState } from "react";
import Form from "./Form";
import EditableProductDetails from "./EditableProductDetails";

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
        <EditableProductDetails
          onEditFormVisibility={handleEditFormVisibility}
          onProductDeletion={onProductDeletion}
          onAddToCartItem={onAddToCartItem}
          title={title}
          price={price}
          quantity={quantity}
          _id={_id}
        />
        {isEditFormVisible && (
          <Form
            onFormSubmission={handleEditFormSubmission}
            className="edit-form"
            onFormVisibility={handleEditFormVisibility}
            submitButtonText={"Update"}
            initialName={title}
            initialPrice={String(price)}
            initialQuantity={String(quantity)}
          />
        )}
      </li>
    </>
  );
};

export default Product;
