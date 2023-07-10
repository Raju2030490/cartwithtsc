import {ShopAction} from '../constant/actions';
import {ActionType, Product} from '../constant/type';
import {ProdcutContextType} from '../constant/type';

const addProductToCart = (
  product: Product,
  state: ProdcutContextType,
): ProdcutContextType => {
  const updateCart = [...state.cart];
  const updateItemIndex = updateCart.findIndex(item => item.id === product.id);
  if (updateItemIndex < 0) {
    updateCart.push({...product, quantity: 1});
  } else {
    const updateItem = {
      ...updateCart[updateItemIndex],
    };
    updateItem.quantity++;
    updateCart[updateItemIndex] = updateItem;
  }

  return {...state, cart: updateCart};
};

const removeFromTheCart = (
  productId: number,
  state: ProdcutContextType,
): ProdcutContextType => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {...state, cart: updatedCart};
};

export function shopReducer(state: ProdcutContextType, action: ActionType) {
  switch (action.type) {
    case ShopAction.ADD_PRODUCT_TO_CART:
      return addProductToCart(action.product, state);
    case ShopAction.REMOVE_PRODUCT_TO_CART:
      return removeFromTheCart(action.product.id, state);
    default:
      return state;
  }
}
