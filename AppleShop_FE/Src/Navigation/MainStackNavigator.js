import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailProduct from "../Home/DetailProduct";
import Homepage from "../Home/Homepage";
import ProfileScreen from "../Home/ProfileScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }}/>
      <Stack.Screen name="DetailProduct" component={DetailProduct} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export { MainStackNavigator };