import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToMyCart, deleteMyCartItem, removeMyCartItem } from '../../Redux/MyCartSlice';
import { increaseQty } from '../../Redux/MyProductSlice';
import { useNavigation } from '@react-navigation/native';
import MyProducts from '../MyProducts/MyProducts';

const MyCart = () => {
  const myCartItems = useSelector(state => state.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    myCartItems?.map(item => {
        total = total + item.qty + item.price;
    });
    return total;
};
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 60,
        paddingLeft: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
        <TouchableOpacity
          style={{
            marginTop: 30,
            paddingLeft: 10,
            height: 30,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 15,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{ fontWeight: '700', fontSize: 20, }}>Back</Text>
        </TouchableOpacity>
        <Text style={{ color: '#000', fontWeight: '700', fontSize: 20, marginTop: 30, paddingRight: 40 }}>
          Payment
        </Text>
      </View>
      <FlatList style={{
      }}
        data={myCartItems}
        renderItem={({ item }) => {
          return (
            <View style={{
              width: '94%',
              height: 120,
              marginTop: 10,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 10,
              borderColor: '#8e8e8e',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              elevation: 1,
              paddingLeft: 10,
            }}>
              <Image
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 15,
                }}>
              </Image>
              <View style={{ padding: 10 }}>

                <Text>{item.name}</Text>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>
                  {'$' + item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        marginTop: 5,
                        paddingLeft: 10,
                        paddingRight: 10,

                      }}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(removeMyCartItem(item));
                        } else {
                          dispatch(deleteMyCartItem(item.id));
                        }
                      }}>
                      <Text style={{ color: '#fff' }}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.qty == 0 ? null : (
                    <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '600', }}>{item.qty}</Text>
                  )}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        marginTop: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginLeft: 10
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                      }}>
                      <Text style={{ color: '#fff' }}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      >
      </FlatList>
      <View style={{
        width: '100%',
        height: 180,
        paddingLeft: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ fontWeight: '500', fontSize: 20, marginTop: 10, }}>
          Phương Thức Thanh toán
        </Text>
        <View style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <TouchableOpacity
            style={{
              height: 80,
              width: 180,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F0F0F0',
              marginTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
         
            }}>
              <Image source={require('../../../assets/paypal.png')} style={{width:50,height:50}}></Image>
            <Text style={{ color: 'black' }}>Paypal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 80,
              width: 180,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F0F0F0',
              marginTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
              marginLeft: 10,
            }}>
            <Image source={require('../../../assets/zalopay2.png')} style={{width:50,height:50}}></Image>
            <Text style={{ color: 'black' }}>Zalo Pay</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={{
              height: 40,
              width: 120,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              marginTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
              marginLeft: 10,
            }}>
            <Text style={{ color: '#fff',fontSize: 16, }}>{ '$'+getTotal()  }</Text>
          </TouchableOpacity>
      </View>

    </View>

  )
}

export default MyCart