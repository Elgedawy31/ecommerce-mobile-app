import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({item}) => {

    const navigation = useNavigation()



  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product Details' , {item})}>
      <View style={styles.cotnainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imageUrl
            }}
            style={styles.Image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.suplier}>{item.suplier}</Text>
          <Text style={styles.title}>$ {item.price}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons size={30} name="add-circle" style={styles.add} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  cotnainer: {
    width: 163,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 150,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },

  Image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
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

  add: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: COLORS.primary,
  },
});
