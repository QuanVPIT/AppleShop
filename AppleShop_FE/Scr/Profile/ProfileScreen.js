import React from "react";
import { ListItem } from "@react-native-material/core"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import UploadImage from "./UploadImage";

const ProfileScreen = () => (
  <View style={styles.container}>
    <View style={styles.UploadImage}>
      <UploadImage ></UploadImage>
      <Text style={{ marginVertical: 20, fontSize: 16 }}>Welcome, Võ Đại Hiếu Kỳ</Text>
    </View>
    <View style={styles.list} >
        <ListItem title="Account" />
        <ListItem 
          title="Information"
          leading={<Icon name="account" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Change Password"
          leading={<Icon name="key" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem title="Shoping" />
        <ListItem
          title="Payment"
          leading={<Icon name="atm" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Cart"
          leading={<Icon name="cart" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Transpot"
          leading={<Icon name="car" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Voucher"
          leading={<Icon name="sale" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    // alignItems: 'center',
    justifyContent: 'space-between',  
  },

  UploadImage: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },


});



export default ProfileScreen;