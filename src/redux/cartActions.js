import { products } from "../pages/product/products";


export const ADDPRODUCT = "PRODUCT@ADDPRODUCT";
export const REMOVEPRODUCT = "PRODUCT@REMOVEPRODUCT";
export const EDITPRODUCT = "PRODUCT@EDITPRODUCT";
export const CLEARPRODUCT = "PRODUCT@CLEARPRODUCT";

export const clearCart = () => {
  return {
    type: CLEARPRODUCT,
  }
}
export const addToCart = (name) => {
  const data = products[name];
 
  return {
    type: ADDPRODUCT,
    payload: {
        name: data.name,
        title: data.title,
        image: data.img.web,
        price: data.priceN,
        number: data.number,
        size: data.hasSize
    },
  };
};

export const removeFromCart = (name) => {
  return {
    type: REMOVEPRODUCT,
    payload: name
  }
}




