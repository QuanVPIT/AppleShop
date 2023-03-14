import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from '../styles/styles';
import { Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import getConstant from '../../helper/Constanst';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [activeTab2, setActiveTab2] = useState('Tab 1.1');

  const handleTabPress = (tabName) => {

    setActiveTab(tabName);
  };
  const handleTabPress1 = (tabName) => {
    setActiveTab2(tabName);
  };
  const tab1 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1('Tab 1.1');
  };
  const tab2 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1('Tab 2.1');
  };
  const tab3 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1('Tab 3.1');
  };
  const tab4 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1('Tab 4.1');
  };
  const tab5 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1('Tab 5.1');
  };
  const [macs, setMacs] = useState([]);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham1`)
      .then(function (response) {
        console.log('response: ', response.data);
        setMacs(response.data);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);
  const [airpods, setAirpods] = useState([]);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham2`)
      .then(function (response) {
        console.log('response: ', response.data);
        setAirpods(response.data);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);
  const [iphones, setIphones] = useState([]);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham3`)
      .then(function (response) {
        console.log('response: ', response.data);
        setIphones(response.data);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);
  const [ipads, setIpads] = useState([]);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham4`)
      .then(function (response) {
        console.log('response: ', response.data);
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
        console.log('response: ', response.data);
        setWatchs(response.data);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);

  const renderItem = ({ item }) => {
    const { name, year, image } = item;
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: image }} resizeMode={'cover'} />
        <View style={styles.table}>
          <View style={styles.year1}>
            <Text style={styles.year}>{year}</Text>
          </View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.Detail1}>
            <Text style={styles.Detail}>Detail</Text>
          </View>
        </View>
      </View>
    )
  };
  return (
    <View style={styles.container}>
      <View style={styles.ViewHeader}>
        <View style={styles.ViewImage1}>
          <Image
            style={styles.tinyLogo}
            source={require('../Images/logo.png')}
          />
          <Text style={styles.TextiStore}>iStore</Text>
        </View>

        <View style={styles.ViewImage2}>
          <Image
            style={styles.tinyLogo2}
            source={require('../Images/chuong.png')}
          />
          <Image
            style={styles.tinyLogo3}
            source={require('../Images/hinhanh.png')}
          />
        </View>






      {/* // tab 1 */}

      {activeTab === 'Tab 1' && (
        <View style={styles.tabText1}>
          <View style={styles.tabs1}>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 1.1' && styles.activeTab && styles.custumTab]}
              onPress={() => handleTabPress1('Tab 1.1')}>
              <View style={styles.viewmac}>
                <Text styles={styles.textmac}>MacBook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 1.2' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 1.2')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textimac}>iMac</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 1.3' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 1.3')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textmac}>Mac mini</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 1.4' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 1.4')}
            >
              <View style={styles.viewmacdisplays}>
                <Text style={styles.textmacdisplays}>Mac Displays</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      )}
      {/* //tab2 */}
      {activeTab === 'Tab 2' && (
        <View style={styles.tabText1}>
          <View style={styles.tabs1}>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 2.1' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 2.1')}
            >
              <View style={styles.viewmac}>
                <Text styles={styles.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 2.2' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 2.2')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textimac}>iPhone 11</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 2.3' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 2.3')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textmac}>iPhone 12</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 2.4' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 2.4')}
            >
              <View style={styles.viewmacdisplays}>
                <Text style={styles.textmacdisplays}>iPhone 13</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* //tab3 */}

      {activeTab === 'Tab 3' && (
        <View style={styles.tabText1}>
          <View style={styles.tabs1}>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 3.1' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 3.1')}
            >
              <View style={styles.viewmac}>
                <Text styles={styles.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 3.2' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 3.2')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textimac}>ipad Pro</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 3.3' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 3.3')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textmac}>ipad Air</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 3.4' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 3.4')}
            >
              <View style={styles.viewmacdisplays}>
                <Text style={styles.textmacdisplays}>ipad Mini</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}


      {/* tab4 */}
      {activeTab === 'Tab 4' && (
        <View style={styles.tabText1}>
          <View style={styles.tabs1}>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 4.1' && styles.activeTab && styles.custumTab]}
              onPress={() => handleTabPress1('Tab 4.1')}>
              <View style={styles.viewmac}>
                <Text styles={styles.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 4.2' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 4.2')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textimac}>Series5</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 4.3' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 4.3')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textmac}>Series6</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 4.4' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 4.4')}
            >
              <View style={styles.viewmacdisplays}>
                <Text style={styles.textmacdisplays}>Series7</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      )}

      {/* tab5 */}
      {activeTab === 'Tab 5' && (
        <View style={styles.tabText1}>
          <View style={styles.tabs1}>
            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 5.1' && styles.activeTab && styles.custumTab]}
              onPress={() => handleTabPress1('Tab 5.1')}>
              <View style={styles.viewmac}>
                <Text styles={styles.textmac}>Semua</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 5.2' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 5.2')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textimac}>Airpods Max</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 5.3' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 5.3')}
            >
              <View style={styles.viewimac}>
                <Text style={styles.textmac}>Airpods Pro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab1, activeTab === 'Tab 5.4' && styles.activeTab]}
              onPress={() => handleTabPress1('Tab 5.4')}
            >
              <View style={styles.viewmacdisplays}>
                <Text style={styles.textmacdisplays}>Airpods Pods</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      )}


      {/* tab1 nho chuyen api */}
      {activeTab2 === 'Tab 1.1' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={macs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 1.2' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={macs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 1.3' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={macs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 1.4' && (
        <View style={{ flex: 2 }}>
          <View style={{}}>
            <FlatList
              numColumns={2}
              data={macs}
              renderItem={renderItem}
              keyExtractor={item => item._id}
            />
          </View>
        </View>
      )}


      {/* tab2 nho chuyen api */}
      {activeTab2 === 'Tab 2.1' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 2.2' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 2.3' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 2.4' && (
        <View style={{ flex: 2 }}>
          <View style={{}}>
            <FlatList
              numColumns={2}
              data={iphones}
              renderItem={renderItem}
              keyExtractor={item => item._id}
            />
          </View>
        </View>
      )}

      {/* tab3 nho chuyen api */}
      {activeTab2 === 'Tab 3.1' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={ipads}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 3.2' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={ipads}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 3.3' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={ipads}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 3.4' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={iphones}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}

      {/* tab4 nho chuyen api */}
      {activeTab2 === 'Tab 4.1' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 4.2' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 4.3' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 4.4' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={watchs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}

      {/* tab5 nho chuyen api */}
      {activeTab2 === 'Tab 5.1' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 5.2' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 5.3' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      {activeTab2 === 'Tab 5.4' && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={airpods}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
    </View>
      <View style={{ height: 88, marginTop: 15 }}>
        <ScrollView horizontal={true}>
          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/imac.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>
          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/iphone.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>

          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/ipad.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>

          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/watch.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>
          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/airpods.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ height: 35, marginTop: 15 }}>
        <ScrollView horizontal={true}>
          <View style={{ height: 35, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "black", borderRadius: 25 }}>
              <Text style={styles.TextScrollView}>
                MacBoock
              </Text>
            </View>
          </View>
          <View style={{ height: 35, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "#FFFFFF", borderRadius: 25 }}>
              <Text style={styles.TextScrollView2}>
                IMac
              </Text>
            </View>
          </View>
          <View style={{ height: 35, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "#FFFFFF", borderRadius: 25 }}>
              <Text style={styles.TextScrollView3}>
                MacMini
              </Text>
            </View>
          </View>
          <View style={{ height: 35, width: 100, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "#FFFFFF", borderRadius: 25 }}>
              <Text style={styles.TextScrollView4}>
                Mac Displays
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{ height: 500, marginTop: 15 }}>
        <ScrollView>
        <ScrollView horizontal={true}>
          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>

          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>
        </ScrollView>
          {/* scrollview2  */}
        <ScrollView horizontal={true}>
          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>

          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>
        </ScrollView>
        {/* scrollview3 */}
        <ScrollView horizontal={true}>
          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>

          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>
        </ScrollView>
        </ScrollView>
       
        
        <View>
       
        </View>
      </View>
    </View>
  )
}

export default Homepage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',

  },
  ViewHeader: {
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    marginTop: '10%',
    flexDirection: 'row',
  },
  ViewImage2: {
    flexDirection: 'row',
    justifyContent: 'center',
    left: '-10%'
  },
  ViewImage1: {
    flexDirection: 'row',
    justifyContent: 'center',
    left: '5%'
  },
  tinyLogo: {
    left: '8.41%',
    right: '86.21%',

  },
  tinyLogo3: {
    left: 13,
    width: 37,
    height: 37,
  },
  tinyLogo2: {
    left: -13,
    width: 37,
    height: 37,
  },
  TextiStore: {
    width: 45,
    height: 15,
    left: 15,
    marginTop: '12%',
    fontFamily: 'Futura Md BT',
    fontStyle: 'normal',
    fontWeight: '800',
    fontsize: 17,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  logo2: {

    width: 386,
    height: 133,
    overflow: 'scroll',
  },
  backgourdlogo: {

    alignItems: 'center',
    overflow: 'scroll',
  },
  TextScrollView: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  },
  TextScrollView2: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  }, TextScrollView3: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  },
  TextScrollView4: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  },
  TextScrollViewhome: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
    width: 135,
    height: 35,
    top: 120,
    left: 24,
    alignItems: 'center',
  },
  TextScrollViewhome1: {

    fontStyle: 'normal',
    fontWeight: "500",
    fontSize: 8,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: "##242424"
  },
  TextScrollViewhome2: {
  color:"#ffffff",
 
  },

});

