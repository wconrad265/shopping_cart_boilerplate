import axios from "axios";

export const addToShoppingCart = async (productId: string) => {
  try {
    const { data } = await axios.post("/api/add-to-cart", {
      productId: productId,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getShoppingCart = async () => {
  try {
    const { data } = await axios.get("/api/cart");

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const checkout = async () => {
  try {
    await axios.post("/api/checkout");
  } catch (error) {
    console.error(error);
  }
};
