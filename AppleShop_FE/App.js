import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileScreen from './Scr/Profile/ProfileScreen'
import DPScreen from './Scr/DetailProduct/DPScreen'

const App = () => {
  return (
    <SafeAreaView>
      <DPScreen/>
    </SafeAreaView>
  )
}

export default App