import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TabContainer from '../../../components/containers/TabContainer';

const Offers = () => {
  return (
    <TabContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Offers</Text>
      </View>
    </TabContainer>
  );
};

export default Offers;
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
