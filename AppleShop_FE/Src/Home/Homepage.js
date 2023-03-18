import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";
import getConstant from "../../helper/Constanst";
import stylesHome from "./../styles/stylesHome";

const Homepage = ({ navigation }) => {
  const handlePress = (id) => {
    navigation.navigate("DetailProduct", { id: id });
  };

  const goto = () => {
    navigation.navigate("ProfileScreen");
  };
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [activeTab2, setActiveTab2] = useState("Tab 1.1");
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  const handleTabPress1 = (tabName) => {
    setActiveTab2(tabName);
  };
  const tab1 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1("Tab 1.1");
  };
  const tab2 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1("Tab 2.1");
  };
  const tab3 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1("Tab 3.1");
  };
  const tab4 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1("Tab 4.1");
  };
  const tab5 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1("Tab 5.1");
  };
  const [macs, setMacs] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham1`)
      .then(function (response) {
        // console.log('response: ', response.data);
        setMacs(response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [airpods, setAirpods] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham2`)
      .then(function (response) {
        // console.log('response: ', response.data);
        setAirpods(response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [iphones, setIphones] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham3`)
      .then(function (response) {
        // console.log('response: ', response.data);
        setIphones(response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [ipads, setIpads] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham4`)
      .then(function (response) {
        // console.log('response: ', response.data);
        setIpads(response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const [watchs, setWatchs] = useState([]);
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham5`)
      .then(function (response) {
        //   console.log('response: ', response.data);
        setWatchs(response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);

  const renderItem = ({ item }) => {
    const { name, year, image } = item;
    return (
      <View style={stylesHome.item}>
        <Image
          style={stylesHome.image}
          source={{ uri: image }}
          resizeMode={"cover"}
        />
        <View style={stylesHome.table}>
          <View style={stylesHome.year1}>
            <Text style={stylesHome.year}>{year}</Text>
          </View>
          <Text style={stylesHome.name}>{name}</Text>
          <View style={stylesHome.Detail1}>
            <TouchableOpacity onPress={() => handlePress(item._id)}>
              <Text style={stylesHome.Detail}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.ViewHeader}>
        <View style={stylesHome.ViewImage1}>
          <Image
            style={stylesHome.tinyLogo}
            source={require("../Images/logo.png")}
          />
          <Text style={stylesHome.TextiStore}>iStore</Text>
        </View>

        <View style={stylesHome.ViewImage2}>
          <Image
            style={stylesHome.tinyLogo2}
            source={require("../Images/chuong.png")}
          />
          <TouchableOpacity onPress={goto}>
          <Image
            style={stylesHome.tinyLogo3}
            source={require("../Images/hinhanh.png")}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={stylesHome.backgourdlogo}>
        <Image
          style={stylesHome.Logo}
          source={require("../Images/logo2.png")}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0.1 }}
      >
        <View style={stylesHome.tabs}>
          <TouchableOpacity
            style={[
              stylesHome.tab1,
              activeTab === "Tab 1" && stylesHome.activeTab,
            ]}
            onPress={() => tab1("Tab 1")}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require("../Images/Mac.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              stylesHome.tab1,
              activeTab === "Tab 2" && stylesHome.activeTab,
            ]}
            onPress={() => tab2("Tab 2")}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require("../Images/iphone.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              stylesHome.tab1,
              activeTab === "Tab 3" && stylesHome.activeTab,
            ]}
            onPress={() => tab3("Tab 3")}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require("../Images/ipad.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              stylesHome.tab1,
              activeTab === "Tab 4" && stylesHome.activeTab,
            ]}
            onPress={() => tab4("Tab 4")}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require("../Images/watch.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              stylesHome.tab1,
              activeTab === "Tab 5" && stylesHome.activeTab,
            ]}
            onPress={() => tab5("Tab 5")}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require("../Images/airpods.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* // tab 1 */}

      {activeTab === "Tab 1" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.1" &&
                  stylesHome.activeTab &&
                  stylesHome.custumTab,
              ]}
              onPress={() => handleTabPress1("Tab 1.1")}
            >
              <View style={stylesHome.viewmac}>
                <Text styles={stylesHome.textmac}>MacBook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.2" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 1.2")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textimac}>iMac</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.3" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 1.3")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textmac}>Mac mini</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.4" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 1.4")}
            >
              <View style={stylesHome.viewmacdisplays}>
                <Text style={stylesHome.textmacdisplays}>Mac Displays</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* //tab2 */}
      {activeTab === "Tab 2" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.1" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 2.1")}
            >
              <View style={stylesHome.viewmac}>
                <Text styles={stylesHome.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.2" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 2.2")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textimac}>iPhone 11</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.3" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 2.3")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textmac}>iPhone 12</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.4" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 2.4")}
            >
              <View style={stylesHome.viewmacdisplays}>
                <Text style={stylesHome.textmacdisplays}>iPhone 13</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* //tab3 */}

      {activeTab === "Tab 3" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.1" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 3.1")}
            >
              <View style={stylesHome.viewmac}>
                <Text styles={stylesHome.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.2" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 3.2")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textimac}>ipad Pro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.3" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 3.3")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textmac}>ipad Air</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.4" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 3.4")}
            >
              <View style={stylesHome.viewmacdisplays}>
                <Text style={stylesHome.textmacdisplays}>ipad Mini</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* tab4 */}
      {activeTab === "Tab 4" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.1" &&
                  stylesHome.activeTab &&
                  stylesHome.custumTab,
              ]}
              onPress={() => handleTabPress1("Tab 4.1")}
            >
              <View style={stylesHome.viewmac}>
                <Text styles={stylesHome.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.2" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 4.2")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textimac}>Series5</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.3" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 4.3")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textmac}>Series6</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.4" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 4.4")}
            >
              <View style={stylesHome.viewmacdisplays}>
                <Text style={stylesHome.textmacdisplays}>Series7</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* tab5 */}
      {activeTab === "Tab 5" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.1" &&
                  stylesHome.activeTab &&
                  stylesHome.custumTab,
              ]}
              onPress={() => handleTabPress1("Tab 5.1")}
            >
              <View style={stylesHome.viewmac}>
                <Text styles={stylesHome.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.2" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 5.2")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textimac}>Airpods Max</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.3" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 5.3")}
            >
              <View style={stylesHome.viewimac}>
                <Text style={stylesHome.textmac}>Airpods Pro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.4" && stylesHome.activeTab,
              ]}
              onPress={() => handleTabPress1("Tab 5.4")}
            >
              <View style={stylesHome.viewmacdisplays}>
                <Text style={stylesHome.textmacdisplays}>Airpods Pods</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* tab1 nho chuyen api */}
      {activeTab2 === "Tab 1.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={macs}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 1.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={macs}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 1.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={macs}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 1.4" && (
        <View style={{ flex: 2 }}>
          <View style={{}}>
            <FlatList
              numColumns={2}
              data={macs}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
      )}

      {/* tab2 nho chuyen api */}
      {activeTab2 === "Tab 2.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 2.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 2.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 2.4" && (
        <View style={{ flex: 2 }}>
          <View style={{}}>
            <FlatList
              numColumns={2}
              data={iphones}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
      )}

      {/* tab3 nho chuyen api */}
      {activeTab2 === "Tab 3.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={ipads}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 3.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={ipads}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 3.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={ipads}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 3.4" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}

      {/* tab4 nho chuyen api */}
      {activeTab2 === "Tab 4.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 4.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 4.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 4.4" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}

      {/* tab5 nho chuyen api */}
      {activeTab2 === "Tab 5.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 5.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 5.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 5.4" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </View>
  );
};
export default Homepage;
