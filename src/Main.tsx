import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import GlobalState from './context/GlobalState';

import Cart from './screens/Cart';
import Home from './screens/Home';

const Main = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  return (
    <GlobalState>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
};

export default Main;
