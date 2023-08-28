import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Text, FlatList, Image} from 'native-base';
import {FOOD_ITEM} from '../../../data/TopCategory';

const TopCategory = () => {
  return (
    <Box>
      <Text fontWeight={'800'} color={'#000000'} fontSize={22} ml={6} mt={4}>
        TOP CATEGORY
      </Text>
      <Box justifyItems={'center'} alignItems={'center'} m={1}>
        <FlatList
          horizontal={false}
          numColumns={2}
          data={FOOD_ITEM}
          renderItem={({item}) => {
            return (
              <Box bg={'#FFFFFF'} m={6} shadow={'4'}>
                <Box
                  p={4}
                  m={6}
                  alignItems={'center'}
                  rounded={'full'}
                  bg={'#F4F5FD'}
                  alignSelf={'center'}>
                  <TouchableOpacity>
                    <Image
                      h={10}
                      w={10}
                      alt="brand_logo"
                      resizeMode="contain"
                      source={{uri: item.imageUrl}}
                    />
                  </TouchableOpacity>
                </Box>
                <Text textAlign={'center'} fontWeight={'800'} fontSize={15}>
                  {item.name}
                </Text>
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default TopCategory;
