import { View, Text , StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { Icon, Input } from 'react-native-elements'

const Register = () => {
  return (
    <ScrollView>
          <View style={styles.container}>
      <View style={{marginBottom:10,flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
        <Text style={{fontSize:40, fontWeight:"bold"}}>Register</Text>
        <View style={{ flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
        <TouchableOpacity style={styles.Button}>
        <Image style={{ width: 20, height: 20 }}
          source={require('../image/fb3.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Image style={{ width: 25, height: 25 }}
          source={require('../image/gg.webp')}></Image>
      </TouchableOpacity>
        </View>

      </View>
    <Input
      placeholder="Email"
      leftIcon={<Icon name="email" />}
    />
      <Input
      placeholder="Numberphone"
      leftIcon={<Icon name="phone" />}
      secureTextEntry
    />
    <Input
      placeholder="Password"
      leftIcon={<Icon name="lock" />}
      secureTextEntry
    />
        <Input
      placeholder="Confirm Password"
      leftIcon={<Icon name="lock" />}
      secureTextEntry
    />
    <TouchableOpacity>
    </TouchableOpacity>
    <View style={{flexDirection:"row", justifyContent:'center', alignItems:"center",}}>
    <TouchableOpacity style={styles.ButtonRegister}>
      <Text style={{ color: "white" }}>Sign-up</Text>
    </TouchableOpacity>
    
    <View>
    <Text>Already a </Text>
    <Text>Member? Login</Text>
    </View>
    </View>
      </View>
    </ScrollView>

  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  ButtonRegister: {
    width:"60%",
    padding: 15,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginRight:20
  },
  Button: {
    width:40,
    height:40,
    backgroundColor:"white",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginRight:10
  },
});