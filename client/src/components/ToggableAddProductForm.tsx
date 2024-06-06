import { useState } from "react";
import Form from "./Form"; //Turn this into a component
import { NewProduct } from "../Types/Product";
//put the state in this

interface ToggleAddFromTypes {
  onFormSubmission: (product: NewProduct) => void;
}

const ToggleAddProductButton = ({ onFormSubmission }: ToggleAddFromTypes) => {
  const [isAddFormVisible, setAddForm] = useState(false);

  const handleAddFormVisibility = () => {
    setAddForm((prevState) => !prevState);
  };

  return (
    <>
      {isAddFormVisible ? (
        <Form
          onFormSubmission={onFormSubmission}
          className="add-form"
          onFormVisibility={handleAddFormVisibility}
          isFormVisible={isAddFormVisible}
        />
      ) : (
        <p>
          <button
            className="add-product-button"
            onClick={handleAddFormVisibility}
          >
            Add A Product
          </button>
        </p>
      )}
    </>
  );
};

export default ToggleAddProductButton;
