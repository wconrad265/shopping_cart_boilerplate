import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import AddForm from "./components/AddForm";
import { Product as ProductType, NewProduct } from "./Types/Product";
import { useEffect, useState } from "react";
import { getAllProducts, addNewProduct } from "./services/product";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

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
        <ProductListing products={products} />
        <AddForm onAddingNewProduct={handleAddingProduct} />
      </main>
    </div>
  );
}

export default App;
