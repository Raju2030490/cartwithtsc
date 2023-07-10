import React, {Reducer, useReducer, useContext, PropsWithChildren} from 'react';
import {ShopAction} from '../constant/actions';
import {products} from '../constant/products';
import {ActionType, ProdcutContextType, Product} from '../constant/type';
import {shopReducer} from './reducer';
import ShopContext from './ShopContext';

function GlobalState({children}: PropsWithChildren): JSX.Element {
  const initialState = useContext(ShopContext);

  const [state, dispatch] = useReducer<Reducer<ProdcutContextType, ActionType>>(
    shopReducer,
    initialState,
  );

  const addProductToCart = (product: Product) => {
    dispatch({type: ShopAction.ADD_PRODUCT_TO_CART, product: product});
  };

  const removeFromTheCart = (product: Product) => {
    dispatch({type: ShopAction.REMOVE_PRODUCT_TO_CART, product: product});
  };
  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: state.cart,
        addProductToCart: addProductToCart,
        removeFromTheCart: removeFromTheCart,
      }}>
      {children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
