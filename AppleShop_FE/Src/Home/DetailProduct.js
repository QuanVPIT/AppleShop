import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
import getConstant from "../../helper/Constanst";

const DetailProduct = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [year, setyear] = useState("");
  const [image, setimage] = useState("");

  const { id } = route.params;
  console.log("ID PRODUCT:", id);

  const [macs, setMacs] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham1/${id}/detail`)
      .then(function (response) {
        setName(response.data.mac.name);
        setyear(response.data.mac.year);
        setimage(response.data.mac.image);
        console.log("Name - Year - Image", name, year, image);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
   const [airpods, setAirpods] = useState([]);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham2`)
      .then(function (response) {
        // console.log('response: ', response.data);
        setAirpods(response.data);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);
  const [iphones, setIphones] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham3/${id}/detail`)
      .then(function (response) {
        setName(response.data.iphone.name);
        setyear(response.data.iphone.year);
        setimage(response.data.iphone.image);
        console.log("Name - Year - Image", name, year, image);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [ipads, setIpads] = useState([]);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham4`)
      .then(function (response) {
        // console.log('response: ', response.data);
        setIpads(response.data);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);
  const [watchs, setWatchs] = useState([]);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham5`)
      .then(function (response) {
      //   console.log('response: ', response.data);
        setWatchs(response.data);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.circle}>
          <Image
            style={styles.imgProduct}
            source={{ uri: image }}
            resizeMode={"cover"}
          />
        </View>
      </View>
      <View style={styles.menuProduct}>
        <View style={styles.nameDateProduct}>
          <Text style={styles.nameProduct}>{name}</Text>
          <Text style={styles.dateProduct}>{year}</Text>
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
                source={require("../../assets/Group86.png")}
                style={styles.buttonDown}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonUp} activeOpacity={0.5}>
              <Image
                source={require("../../assets/Group87.png")}
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
};

export default DetailProduct;

const styles = StyleSheet.create({
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
    width: 210,
    height: 150,
    backgroundColor: "#E5E5E6",
  },
  menuProduct: {
    height: 400,
    width: 400,
    margin: 10,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 35,
  },
  nameDateProduct: {
    flexDirection: "row",
  },
  nameProduct: {
    // fontFamily: 'Poppins',
    color: "#00000",
    fontWeight: "bold",
    fontSize: 29,
  },
  dateProduct: {
    marginTop: 15,
  },
  priceProduct: {
    // fontFamily: 'Poppins',
    color: "#7893F4",
    fontSize: 21,
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
