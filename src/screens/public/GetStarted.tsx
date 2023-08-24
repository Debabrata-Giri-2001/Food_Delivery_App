import {View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IMAGES,FONTS} from '../../assets';
import {Box, Image, Text} from 'native-base';
import {RootStackPramList} from '../auth/StackAllScreen';
const screenHeight = Dimensions.get('screen').height;
const screenWidht = Dimensions.get('screen').width;

const GetStarted = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackPramList>>();
  return (
    <Box flex={1}>
      <Image
        position={'absolute'}
        backgroundColor={'#000000'}
        opacity={0.9}
        blurRadius={2}
        source={IMAGES.START_SCREEN}
        height={screenHeight}
        width={screenWidht}
        resizeMode="cover"
        justifyContent={'center'}
        alt="image"
      />

      <Box flex={1} alignItems={'center'} justifyContent={'center'}>
        <Text
          color={'#FFFFFF'}
          fontSize={45}
          fontWeight={'900'}
          fontFamily={'PatrickHand-Regular'}>
          FODDEl
        </Text>
        <Text
          color={'#FFFFFF'}
          fontSize={25}
          width={screenWidht / 1.2}
          fontWeight={'500'}
          textAlign={'center'}>
          WHEN HUNGRY OR IN HURRY JUST FOODLE !!
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LogIn');
          }}>
          <Text
            color={'#FFFFFF'}
            fontSize={30}
            mt={'15%'}
            bg={'#005813'}
            p={4}
            rounded={'md'}>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default GetStarted;
