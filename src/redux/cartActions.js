import { products } from "../pages/product/products";

export const ADDPRODUCT = "PRODUCT@ADDPRODUCT";

export const addToCart = (name) => {
  const data = products[name];
  
  return {
    type: ADDPRODUCT,
    payload: {
        name: data.name,
        title: data.title,
        image: data.img.big1,
        price: data.priceN,
        number: data.number,
        quantity: localStorage.getItem(`${data.name}`)
    },
  };
};