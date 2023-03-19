import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";


const SlashScreen = ({navigation}) => {
    useEffect(() => {
      const id = setInterval(() => {
        navigation.navigate("Homepage");
      }, 5000);
    
      return () => {
        clearInterval(id);
      }
    },[])
    

  return (
    <View style={Slash.container}>
      <View style={Slash.viewImage}>
        <Image source={require('../Images/appleImages.png')} />
        <Text style={Slash.ViewText1}>Apple Store</Text>
      </View>
    </View>
  );
};

export default SlashScreen;

const Slash = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
  },
  viewImage: {
    flex: 1,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
    ViewText1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",  
    },
});
