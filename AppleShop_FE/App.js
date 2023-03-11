import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './Src/Home/Homepage';
import TabView from './Src/Home/TabView';
const Stack = createStackNavigator();

export default function App() {
  return (
  //   <View style={styles.container}>
  //       <NavigationContainer>
  //  <Stack.Navigator>
  //     <Stack.Screen name="Home" component={Homepage} />
  //   </Stack.Navigator>
  //     <StatusBar style="auto" />
  //     </NavigationContainer>
  //   </View>
 <NavigationContainer>
 
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Homepage} 
    options={{headerShown: false}}/>
  </Stack.Navigator>
   
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
