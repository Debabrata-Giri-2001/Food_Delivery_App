import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, LogIn, SignUp} from '../public';
import BottomTabs from './BottomTabs';
import {TabContextProvider} from '../../components/context/TabContext';

export type RootStackPramList = {
  StartScreen: undefined;
  LogIn: undefined;
  SignUp: undefined;
  ButtomTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();

const StackAllScreen = () => {
  return (
    <TabContextProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="StartScreen">
          <Stack.Screen
            name="StartScreen"
            component={GetStarted}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ButtomTab"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TabContextProvider>
  );
};

export default StackAllScreen;
