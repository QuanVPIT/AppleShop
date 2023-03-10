import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { Input, Button, Icon } from 'react-native-elements';

const ForgotPassword = () => {
  return (
    <View style={styles.container} >
      <View style={styles.back}>
        <Image style={{ width: "10%", height: "60%" }}
          source={require('../image/chevron_big_left.png')}></Image>
      </View>
      <ScrollView style={styles.scrollview}>
        <View style={{marginBottom:20}}>
        <Text style={styles.text}>Forgot</Text>
        <Text style={styles.text}>Password?</Text>
        </View>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" />}
        />
        <Text style={{marginBottom:20, marginTop:10}}>* We will send you a message to set or reset your new password</Text>
        <Text style={{fontSize:20, color:"gray"}}>Send code</Text>
      </ScrollView>
      <View style={styles.next}>
      <Image style={{ width: "20%", height: "60%" }}
          source={require('../image/7124606.png')}></Image>
      </View>
      
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
    },
    back: {
      flex: 0.1,
      width:"100%",

    },
    scrollview: {
      width:"100%",
      flex: 0.7,
    },
    next:{
      width:"100%",
      flex: 0.2,
      alignItems:"flex-end",
    },
    text:{
      fontSize:40,
      fontWeight:"bold",
    },
  }
);