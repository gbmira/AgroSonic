import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/pages/Login"
import SignUp from "./src/pages/SignUpFlux/SignUp"
import Home from "./src/pages/Home"
import Perfil from "./src/pages/Perfil"
import Grafico from "./src/pages/Grafico"
import Planos from "./src/pages/Planos"
import QuemSomos from "./src/pages/QuemSomos"
import SignUpAdress from "./src/pages/SignUpFlux/SignUpAdress"
import ButtonMic from './components/ButtonMic';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons'
import { UserProvider } from './contexts/UserContext.js';
import CadastroAudio from './src/pages/CadastroAudio';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#408241',
      tabBarInactiveTintColor: '#80c054',
      tabBarStyle: {
        backgroundColor: '#A8EFAF',
        borderTopColor: '#98E09F',
        height: 100
      },
      headerShown: false
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Planos"
        component={Planos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="feather" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Grafico"
        component={Grafico}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ state, size, color }) => (
            <ButtonMic size={size} color={color} state={state} />
          )
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="QuemSomos"
        component={QuemSomos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="users" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, headerTransparent: true }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: true, headerTransparent: true, headerTintColor: '#408241', headerBackTitleVisible:false, headerLeftLabelVisible: false }} />
          <Stack.Screen name="SignUpAdress" component={SignUpAdress} options={{ headerShown: true, headerTransparent: true, headerTintColor: '#408241',  headerBackTitleVisible:false }} />
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false, headerTransparent: true, }} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
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
