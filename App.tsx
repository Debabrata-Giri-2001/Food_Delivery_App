import { View, Text } from 'react-native'
import React from 'react'
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import { StackAllScreen } from './src/screens/auth/index';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackAllScreen />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App