export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

export interface NewProduct extends Omit<Product, "_id"> {}
