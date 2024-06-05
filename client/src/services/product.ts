import axios from "axios";
import { NewProduct, Product } from "../Types/Product";
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

export const editProduct = async (newProduct: Product, id: string) => {
  try {
    const { data } = await axios.put(`/api/products/${id}`, newProduct);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await axios.delete(`/api/products/${id}`);
  } catch (error) {
    console.error(error);
  }
};
