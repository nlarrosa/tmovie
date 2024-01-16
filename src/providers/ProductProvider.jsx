import React, { useReducer } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { ProductReducer } from '../reducers/ProductReducer';
import { axiosDash } from '../config/dashAxios';
import { useState } from 'react';


const initialProductValue = {
  products: [],
  alertMsg: {},
  isLoading: true
}


export const ProductProvider = ({ children }) => {

  const [ state, dispatch] = useReducer(ProductReducer, initialProductValue);
  const [isLoading, setIsLoading] = useState(true);


  const getAllProducts = async() => {

    // setIsLoading(true);
    const {data } = await axiosDash.get('/products');
    const { products } = data;
    setIsLoading(false);

    return products;

    // dispatch({
    //   type: 'GETALL-PRODUCTS',
    //   payload: {
    //      products: products
    //   }
    // });
  }


  

  return (
    <ProductContext.Provider value={{
        state,
        getAllProducts,
        isLoading
    }}>
      { children }
    </ProductContext.Provider>
  )
}
