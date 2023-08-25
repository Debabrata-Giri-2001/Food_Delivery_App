import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box, Text, Image, Heading} from 'native-base';
import {Home} from '../private/Home/index';
import {Offers} from '../private/Offers/index';
import {Cart} from '../private/Cart/index';
import {Profile} from '../private/Profile/index';
import AddButton from '../../components/containers/AddButton';
import {useTabMenu} from '../../components/context/TabContext';

const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation, route}: any) => {
  const {opened, toggleOpened} = useTabMenu();

  const getTabBarVisibility = (route: any) => {
    if (route.name === '') {
      return 'none';
    }
    return 'flex';
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: getTabBarVisibility(route),
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#FFFFFF',
          height: 80,
          width: '100%',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'column'}
              alignItems={'center'}
              rounded="lg"
              p="8px">
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1659/1659112.png',
                }}
                alt="shose_icon"
                size="28px"
                tintColor={focused ? '#1E1E1E' : '#898989'}
              />

              <Text bold color={focused ? '#1E1E1E' : '#898989'}>
                Home
              </Text>
            </Box>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Offer"
        component={Offers}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'column'}
              alignItems={'center'}
              rounded="lg"
              p="8px">
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/879/879757.png',
                }}
                alt="shose_icon"
                size="28px"
                tintColor={focused ? '#1E1E1E' : '#898989'}
              />
              <Text bold color={focused ? '#1E1E1E' : '#898989'}>
                Offers
              </Text>
            </Box>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Home}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <AddButton opened={opened} toggleOpened={toggleOpened} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'column'}
              alignItems={'center'}
              rounded="lg"
              p="8px">
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2838/2838895.png',
                }}
                alt="shose_icon"
                size="28px"
                tintColor={focused ? '#1E1E1E' : '#898989'}
              />
              <Text bold color={focused ? '#1E1E1E' : '#898989'}>
                Cart
              </Text>
            </Box>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'column'}
              alignItems={'center'}
              rounded="lg"
              p="8px">
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/7171/7171778.png',
                }}
                alt="shose_icon"
                size="26px"
                tintColor={focused ? '#1E1E1E' : '#898989'}
              />
              <Text bold color={focused ? '#1E1E1E' : '#898989'}>
                Profile
              </Text>
            </Box>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
