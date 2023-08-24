import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../assets';
import {
  Box,
  Image,
  Text,
  Input,
  FlatList,
  Pressable,
  HStack,
} from 'native-base';
import {LoginBrand} from '../../data/LoginBrand';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackPramList} from '../auth/StackAllScreen';

const screenWidht = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const SignUp = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackPramList>>();

  return (
    <SafeAreaView>
      {/* Log in page Image Box */}
      <Box>
        <Image
          source={IMAGES.SIGN_UP}
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
      {/* Name Input field */}
      <Box mt={'10%'}>
        <Text pl={7} mb={2} color={'#171717'} bold fontSize={20}>
          User Name
        </Text>
        <LinearGradient
          colors={['#407cff5a', '#40ff804f', '#407cff5f']}
          style={styles.linearGradient}>
          <Input
            variant="unstyled"
            alignSelf={'center'}
            size={'2xl'}
            borderRadius={14}
            w={screenWidht - 50}
          />
        </LinearGradient>
      </Box>
      {/* Email Input field */}
      <Box mt={'2%'}>
        <Text pl={7} mb={2} color={'#171717'} bold fontSize={20}>
          Email
        </Text>
        <LinearGradient
          colors={['#407cff5a', '#40ff804f', '#407cff5f']}
          style={styles.linearGradient}>
          <Input
            variant="unstyled"
            alignSelf={'center'}
            size={'2xl'}
            borderRadius={14}
            w={screenWidht - 50}
          />
        </LinearGradient>
      </Box>

      {/* Password Input Field */}
      <Box mt={'2%'}>
        <Text pl={7} mb={2} color={'#171717'} bold fontSize={20}>
          Password
        </Text>
        <LinearGradient
          colors={['#407cff5a', '#40ff804f', '#407cff5f']}
          style={styles.linearGradient}>
          <Input
            variant="unstyled"
            alignSelf={'center'}
            size={'2xl'}
            borderRadius={14}
            w={screenWidht - 50}
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Pressable
                style={styles.visibility}
                onPress={() => setShow(!show)}>
                <Icon
                  name={show ? 'visibility' : 'visibility-off'}
                  size={25}
                  color="black"
                />
              </Pressable>
            }
          />
        </LinearGradient>
      </Box>
      {/* Forgot Password */}
      <TouchableOpacity>
        <Text
          color={'#000000'}
          textAlign={'center'}
          mt={'5%'}
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
          mt={'5%'}
          fontWeight={'800'}
          alignSelf={'center'}
          textAlign={'center'}
          w={screenWidht / 2.5}
          bg={'#005813'}
          p={4}
          rounded={'xl'}>
          SIGNUP
        </Text>
      </TouchableOpacity>

      {/* Company Login */}
      <Box alignItems={'center'} mt={'5%'}>
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
      <HStack p={2} justifyContent="center">
        <Text fontSize={18} fontWeight={'600'} color={'#171717'}>
          Already Existing ?
        </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('LogIn')}
        >
          <Text color={'#EF1111F0'} fontSize={18} fontWeight={'600'}>
            Sign up
          </Text>
        </TouchableOpacity>
      </HStack>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  linearGradient: {
    width: screenWidht - 50,
    alignSelf: 'center',
    borderRadius: 14,
  },
  visibility: {
    marginRight: 12,
  },
});
