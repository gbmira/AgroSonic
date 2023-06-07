import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Entypo, Feather } from '@expo/vector-icons'

import {
    HomeNavigation,
    GraficoNavigation,
    PerfilNavigation,
    PlanosNavigation,
    QuemSomosNavigation
} from "./StackNavigation"

const Tab = createBottomTabNavigator()

export default function ShowBottomTabs(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="HomeTab" component={HomeNavigation}/>
            <Tab.Screen name="PlanosTab" component={PlanosNavigation}/>
            <Tab.Screen name="PerfilTab" component={PerfilNavigation}/>
            <Tab.Screen name="GraficoTab" component={GraficoNavigation}/>
            <Tab.Screen name="QuemSomosTab" component={QuemSomosNavigation}/>
        </Tab.Navigator>
    )
}