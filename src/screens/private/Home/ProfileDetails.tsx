import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Box, Image, Text, Heading, Flex, Center} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileDetails = () => {
  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      p={1}
      alignItems={'center'}
      bg={'#172468'}
      borderBottomRightRadius={12}
      borderBottomLeftRadius={12}
      >
      <Flex direction="row" alignItems={'center'}>
        <Image
          alt="profile_Image"
          size="55"
          rounded={'full'}
          ml={4}
          source={{
            uri: 'https://instagram.fbbi3-1.fna.fbcdn.net/v/t51.2885-19/293364187_565805618365740_820940581388127509_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbbi3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tZwsfqZct8gAX95iiPw&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCZHzVNS0EEeEjlisobZKSf5yuB4CABgH_pJxyD_njVxg&oe=64F216E7&_nc_sid=ee9879',
          }}
        />
        <Box p={3}>
          <Text fontWeight={'medium'} color={'#FFFFFF'} fontSize={14}>
            Welcome
          </Text>
          <Heading fontWeight={'800'} fontSize={20} color={'#FFFFFF'}>
            Debabrata Giri
          </Heading>
        </Box>
      </Flex>
      <Flex direction="row">
        <Box p={2}>
          <TouchableOpacity>
            <Icon name="search" size={40} color={'#FFFFFF'} />
          </TouchableOpacity>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileDetails;
