import { View, Text, Button } from 'react-native'
import React, { useState } from 'react';
import styles from '../styles/styles';
import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import { TabView, SceneMap } from 'react-native-tab-view';


const Homepage = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
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

      </View>
      <View style={styles.backgourdlogo}>
        <Image
          style={styles.Logo}
          source={require('../Images/logo2.png')}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab1, activeTab === 'Tab 1' && styles.activeTab]}
            onPress={() => handleTabPress('Tab 1')}
          >
            <Image
              style={styles.tinyLogo5}
              source={require('../Images/imac.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab 2' && styles.activeTab]}
            onPress={() => handleTabPress('Tab 2')}
          >
            <Image
              style={styles.tinyLogo5}
              source={require('../Images/iphone.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab 3' && styles.activeTab]}
            onPress={() => handleTabPress('Tab 3')}
          >
            <Image
              style={styles.tinyLogo5}
              source={require('../Images/ipad.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab 4' && styles.activeTab]}
            onPress={() => handleTabPress('Tab 4')}
          >
            <Image
              style={styles.tinyLogo5}
              source={require('../Images/watch.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab 5' && styles.activeTab]}
            onPress={() => handleTabPress('Tab 5')}
          >
            <Image
              style={styles.tinyLogo5}
              source={require('../Images/airpods.png')} />
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* // tab 1 */}
      <View style={styles.tabContent}>
        {activeTab === 'Tab 1' && (
          <View style={styles.tabText1}>
            
            <View style={styles.tabs1}>

             

                
                <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1.1' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1.1')}
              >
                <View style={styles.viewmac}>
                  <Text styles={styles.textmac}>MacBook</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1.2' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1.2')}
              >
                <View style={styles.viewimac}>
                  <Text style={styles.textimac}>iMac</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1.3' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1.3')}
              >
                <View style={styles.viewimac}>
                  <Text style={styles.textmac}>Mac mini</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1.4' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1.4')}
              >
                <View style={styles.viewmacdisplays}>
                  <Text style={styles.textmacdisplays}>Mac Displays</Text>
                </View>
              </TouchableOpacity>
                

              


            </View>
          </View>
        )}
      </View>
      {/* //tab2 */}
      <View style={styles.tabContent}>
        {activeTab === 'Tab 2' && (
          <View style={styles.tabContentText2}>

          </View>
        )}

      </View>
      {/* //tab3 */}
      <View style={styles.tabContent}>
        {activeTab === 'Tab 3' && (
          <View style={styles.tabContentText3}>

          </View>
        )}

      </View>
      {/* tab4 */}
      <View style={styles.tabContent}>
        {activeTab === 'Tab 4' && (
          <View style={styles.tabContentText4}>

          </View>
        )}
      </View>
      {/* tab5 */}
      <View style={styles.tabContent}>
        {activeTab === 'Tab 5' && (
          <View style={styles.tabContentText4}>

          </View>
        )}
      </View>

      <View>
        <View style={styles.tabContent}>
          {activeTab === 'Tab 1.1' && (
            <View style={styles.tabText1}>
              <View style={styles.tabs1}>
                <View>
                  <Text>
                    MacBook
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={styles.tabContent}>
          {activeTab === 'Tab 1.2' && (
            <View style={styles.tabContentText2}>
              <View>
                <Text>
                  iMac
                </Text>
              </View>
            </View>
          )}

        </View>

        <View style={styles.tabContent}>
          {activeTab === 'Tab 1.3' && (
            <View style={styles.tabContentText2}>
              <View>
                <Text>

                </Text>
              </View>
            </View>
          )}

        </View>

        <View style={styles.tabContent}>
          {activeTab === 'Tab 1.4' && (
            <View style={styles.tabContentText2}>
              <View>
                <Text>
                  j
                </Text>
              </View>
            </View>
          )}

        </View>
      </View>
    </View>
  )
}

export default Homepage


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
