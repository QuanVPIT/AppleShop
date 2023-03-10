import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#4caf50' }]} />
);

const TabViewExample = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
  ]);

  const renderScene = useCallback(
    ({ route }) => {
      switch (route.key) {
        case 'first':
          return <FirstRoute />;
        case 'second':
          return <SecondRoute />;
        case 'third':
          return <ThirdRoute />;
        default:
          return null;
      }
    },
    []
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );

  return (
    <TabView
      lazy
      swipeEnabled
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#333',
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: '#333',
  },
});

export default TabViewExample;