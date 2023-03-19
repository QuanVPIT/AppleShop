import {View,Text,Dimensions,StyleSheet, Image,TouchableOpacity,ScrollView,} from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
import getConstant from "../../helper/Constanst";
import stylesDetail from "../styles/stylesDetail";

const DetailProduct = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [param, setparam] = useState("");
  const [year, setyear] = useState("");
  const [price, setPrice] = useState("");
  const [image, setimage] = useState("");

  const { id } = route.params;
  console.log("ID PRODUCT:", id);

  const [macs, setMacs] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham1/${id}/detail`)
      .then(function (response) {
        setName(response.data.mac.name);
        setparam(response.data.mac.param);
        setyear(response.data.mac.year);
        setPrice(response.data.mac.price);
        setimage(response.data.mac.image);
        console.log(
          "Name - Price -Year - Price - Image ",
          name,
          param,
          year,
          price,
          image
        );
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [airpods, setAirpods] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham2/${id}/detail`)
      .then(function (response) {
        setName(response.data.airpod.name);
        setparam(response.data.airpod.param);
        setyear(response.data.airpod.year);
        setPrice(response.data.airpod.price);
        setimage(response.data.airpod.image);
        console.log(
          "Name - Param - Year - Price - Image",
          name,
          param,
          year,
          price,
          image
        );
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [iphones, setIphones] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham3/${id}/detail`)
      .then(function (response) {
        setName(response.data.iphone.name);
        setparam(response.data.iphone.param);
        setyear(response.data.iphone.year);
        setPrice(response.data.iphone.price);
        setimage(response.data.iphone.image);
        console.log(
          "Name - Param - Year - Price - Image",
          name,
          param,
          year,
          price,
          image
        );
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [ipads, setIpads] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham4/${id}/detail`)
      .then(function (response) {
        setName(response.data.ipad.name);
        setparam(response.data.ipad.param);
        setyear(response.data.ipad.year);
        setPrice(response.data.ipad.price);
        setimage(response.data.ipad.image);
        console.log(
          "Name - Param - Year - Image",
          name,
          param,
          year,
          price,
          image
        );
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [watchs, setWatchs] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham5/${id}/detail`)
      .then(function (response) {
        setName(response.data.watch.name);
        setparam(response.data.watch.param);
        setyear(response.data.watch.year);
        setPrice(response.data.watch.price);
        setimage(response.data.watch.image);
        console.log(
          "Name - Param - Year - Price - Image",
          name,
          param,
          year,
          price,
          image
        );
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  return (
    <View style={stylesDetail.container}>
      <View>
        <View style={stylesDetail.circle}>
          <Image
            style={stylesDetail.imgProduct}
            source={{ uri: image }}
            resizeMode={"cover"}
          />
        </View>
      </View>
      <View style={stylesDetail.menuProduct}>
        <View style={stylesDetail.nameDateProduct}>
          <Text style={stylesDetail.nameProduct}>{name}</Text>
          <Text style={stylesDetail.nameProduct}>
            {param}
            <Text style={stylesDetail.dateProduct}> {year}</Text>
          </Text>
        </View>
        <Text style={stylesDetail.priceProduct}>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND
        </Text>
        <Text style={stylesDetail.colorName}>COLOR:</Text>
        <View style={stylesDetail.colorProduct}>
          <TouchableOpacity style={stylesDetail.SP}>
            <View style={stylesDetail.detailSP1}></View>
            <Text style={stylesDetail.nameSP}>Gold</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesDetail.SP}>
            <View style={stylesDetail.detailSP2}></View>
            <Text style={stylesDetail.nameSP}>Sliver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesDetail.SP}>
            <View style={stylesDetail.detailSP3}></View>
            <Text style={stylesDetail.nameSP}>Grey</Text>
          </TouchableOpacity>
        </View>
        <Text style={stylesDetail.colorName}>Memory:</Text>
        <View style={stylesDetail.colorProduct}>
          <TouchableOpacity style={stylesDetail.SP}>
            <Text style={stylesDetail.nameSP}>215GB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesDetail.SP}>
            <Text style={stylesDetail.nameSP}>512GB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesDetail.SP}>
            <Text style={stylesDetail.nameSP}>1TB</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesDetail.buttonProduct}>
          <View style={stylesDetail.buttonSP}>
            <TouchableOpacity
              style={stylesDetail.buttonDown}
              activeOpacity={0.5}
            >
              <Image
                source={require("../../assets/Group86.png")}
                style={stylesDetail.buttonDown}
              />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity style={stylesDetail.buttonUp} activeOpacity={0.5}>
              <Image
                source={require("../../assets/Group87.png")}
                style={stylesDetail.buttonDown}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={stylesDetail.buttonBuy} activeOpacity={0.5}>
            <Text style={stylesDetail.textBuy}>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;
