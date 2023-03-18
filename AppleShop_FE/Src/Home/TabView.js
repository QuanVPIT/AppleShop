import { View, Text, Button } from 'react-native'
import React, { useState } from 'react';
import stylesHome from '../styles/stylesHome';
import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';




const TabView = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.ViewHeader}>
        <View style={stylesHome.ViewImage1}>
          <Image
            style={stylesHome.tinyLogo}
            source={require('../Images/logo.png')}
          />
          <Text style={stylesHome.TextiStore}>iStore</Text>
        </View>

        <View style={stylesHome.ViewImage2}>
          <Image
            style={stylesHome.tinyLogo2}
            source={require('../Images/chuong.png')}
          />
          <Image
            style={stylesHome.tinyLogo3}
            source={require('../Images/hinhanh.png')}
          />
        </View>

      </View>
      <View style={stylesHome.backgourdlogo}>
        <Image
          style={stylesHome.Logo}
          source={require('../Images/logo2.png')}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={stylesHome.tabs}>
          <TouchableOpacity
            style={[stylesHome.tab1, activeTab === 'Tab 1' && stylesHome.activeTab]}
            onPress={() => handleTabPress('Tab 1')}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require('../Images/imac.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[stylesHome.tab, activeTab === 'Tab 2' && stylesHome.activeTab]}
            onPress={() => handleTabPress('Tab 2')}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require('../Images/iphone.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[stylesHome.tab, activeTab === 'Tab 3' && stylesHome.activeTab]}
            onPress={() => handleTabPress('Tab 3')}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require('../Images/ipad.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[stylesHome.tab, activeTab === 'Tab 4' && stylesHome.activeTab]}
            onPress={() => handleTabPress('Tab 4')}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require('../Images/watch.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[stylesHome.tab, activeTab === 'Tab 5' && stylesHome.activeTab]}
            onPress={() => handleTabPress('Tab 5')}
          >
            <Image
              style={stylesHome.tinyLogo5}
              source={require('../Images/airpods.png')} />
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* // tab 1 */}
      <View style={stylesHome.tabContent}>
        {activeTab === 'Tab 1' && (
          <View style={stylesHome.tabText1}>
            <View style={stylesHome.tabs1}>
              <TouchableOpacity
                style={[stylesHome.tab1, activeTab === 'Tab 1.1' && stylesHome.activeTab]}
                onPress={() => handleTabPress('Tab 1.1')}
              >
                <View style={stylesHome.viewmac}>
                  <Text styles={stylesHome.textmac}>MacBook</Text>
                </View>
                <View>

                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[stylesHome.tab1, activeTab === 'Tab 1.2' && stylesHome.activeTab]}
                onPress={() => handleTabPress('Tab 1.2')}
              >
                <View style={stylesHome.viewmac}>
                  <Text styles={stylesHome.textmac}>MacBook</Text>
                </View>
                <View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      {/* //tab2 */}
      <View style={stylesHome.tabContent}>
        {activeTab === 'Tab 2' && (
          <View style={stylesHome.tabContentText2}>
          </View>
        )}
      </View>



      <View style={stylesHome.tabContent}>
        {activeTab === 'Tab 1.1' && (
          <View style={stylesHome.tabText1}>
            <View style={styles.tabs1}>
              <View>
                <Text>
                  d
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={stylesHome.tabContent}>
        {activeTab === 'Tab 1.2' && (
          <View style={stylesHome.tabContentText2}>
            <View>
              <Text>
                j
              </Text>
            </View>
          </View>
        )}

      </View>

    </View>
  )
}

export default TabView


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F0F0',

//   },
//   ViewHeader: {
//     width: '100%',
//     height: '10%',
//     justifyContent: 'space-between',
//     marginTop: '10%',
//     flexDirection: 'row',
//   },
//   ViewImage2: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     left: '-10%'
//   },
//   ViewImage1: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     left: '5%'
//   },
//   tinyLogo: {
//     left: '8.41%',
//     right: '86.21%',

//   },
//   tinyLogo3: {
//     left: 13,
//     width: 37,
//     height: 37,
//   },
//   tinyLogo2: {
//     left: -13,
//     width: 37,
//     height: 37,
//   },
//   TextiStore: {
//     width: 45,
//     height: 15,
//     left: 15,
//     marginTop: '12%',
//     fontFamily: 'Futura Md BT',
//     fontStyle: 'normal',
//     fontWeight: '800',
//     fontsize: 17,
//     lineHeight: 20,
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logo2: {

//     width: 386,
//     height: 133,
//     overflow: 'scroll',
//   },
//   backgourdlogo: {

//     alignItems: 'center',
//     overflow: 'scroll',
//   },
//   tabs: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     marginLeft: 20,


//   },
//   tab1: {
//     padding: 10,

//     marginRight: 10,
//     borderRadius: 5,

//   },
//   tabText: {
//     fontWeight: 'bold',
//     color: '#333',

//   },
//   activeTab: {

//   },
//   tabContentText: {
//   width:500,
//   height:300,
//   fontWeight: 'bold',
//   backgroundColor: 'red'
//   },

// tabContentText2: {
// width:500,
// height:300,
// fontWeight: 'bold',
// backgroundColor: 'black'
// },

// tabContentText3: {
// width:500,
// height:300,
// fontWeight: 'bold',
// backgroundColor: 'green'
// },

// tabContentText4: {
// width:500,
// height:300,
// fontWeight: 'bold',
// backgroundColor: 'blue'
// },
// tabContentText5: {
//   width:500,
//   height:300,
//   fontWeight: 'bold',
//   backgroundColor: 'blue'
//   },
//   tabContent: {

//   },
//   tinyLogo5:{
//     width:88,
//     height:88
//   }
// });
