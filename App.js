import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonTabNavigation from "./navigation/ButtonTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "./screens/Cart.jsx";
import ProductDetails from "./screens/ProductDetails";
import NewRivals from "./screens/NewRivals";
import Login from "./screens/Login";
import Favorites from "./screens/Favorites";
import Order from "./screens/Order";
import Register from "./screens/Register";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Button Navigation"
          component={ButtonTabNavigation}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="Product Details"
          options={{ headerShown: false }}
          component={ProductDetails}
        />
        <Stack.Screen
          name="New Rivals"
          options={{ headerShown: false }}
          component={NewRivals}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Orders"
          options={{ headerShown: false }}
          component={Order}
        />
        <Stack.Screen
          name="Favorites"
          options={{ headerShown: false }}
          component={Favorites}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
