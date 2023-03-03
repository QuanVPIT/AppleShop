import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image } from 'react-native';
import Tabscreen2 from './Register';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <View style={{ flex: 1, borderRadius:30 }}>
            <View style={{flex:0.4, alignItems:"center", justifyContent:"center", backgroundColor:"white"}}>
            <Image style={{ width: "30%", height: "60%"}}
                source={require('../image/1.jpg')}></Image>
            </View>
            
            <Tab.Navigator >
                <Tab.Screen name="Login" component={Login} style={{  borderRadius:30 }}/>
                <Tab.Screen name="Register" component={Tabscreen2} />
            </Tab.Navigator>
        </View>

    );
}
