import { products } from "../pages/product/products";

export const ADDPRODUCT = "PRODUCT@ADDPRODUCT";
export const REMOVEPRODUCT = "PRODUCT@REMOVEPRODUCT";

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
        quantity: localStorage.getItem(`Quantity${data.name}`),
        size: localStorage.getItem(`Size${data.name}`)
    },
  };
};

export const removeFromCart = (name) => {
  return {
    type: REMOVEPRODUCT,
    payload: name
  }
}