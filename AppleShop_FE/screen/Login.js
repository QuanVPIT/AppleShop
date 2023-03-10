import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView, Alert } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { FontAwesome, Feather } from '@expo/vector-icons';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    if (!email || !password) {
      Alert.alert(
        'Lỗi',
        'Chưa nhập email hoặc password',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    } else {
      if (!validateEmail(email)) {
        Alert.alert(
          'Lỗi',
          'Email sai cú pháp',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      } else {
        if (email == "suong@gmail.com" && password == "123") {
          console.log("Đăng nhập thành công")
        } else {
          Alert.alert( 
            'Lỗi',
            'Nhập sai email hoặc password!',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
        }

      }
    }


  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" />}
          onChangeText={setEmail}
          value={email}
        />
        <Input
          placeholder="Password"
          leftIcon={<Feather name="lock" />}
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
        onPress={()=>{ForgotPassword}}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 20 }} >Forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonLogin} onPress={handleLogin}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
        <View style={{ width: "100%", alignItems: "center", marginTop: 20, marginBottom: 10 }}><Text style={{ fontWeight: "bold" }} >Or</Text></View>
        <TouchableOpacity style={styles.ButtonFB}>
          <Image style={{ width: 20, height: 20 }}
            source={require('../image/fb3.png')}></Image>
          <Text style={{ color: "white", marginLeft: 10 }}>Login in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonGG}>
          <Image style={{ width: 20, height: 20 }}
            source={require('../image/gg.webp')}></Image>
          <Text style={{ color: "gray", marginLeft: 10 }}>Login in with Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );

}

export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  ButtonLogin: {
    padding: 15,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row"
  },
  ButtonFB: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#1877F2',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row"
  },
  ButtonGG: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row"
  },
});