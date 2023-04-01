import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Main from './Scr/Main';
import { mystore } from './Scr/Redux/MyStore';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={mystore}>
      <Main/>
    </Provider>
  )
}

export default App