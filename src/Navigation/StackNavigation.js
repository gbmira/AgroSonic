import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Grafico, Perfil, Home, Planos, SignUp, SignUpAdress, QuemSomos } from "../pages/Index"
import ShowBottomTabs from "./BottomTabs"

const Stack = createNativeStackNavigator()

export default function StackNavigation () {
    
    return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/> 
        <Stack.Screen name="SignUpAddres" component={SignUpAdress}/> 
        <Stack.Screen name="Home" component={ShowBottomTabs}/> 
    </Stack.Navigator>
)}

export function HomeNavigation(){

    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export function PerfilNavigation(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil}/>
        </Stack.Navigator>
    )
}

export function QuemSomosNavigation(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="QuemSomos" component={QuemSomos}/>
        </Stack.Navigator>
    )
}

export function GraficoNavigation(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Grafico" component={Grafico}/>
        </Stack.Navigator>
    )
}

export function PlanosNavigation(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Planos" component={Planos}/>
        </Stack.Navigator>
    )
}