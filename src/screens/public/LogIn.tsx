import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets';
import {Box, Image, Text, Input, FlatList} from 'native-base';
import {LoginBrand} from '../../data/LoginBrand';

const screenWidht = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const LogIn = () => {
  return (
    <SafeAreaView>
      {/* Log in page Image Box */}
      <Box>
        <Image
          source={IMAGES.LOG_IN}
          w={screenWidht}
          alt="login_pic"
          h={screenHeight / 4.5}
          blurRadius={3}
          borderBottomRightRadius={32}
          borderBottomLeftRadius={32}
          backgroundColor={'#000000'}
          opacity={0.8}
        />
        <Text
          position={'absolute'}
          ml={4}
          color={'#FFF'}
          fontSize={35}
          fontWeight={'900'}
          mt={'35%'}>
          FODDEL
        </Text>
      </Box>

      {/* Email Input field */}
      <Box mt={'20%'}>
        <Text pl={7} mb={2} color={'#171717'} bold fontSize={20}>
          Email
        </Text>
        <Input
          alignSelf={'center'}
          rounded={'xl'}
          size={'xl'}
          w={screenWidht - 50}
          bg={'#cbffde80'}
        />
      </Box>
      {/* Password Input Field */}
      <Box mt={'5%'}>
        <Text pl={7} mb={2} color={'#171717'} bold fontSize={20}>
          Password
        </Text>
        <Input
          alignSelf={'center'}
          rounded={'xl'}
          size={'xl'}
          w={screenWidht - 50}
          bg={'#cbffde80'}
        />
      </Box>
      {/* Forgot Password */}
      <TouchableOpacity>
        <Text
          color={'#000000'}
          textAlign={'center'}
          mt={'10%'}
          fontSize={16}
          fontWeight={'500'}>
          Forget password?
        </Text>
      </TouchableOpacity>

      {/* LogIn BTN */}
      <TouchableOpacity>
        <Text
          color={'#FFFFFF'}
          fontSize={18}
          mt={'8%'}
          fontWeight={'800'}
          alignSelf={'center'}
          textAlign={'center'}
          w={screenWidht / 2.5}
          bg={'#005813'}
          p={4}
          rounded={'xl'}>
          LOGIN
        </Text>
      </TouchableOpacity>

      {/* Company Login */}
      <Box alignItems={'center'} mt={'8%'}>
        <FlatList
          horizontal={true}
          data={LoginBrand}
          renderItem={({item}) => {
            return (
              <Box m={4} p={2} bg={'#fdfdfd'} rounded={'full'} shadow={1}>
                <TouchableOpacity>
                  <Image
                    source={{uri: item.imageUrl}}
                    h={10}
                    w={10}
                    alt="Login_Logo"
                  />
                </TouchableOpacity>
              </Box>
            );
          }}
        />
      </Box>

      {/* Dont have accoutn */}
      <Box p={2}>
        <Text
          textAlign={'center'}
          fontSize={18}
          fontWeight={'600'}
          color={'#171717'}>
          Dont have an account ? <Text color={'#EF1111F0'}>Sign up</Text>
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default LogIn;
const styles = StyleSheet.create({});
