import {View, StyleSheet} from 'react-native';
import React from 'react';
import TabContainer from '../../../components/containers/TabContainer';
import {Box} from 'native-base';
import {ProfileDetails, OfferSlide, TopCategory} from './index';
const Home = () => {
  return (
    <TabContainer>
      <Box>
        <ProfileDetails />
        <OfferSlide />
        <TopCategory />
      </Box>
    </TabContainer>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#5a35ff',
  },
});
