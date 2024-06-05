import ShoppingCart from "./components/ShoppingCart";
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
import {
  addToShoppingCart,
  checkout,
  getShoppingCart,
} from "./services/ShoppingCart";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [isAddFormVisible, setAddForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.error();
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchShoppingCart = async () => {
      try {
        const response = await getShoppingCart();

        setCartItems(response);
      } catch (error) {
        console.error();
      }
    };

    fetchShoppingCart();
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

  const handleAddProductButton = () => {
    return (
      <p>
        <button
          className="add-product-button"
          onClick={handleAddFormVisibility}
        >
          Add A Product
        </button>
      </p>
    );
  };

  const handleAddCartItem = async (productId: string) => {
    try {
      const { product, item } = await addToShoppingCart(productId);

      if (cartItems.find((i) => i._id === item._id)) {
        setCartItems((prevState) =>
          prevState.map((i) => (i._id === item._id ? item : i))
        );
      } else {
        setCartItems((prevState) => prevState.concat(item));
      }

      setProducts((prevState) =>
        prevState.map((p) => (p._id === productId ? product : p))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkout();
      setCartItems([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        {<ShoppingCart cartItems={cartItems} onCheckout={handleCheckout} />}
      </header>
      <main>
        <ProductListing
          products={products}
          onEditingProduct={handleEditProduct}
          onProductDeletion={handleDeletionOfProduct}
          onAddToCartItem={handleAddCartItem}
        />
        {handleAddProductButton()}
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
