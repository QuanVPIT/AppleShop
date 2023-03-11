import { View, Text, Button } from 'react-native'
import React, { useState } from 'react';
import styles from '../styles/styles';
import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';


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
                style={[styles.tab1, activeTab === 'Tab 1' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1')}
              >
                <View style={styles.viewmac}>
                  <Text styles={styles.textmac}>MacBook</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1')}
              >
                <View style={styles.viewimac}>
                  <Text style={styles.textimac}>iMac</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1')}
              >
                <View style={styles.viewimac}>
                  <Text style={styles.textimac}>iMac</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1')}
              >
                <View style={styles.viewimac}>
                  <Text style={styles.textimac}>iMac</Text>
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
    </View>
  )
};
export default Homepage
