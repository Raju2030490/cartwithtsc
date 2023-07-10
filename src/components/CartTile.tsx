import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {PropsWithChildren, useRef} from 'react';
import {Product} from '../constant/type';

const CartTile = ({
  item,
  onPress,
  title,
  quantity,
  isCartScreen,
  color,
  disabledButton,
}: PropsWithChildren<{
  title: string;
  isCartScreen: boolean;
  quantity: number;
  item: Product;
  onPress(): void;
  color: string;
}>): JSX.Element => {
  const data = useRef('Button');
  return (
    <View style={styles.container}>
      <View style={styles.tileContainerStyle}>
        <View>
          <Text
            style={styles.itemNameStyle}
            accessible={false}
            importantForAccessibility="no"
            accessibilityElementsHidden={true}>
            {item.name} <Text style={styles.priceStyle}>{item.price}</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          accessibilityRole="tab"
          accessibilityLabel="Test"
          disabled={disabledButton}
          accessibilityState={{
            disabled: disabledButton,
            selected: true,
            expanded: true,
          }}>
          <Text style={{color: color}}>{title}</Text>
        </TouchableOpacity>
      </View>
      {isCartScreen ? (
        <View style={styles.quantiyStyle} ref={data}>
          <Text> Quantity:</Text>
          <Text> {quantity}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {borderWidth: 1, margin: 10, padding: 20},
  tileContainerStyle: {flexDirection: 'row', justifyContent: 'space-between'},
  itemNameStyle: {fontWeight: 'bold'},
  priceStyle: {fontWeight: '400'},
  quantiyStyle: {flexDirection: 'row'},
});

export default CartTile;
