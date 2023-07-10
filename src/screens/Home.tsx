import {View, FlatList} from 'react-native';
import React from 'react';
import ShopContext from '../context/ShopContext';
import CartTile from '../components/CartTile';

const Home = () => {
  const context = React.useContext(ShopContext);

  const {products, addProductToCart} = context;

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <CartTile
              item={item}
              title="Add item to cart"
              onPress={() => {
                addProductToCart(item);
              }}
              isCartScreen={false}
              quantity={0}
              color={'blue'}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
