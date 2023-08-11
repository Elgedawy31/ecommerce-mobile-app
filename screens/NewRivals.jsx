import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import ProductList from "../components/Products/ProductList";

const NewRivals = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.Text}>Products</Text>
        </View>
        <ProductList />
      </View>
    </View>
  );
};

export default NewRivals;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 12,
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wraper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    width: SIZES.width - 50,
    marginHorizontal: SIZES.large - 6,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    position: "absolute",
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Text: {
    marginLeft: 5,
    fontWeight: "500",
    fontSize: SIZES.large - 5,
    color: COLORS.lightWhite,
  },
});
