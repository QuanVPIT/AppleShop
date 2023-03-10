import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TabView = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Tab 1' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 1')}
        >
          <Text style={styles.tabText}>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Tab 2' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 2')}
        >
          <Text style={styles.tabText}>Tab 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Tab 3' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 3')}
        >
          <Text style={styles.tabText}>Tab 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>
        {activeTab === 'Tab 1' && (
          <Text style={styles.tabContentText}>This is tab 1 content</Text>
        )}
        {activeTab === 'Tab 2' && (
          <Text style={styles.tabContentText}>This is tab 2 content</Text>
        )}
        {activeTab === 'Tab 3' && (
          <Text style={styles.tabContentText}>This is tab 3 content</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    backgroundColor: '#ccc',
    marginRight: 10,
    borderRadius: 5,
  },
  tabText: {
    fontWeight: 'bold',
    color: '#333',
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabContent: {
    paddingHorizontal: 20,
  },
  tabContentText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TabView;