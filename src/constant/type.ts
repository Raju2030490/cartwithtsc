// export interface State{
//     products: Product,
//   cart: [],
//   addProductToCart(product): ,
//   removeFromTheCart: productId => {},
// };

import {ShopAction} from './actions';

export interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export type ProdcutContextType = {
  products: Product[];
  cart: Product[];
  addProductToCart(product: Product): void;
  removeFromTheCart(product: Product): void;
};

export type ActionType = {
  type: ShopAction;
  product: Product;
};
