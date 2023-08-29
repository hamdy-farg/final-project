import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


import { BookDetail, Home, LogScreen, SignUpage, Top, Middle } from "./screens";
import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';
import useAuth from './hooks/useAuth';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    const {user}  = useAuth();

    const [loaded] = useFonts({
            "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
        })

    if(!loaded){
        return null;
    }
  
    if (user){
        return (

            <NavigationContainer theme={theme}>
               
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Home'}
                >

                    <Stack.Screen name="Home" component= {Tabs} />
                    <Stack.Screen name = "Middle"  component={Middle}/>
    
                    {/* Screens */}
                    <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
                </Stack.Navigator>
               
            </NavigationContainer>
        
        )
    }else{
        return (

            <NavigationContainer theme={theme}>
               
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'LogScreen'}
                >
                     <Stack.Screen name = "LogScreen" component={LogScreen} />
                     <Stack.Screen name = "SignUpage" component={SignUpage} />
                    {/* Tabs */}
                </Stack.Navigator>
               
            </NavigationContainer>
        
        ) 
    }
}

export default App;



    