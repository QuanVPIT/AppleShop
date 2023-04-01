import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MyProducts from './Screen/MyProducts/MyProducts';
import MyCart from './Screen/MyCart/MyCart';
// import DPScreen from './Screen/MyProducts/DPScreen';
import DetailProduct from './Screen/MyProducts/DetailProduct';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MyProducts"
          component={MyProducts}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator