import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './Src/Navigation/MainStackNavigator';
import SlashScreen from './Src/Home/SlashScreen';


// const Stack = createStackNavigator();


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
//  <NavigationContainer>
//     <Stack.Navigator options={{headerShown: false}}>
//     <Stack.Screen name="Home" component={Homepage} />
//     <Stack.Screen name="DetailProduct" component={DetailProduct} />
//   </Stack.Navigator>
// </NavigationContainer>
    <NavigationContainer>
       <MainStackNavigator />
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
