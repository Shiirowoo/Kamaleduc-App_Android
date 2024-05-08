import * as React from 'react';
import {AppRegistry} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Screens/App/home'
import Game from './Screens/App/games'
import Profile from './Screens/App/profile'

const Tab = createBottomTabNavigator()

const AppStart = ({ navigation }) => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Games' component={Game} options={{
                title: 'Games',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'purple',
                },
                headerTintColor: 'white',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='gamepad-variant-outline' color={color} size={size}/>
                ),
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray'
            }
        }/>
            <Tab.Screen name='Home' component={Home} options={{
                title: 'Home',
                headerTitleAlign: 'center',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='home' color={color} size={size}/>
                ),
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray'
            }
        }/>
        <Tab.Screen name='Profile' component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='card-account-details' color={color} size={size}/>
                ),
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray'
            }
        }/>
        </Tab.Navigator>
    )
}

AppRegistry.registerComponent('AppStart', () => AppStart)

export default AppStart