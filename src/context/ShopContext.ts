import {createContext} from 'react';
import {products} from '../constant/products';
import {ProdcutContextType, Product} from '../constant/type';

export default createContext<ProdcutContextType>({
  products: products,
  cart: [],
  addProductToCart: function (_product: Product): void {},
  removeFromTheCart(_product): void {},
});
