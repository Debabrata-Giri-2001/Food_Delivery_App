import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  Button,
  FlatList,
} from 'react-native';
import {Box, Center} from 'native-base';
type CarouselItem = {
  id: string;
  imageUrl: string;
};

interface Props {
  carouselData: CarouselItem[];
}

const carouselData: CarouselItem[] = [
  {
    id: '1',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-japanese-restaurant-sale-banner-template-with-traditional-food_23-2149492469.jpg',
  },
  {
    id: '2',
    imageUrl:
      'https://img.freepik.com/free-vector/happy-eid-greetings-green-black-background-islamic-social-media-banner_1340-17190.jpg',
  },
  {
    id: '3',
    imageUrl:
      'https://img.freepik.com/free-vector/big-sale-banner-template-design_157027-665.jpg',
  },
];
const PicSlide = () => {
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<CarouselItem>>(null);

  useEffect(() => {
    setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    },3000);
  }, []);

  const handelScroll = (event: any) => {
    const screenPosition = event.nativeEvent.contentOffset.x;
    const index = screenPosition / screenWidth;
    setActiveIndex(Math.round(index));
  };

  //Render Dot
  const renderDotItem = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex == index) {
        return (
          <View
            style={{
              height: 10,
              width: 40,
              backgroundColor: '#D9D9D9',
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          />
        );
      } else {
        return (
          <View
            key={index}
            style={{
              height: 10,
              width: 10,
              backgroundColor: '#D9D9D9',
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          />
        );
      }
    });
  };

  return (
    <Box
      m={0}
      justifyItems={'center'}
      alignItems={'center'}
      w={screenWidth - 25}>
      <FlatList
        data={carouselData}
        ref={flatListRef}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handelScroll}
        onScrollToIndexFailed={info => {
          console.warn('onScrollToIndexFailed:', info);
        }}
        renderItem={({item}) => (
          <Box m={5} alignSelf={'center'}>
            <Image
              source={{uri: item.imageUrl}}
              style={{
                height: 160,
                width: screenWidth - 30,
                borderRadius: 12,
              }}
            />
          </Box>
        )}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {renderDotItem()}
      </View>
    </Box>
  );
};

export default PicSlide;