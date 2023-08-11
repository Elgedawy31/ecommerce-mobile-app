import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const SearchList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Product Details", { item })}
      >
        <View style={styles.image}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        </View>
        <View style={styles.Texts}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.suplier}>{item.suplier}</Text>
          <Text style={styles.title}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.small,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  productImage: {
    width: "100%",
    height: 90,
    resizeMode: "cover",
    borderRadius: SIZES.small,
  },
  Texts: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },

  suplier: {
    fontWeight: "300",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
