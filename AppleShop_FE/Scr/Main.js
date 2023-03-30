import { View, Text } from 'react-native';
import React from 'react';
import AppNavigator from './AppNavigator';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMyProducts } from './Redux/MyProductSlice';

let items = [
    {
        id: 0,
        name: 'Macbook',
        qty: 0,
        price: 499,
        image: require('../assets/macbook.png'),
    },
    {
        id: 1,
        name: 'IPad',
        qty: 0,
        price: 999,
        image: require('../assets/maytinhbang.png'),
    },
    {
        id: 2,
        name: 'Iphone13',
        price: 599,
        qty: 0,
        image: require('../assets/iphone.png'),
    },
    {
        id: 3,
        name: 'Tai Nghe',
        price: 699,
        qty: 0,
        image: require('../assets/tainghe.png'),
    },
    {
        id: 4,
        name: 'Apple Watch',
        price: 399,
        qty: 0,
        image: require('../assets/applewatch.png'),
    },
    {
        id: 5,
        name: 'Airpod',
        price: 399,
        qty: 0,
        image: require('../assets/airpods.png'),
    }

];
const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        items.map(item => {
            dispatch(addMyProducts(item));
        })
    })
    return (
        <AppNavigator />
    )
}

export default Main