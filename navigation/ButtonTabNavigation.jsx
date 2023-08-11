import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { COLORS } from "../constants/theme";

const Tab = createBottomTabNavigator();

const ButtonTabNavigation = () => {
  const ScreenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
  };

  return (
    <Tab.Navigator screenOptions={ScreenOptions}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS?.primary : COLORS.gray2}
              />
            );
          },
        }}
        component={Home}
      />
      <Tab.Screen name="Search"  options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name='search-sharp'
                size={24}
                color={ focused?  COLORS?.primary : COLORS.gray2 }
              />
            );
          },
        }} component={Search} />
      <Tab.Screen name="Profile"  options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused ? COLORS?.primary : COLORS.gray2}
              />
            );
          },
        }} component={Profile} />
    </Tab.Navigator>
  );
};

export default ButtonTabNavigation;

const styles = StyleSheet.create({});
