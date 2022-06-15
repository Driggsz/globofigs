import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './apps/Home';
import profile from './apps/profile';
import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            style:{
                backgroundColor: '#121212',
                borderTopColor: 'transparent'
            },
            activeTintColor: '#FFF',
            tabStyle:{
                paddingBottom:5,
                PaddingTop: 5,

            }



        }}
        >
            <Tab.screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="home" size={size} color={color}/>

                )
            }}
            />
            <Tab.screen 
            name="Perfil" 
            component={profile}
            options={{
                tabBarIcon: ({ size, color }) =>(
                    <Feather name="user" size={size} color={color} />
                
                )
            }}
            />

        </Tab.Navigator>
    )
}