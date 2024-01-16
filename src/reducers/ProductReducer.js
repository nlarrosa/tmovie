import React from 'react';

export const ProductReducer = (state={}, action) => {

    switch (action.type) {

        case 'GETALL-PRODUCTS':
            return {
              ...state,
              isLoading: false,
              products: action.payload.products
            }
            break;
    
        default:
            return state;
    }
  
}
