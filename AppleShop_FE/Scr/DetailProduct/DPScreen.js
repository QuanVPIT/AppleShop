import { Button } from '@react-native-material/core';
import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';


const DPScreen = () => (
    <View style={styles.container}>
        <View>
            <View style={styles.circle}>
                <Image
                    style={styles.imgProduct}
                    source={require('../../assets/laptop1.png')}
                />
            </View>
        </View>
        <View style={styles.menuProduct}>
            <View style={styles.nameDateProduct}>
                <Text style={styles.nameProduct}>Macbook Air M1</Text>
                <Text style={styles.dateProduct}>2023</Text>
            </View>
            <Text style={styles.priceProduct}>USD 999$</Text>
            <Text style={styles.colorName}>COLOR:</Text>
            <View style={styles.colorProduct}>
                <TouchableOpacity style={styles.SP}>
                    <View style={styles.detailSP1}></View>
                    <Text style={styles.nameSP}>Gold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SP}>
                    <View style={styles.detailSP2}></View>
                    <Text style={styles.nameSP}>Sliver</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SP}>
                    <View style={styles.detailSP3}></View>
                    <Text style={styles.nameSP}>Grey</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.colorName}>Memory:</Text>
            <View style={styles.colorProduct}>
                <TouchableOpacity style={styles.SP}>
                    <Text style={styles.nameSP}>215GB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SP}>
                    <Text style={styles.nameSP}>512GB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SP}>
                    <Text style={styles.nameSP}>1TB</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonProduct}>
                <View style={styles.buttonSP}>
                    <TouchableOpacity style={styles.buttonDown} activeOpacity={0.5}>
                        <Image
                            source={require('../../assets/Group86.png')}
                            style={styles.buttonDown}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUp} activeOpacity={0.5}>
                        <Image
                            source={require('../../assets/Group87.png')}
                            style={styles.buttonDown}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonBuy} activeOpacity={0.5}>
                    <Text style={styles.textBuy}>Payment</Text>
                </TouchableOpacity>

            </View>

        </View>
    </View>

);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    circle: {
        borderRadius: 150,
        width: 300,
        height: 300,
        marginTop: 50,
        backgroundColor: '#E5E5E6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuProduct: {
        height: 400,
        width: 400,
        margin: 10,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
    },
    nameDateProduct: {
        flexDirection: 'row',
    },
    nameProduct: {
        fontFamily: 'Poppins',
        color: '#00000',
        fontWeight: 'bold',
        fontSize: 29,
    },
    dateProduct: {
        marginTop: 15,
    },
    priceProduct: {
        fontFamily: 'Poppins',
        color: '#7893F4',
        fontSize: 21,
    },
    colorName: {
        padding: 2,
        margin: 2,
        fontWeight: 'bold',

    },
    colorProduct: {
        flexDirection: 'row',
        padding: 2,

    },
    SP: {
        backgroundColor: '#F0F0F0',
        width: 100,
        height: 40,
        borderRadius: 20,
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nameSP: {

    },
    detailSP1: {
        backgroundColor: '#D4A490',
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 10,

    },
    detailSP2: {
        backgroundColor: '#AEAFB4',
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 10,

    },
    detailSP3: {
        backgroundColor: '#646464',
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 10,

    },
    buttonProduct: {
        flexDirection: 'row',
        padding: 2,
    },
    buttonSP: {
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        width: 120,
        height: 40,
        borderRadius: 30,
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
    },
    buttonUp: {
        backgroundColor: '#F0F0F0',
        width: 20,
        height: 20,
        borderRadius: 20,
    },
    buttonDown: {
        backgroundColor: '#F0F0F0',
        width: 20,
        height: 20,
        borderRadius: 20,

    },
    colorText: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 9,

    },
    buttonBuy: {
        flexDirection: 'row',
        backgroundColor: 'black',
        width: 120,
        height: 40,
        borderRadius: 30,
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
    },
    textBuy:{
        paddingLeft: 20,
        fontWeight: 'bold',
        color: 'white',
    }


});


export default DPScreen