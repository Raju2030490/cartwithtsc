import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ShopContext from '../context/ShopContext';
import CartTile from '../components/CartTile';

const Cart = () => {
  const context = React.useContext(ShopContext);
  const {cart, removeFromTheCart} = context;
  console.log(cart);
  return (
    <View>
      {cart.length <= 0 ? (
        <View style={styles.noItemStyle}>
          <Text>No item added to the cart</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          extraData={context}
          renderItem={({item}) => {
            return (
              <CartTile
                item={item}
                quantity={item.quantity}
                isCartScreen={true}
                title="Remove from the cart"
                onPress={() => {
                  removeFromTheCart(item);
                }}
                color={'red'}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noItemStyle: {
    borderWidth: 1,
    margin: 10,
    padding: 20,
  },
});
export default Cart;
