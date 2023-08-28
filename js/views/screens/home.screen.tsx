import { Screen } from '../common';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { WelcomeScreen } from './welcome.screen';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTags, faStore, faBoxArchive, faUser, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export const HomeScreen = () => {
    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"

    return (
        <Tab.Navigator inactiveColor='#B8B8B8' activeColor='#00C8E3' barStyle={{backgroundColor: '#2D2D2D'}}>
            <Tab.Screen options={{tabBarIcon: ({color}) => <FontAwesomeIcon color={color} size={30} icon={faTags} />}} name="Store" component={WelcomeScreen} />
            <Tab.Screen options={{tabBarIcon: ({color}) => <FontAwesomeIcon color={color} size={30} icon={faBoxArchive} />}} name="Colection" component={WelcomeScreen} />
            <Tab.Screen options={{tabBarIcon: ({color}) => <FontAwesomeIcon color={color} size={30} icon={faChartBar} />}} name="Feed" component={WelcomeScreen} />
            <Tab.Screen options={{tabBarIcon: ({color}) => <FontAwesomeIcon color={color} size={30} icon={faStore} />}} name="Market" component={WelcomeScreen} />
            <Tab.Screen options={{tabBarIcon: ({color}) => <FontAwesomeIcon color={color} size={30} icon={faUser} />}} name="Profile" component={WelcomeScreen} />
        </Tab.Navigator>

    );
};
