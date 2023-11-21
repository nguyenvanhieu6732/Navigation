// DetailsScreen.js
import React from 'react';
import { View, Text,Button } from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View>
    <Text>Home Screen</Text>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
  );
};

export default DetailsScreen;
