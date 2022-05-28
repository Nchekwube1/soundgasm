import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {home, library, MainBottomTabParams, search} from '../constants/types';
import Colors from '../../colors';
import Home from '../features/Home';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../features/Search';
import Library from '../features/Library';
import {globalStyle} from '../globalStyles';

const Tab = createBottomTabNavigator<MainBottomTabParams>();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.inactiveTabColor,
        tabBarStyle: globalStyle.tabBarStyle,
        tabBarLabelStyle: globalStyle.tabLabelStyle,
      }}>
      <Tab.Screen
        component={Home}
        name={home}
        options={{
          tabBarLabel: home,
          tabBarIcon: ({color, size}) => (
            <Octicons color={color} size={size} name="home" />
          ),
        }}
      />
      <Tab.Screen
        component={Search}
        name={search}
        options={{
          tabBarLabel: search,
          tabBarIcon: ({color, size}) => (
            <Octicons color={color} size={size} name="search" />
          ),
        }}
      />
      <Tab.Screen
        component={Library}
        name={library}
        options={{
          tabBarLabel: library,
          tabBarIcon: ({color, size}) => (
            <Ionicons color={color} size={size} name="ios-library-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
