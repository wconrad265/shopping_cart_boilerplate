import axios from "axios";
import { NewProduct } from "../Types/Product";
export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("/api/products");

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addNewProduct = async (product: NewProduct) => {
  try {
    const { data } = await axios.post("/api/products", product);

    return data;
  } catch (error) {
    console.error(error);
  }
};
