import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart } from '../../Redux/MyCartSlice';
import { useNavigation } from '@react-navigation/native';
import { increaseQty } from '../../Redux/MyProductSlice';

const MyProducts = () => {
    const myProducts = useSelector(state => state.product);
    const myCartItems = useSelector(state => state.cart);
    console.log('added products in cart', myCartItems);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const getTotal = () => {
        let total = 0;
        myCartItems.map(item => {
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
                <Text style={{ color: '#000', fontWeight: '800', fontSize: 16, marginTop: 20 }}>
                    My Cart
                </Text>
            </View>
            <FlatList style={{
            }}
                data={myProducts}
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
                                    {item.qty == 0 ? (
                                        <TouchableOpacity
                                            style={{
                                                height: 30,
                                                borderRadius: 10,
                                                width: 100,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'black',
                                                marginTop: 5,
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                            }}
                                            onPress={() => {
                                                dispatch(addProductToMyCart(item));
                                                // dispatch(increaseQty(item.id));
                                            }}>
                                            <Text style={{ color: '#fff' }}>Add to Cart</Text>
                                        </TouchableOpacity>
                                    ) : null}
                                </View>
                            </View>

                        </View>
                    );
                }}
            >
            </FlatList>
            {myCartItems.length > 0 ? (
                <View style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', height: '100%', }}>
                        <Text>{'added Item' + '(' + myCartItems.length + ')'}</Text>
                        <Text>{'Total: ' + '(' + getTotal() + ')'}</Text>
                    </View>

                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', height: '100%', }}>
                        <TouchableOpacity
                            style={{
                                width: '70%',
                                height: 40,
                                backgroundColor: 'black',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 7
                            }}
                            onPress={() => {
                                navigation.navigate('MyCart');
                            }}>
                            <Text style={{ color: '#fff' }}>View Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
        </View>
    )
}

export default MyProducts