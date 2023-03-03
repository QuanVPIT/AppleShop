import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/Login';
import MyTabs from './screen/MyTabs';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPassword from './screen/ForgotPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


