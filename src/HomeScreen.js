import {DarkTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';

const HomeScreen = () => {
  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('DetailsScreen')}
    //   />
    // </View>
    <View>
      <StatusBar backgroundColor="black" />
    </View>
  );
};

export default HomeScreen;
