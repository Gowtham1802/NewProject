// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';
// import backgroundImage from '../assets/pexels-irina.jpg';
const Stack = createStackNavigator();

function ScreenA() {
  return <View></View>;
}

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Screen A" component={ScreenA} />
      </Stack.Navigator> */}
      <Text>Screen A</Text>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: 'black',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: '#5D8896',
    opacity: 0.9,
    padding: 20,
    gap: 15,
  },
  container2: {
    width: '40%',
    height: '30%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#555',
    backgroundColor: '#A3CEDC',
    borderRadius: 10,
  },
  container3: {
    width: '60%',
    height: '40%',
    flexDirection: 'column',
    gap: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#555',
    backgroundColor: '#A3CEDC',
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
    textTransform: 'uppercase',
  },
  text1: {
    width: 150,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: '#36454F',
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
  },
  container: {
    width: '100%',
    height: '50%',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#728FCE',
  },
  container4: {
    width: '50%',
    height: '70%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#555',
    backgroundColor: '#A3CEDC',
    borderRadius: 10,
  },
  container0: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default App;
