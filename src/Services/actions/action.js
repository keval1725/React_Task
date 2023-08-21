import { ADD_TO_CART } from "../Constant";
const  REMOVE_TO_CART ="REMOVE_TO_CART";
export  const addToCart=(data)=>{
  return{
      type:ADD_TO_CART,
      data:data
    }   
}
export const removetocart=(data)=>{
  return{
    type:REMOVE_TO_CART,
    data:data
  }
}