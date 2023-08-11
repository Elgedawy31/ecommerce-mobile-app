import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import Welcome from "../components/home/Welcome";
import Carousal from "../components/home/Carousal";
import Headings from "../components/home/Headings";
import ProductRow from "../components/home/ProductRow";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const data = async () => {
      const value = await AsyncStorage.getItem("id");
      const userID = JSON.parse(value);

      const userData = await AsyncStorage.getItem(`user${userID}`);

      setData(JSON.parse(userData));
    };

    data();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.navbar}>
        <Ionicons size={24} name="location-outline" />
        <Text>{data?.User?.location || 'Cairo'}</Text>
        <View style={{ alignItems: "flex-end" }}>
          <View style={styles.cartCount}>
            <Text style={styles.cartNumber}>8</Text>
          </View>
          <TouchableOpacity>
            <Fontisto size={24} name="shopping-bag" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousal />
        <Headings />
        <ProductRow />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 50,
    marginHorizontal: 12,
  },
  navbar: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});
