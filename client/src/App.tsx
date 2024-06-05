import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import Form from "./components/Form";
import { Product as ProductType, NewProduct } from "./Types/Product";
import { useEffect, useState } from "react";
import { getAllProducts, addNewProduct } from "./services/product";

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

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing
          products={products}
          onAddingProduct={handleAddingProduct}
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
