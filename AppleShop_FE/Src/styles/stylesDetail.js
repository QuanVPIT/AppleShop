import { StyleSheet } from "react-native";

const stylesDetail = StyleSheet.create({
    container: {
      backgroundColor: "#F0F0F0",
      alignItems: "center",
      justifyContent: "space-between",
    },
    circle: {
      borderRadius: 150,
      width: 300,
      height: 300,
      marginTop: 50,
      backgroundColor: "#E5E5E6",
      justifyContent: "center",
      alignItems: "center",
    },
    imgProduct: {
      width: 250,
      height: 200,
      borderRadius: 50,
      backgroundColor: "#E5E5E6",
    },
    menuProduct: {
      top: 25,
      height: 460,
      width: 400,
      margin: 10,
      padding: 20,
      backgroundColor: "#FFFFFF",
      borderRadius: 35,
    },
    nameDateProduct: {
     //flexDirection: 'row',
     //justifyContent: 'space-evenly',
    },
    nameProduct: {
      // fontFamily: 'Poppins',
      lineHeight: 35,
      color: "#00000",
      fontWeight: "500",
      fontSize: 29,
    },
    dateProduct: {
      fontWeight: "500",
      top: 20,
      fontSize: 20,
    },
    priceProduct: {
      // fontFamily: 'Poppins',
      lineHeight: 50,
      fontWeight: "500",
      color: "#3560FC",
      fontSize: 30,
    },
    colorName: {
      padding: 2,
      margin: 2,
      fontWeight: "bold",
    },
    colorProduct: {
      flexDirection: "row",
      padding: 2,
    },
    SP: {
      backgroundColor: "#F0F0F0",
      width: 100,
      height: 40,
      borderRadius: 20,
      padding: 10,
      margin: 5,
      flexDirection: "row",
      justifyContent: "center",
    },
    nameSP: {},
    detailSP1: {
      backgroundColor: "#D4A490",
      width: 20,
      height: 20,
      borderRadius: 20,
      marginRight: 10,
    },
    detailSP2: {
      backgroundColor: "#AEAFB4",
      width: 20,
      height: 20,
      borderRadius: 20,
      marginRight: 10,
    },
    detailSP3: {
      backgroundColor: "#646464",
      width: 20,
      height: 20,
      borderRadius: 20,
      marginRight: 10,
    },
    buttonProduct: {
      top:  10,
      flexDirection: "row",
      padding: 2,
    },
    buttonSP: {
      flexDirection: "row",
      backgroundColor: "#F0F0F0",
      width: 120,
      height: 40,
      borderRadius: 30,
      padding: 10,
      margin: 5,
      justifyContent: "space-between",
    },
    buttonUp: {
      backgroundColor: "#F0F0F0",
      width: 20,
      height: 20,
      borderRadius: 20,
    },
    buttonDown: {
      backgroundColor: "#F0F0F0",
      width: 20,
      height: 20,
      borderRadius: 20,
    },
    colorText: {
      color: "white",
      fontSize: 20,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 9,
    },
    buttonBuy: {
      flexDirection: "row",
      backgroundColor: "black",
      width: 120,
      height: 40,
      borderRadius: 30,
      padding: 10,
      margin: 5,
      justifyContent: "space-between",
    },
    textBuy: {
      paddingLeft: 20,
      fontWeight: "bold",
      color: "white",
    },
  });

export default stylesDetail;