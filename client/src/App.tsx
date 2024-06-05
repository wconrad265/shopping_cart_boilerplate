import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import Form from "./components/Form";
import { Product as ProductType, NewProduct } from "./Types/Product";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  addNewProduct,
  editProduct,
  deleteProduct,
} from "./services/product";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isAddFormVisible, setAddForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const initialProducts = await getAllProducts();

        setProducts(initialProducts);
      } catch (error) {
        console.error();
      }
    };

    fetchProducts();
  }, []);

  const handleAddFormVisibility = () => {
    setAddForm((prevState) => !prevState);
  };

  const handleAddingProduct = async (product: NewProduct) => {
    try {
      const response = await addNewProduct(product);

      const newProduct: ProductType = {
        _id: response._id,
        title: response.title,
        price: response.price,
        quantity: response.quantity,
      };

      setProducts((prevProducts) => prevProducts.concat(newProduct));
    } catch (error) {
      console.error();
    }
  };

  const handleEditProduct = async (product: ProductType) => {
    try {
      const id = product._id;

      const editedProduct = await editProduct(product, id);

      setProducts((prevState) =>
        prevState.map((p) => (p._id === id ? editedProduct : p))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletionOfProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      setProducts((prevState) => prevState.filter((p) => p._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing
          products={products}
          onEditingProduct={handleEditProduct}
          onProductDeletion={handleDeletionOfProduct}
        />
        <p>
          <button
            className="add-product-button"
            onClick={handleAddFormVisibility}
          >
            Add A Product
          </button>
        </p>
        <Form
          onFormSubmission={handleAddingProduct}
          isFormVisible={isAddFormVisible}
          className="add-form"
          onFormVisibility={handleAddFormVisibility}
        />
      </main>
    </div>
  );
}

export default App;
