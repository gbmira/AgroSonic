import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "./src/pages/Login"
import SignUp from "./src/pages/SignUpFlux/SignUp"
import Home from "./src/pages/Home"
import SignUpAdress from "./src/pages/SignUpFlux/SignUpAdress"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){

  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, headerTransparent: true  }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: true, headerTransparent: true, headerTitle: 'Voltar', headerTintColor: '#408241' }}/>
        <Stack.Screen name="SignUpAdress" component={SignUpAdress} options={{ headerShown: true, headerTransparent: true, headerTitle: 'Voltar', headerTintColor: '#408241' }}/>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false, headerTransparent: true,  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
