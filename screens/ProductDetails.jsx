import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import {useRoute} from '@react-navigation/native'
import { COLORS, SIZES } from "../constants/theme";
import React, { useState } from "react";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const route = useRoute()
  const {item} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl
        }}
      />
      <View style={styles.details}>
        <View style={styles.little}>
          <Text style={styles.titleRow}>{item.title}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </View>

        <View style={styles.RatingRow}>
          <View style={styles.rating}>
            {[1, 3, 4, , 5, 6].map((e) => (
              <Ionicons key={e} name="star" size={20} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => setCount((state) => state + 1)}>
              <SimpleLineIcons name="plus" size={22} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity>
              <SimpleLineIcons
                name="minus"
                size={22}
                onPress={() => setCount((state) => state - 1)}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descRow}>
          <Text style={styles.titleDesc}>Description</Text>
          <Text style={styles.desc}>
          {item.description}
          </Text>
        </View>

        <View style={styles.pro}>
          <View style={styles.pros}>
            <Ionicons name="location-outline" size={20} color={COLORS.gray} />
            <Text
              style={{ color: COLORS.gray, marginHorizontal: 5, fontSize: 17 }}
            >
           {item.productLocation}
            </Text>
          </View>
          <View style={styles.pros}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={20}
              color={COLORS.gray}
            />
            <Text
              style={{ color: COLORS.gray, marginHorizontal: 5, fontSize: 17 }}
            >
              Free Delevery
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={styles.shops}>
            <View>
              <Text style={styles.shopsText}>Buy Now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.shops2}>
              <Fontisto
                name="shopping-bag"
                size={24}
                color={COLORS.lightWhite}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  upper: {
    marginHorizontal: 22,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
    position: "absolute",
    width: SIZES.width - 44,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    marginTop: -12,
    backgroundColor: COLORS.lightWhite,
  },
  little: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    top: 20,
    width: SIZES.width - 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleRow: {
    fontWeight: "bold",
    fontSize: SIZES.large,
  },
  priceRow: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
  },

  price: {
    fontWeight: "600",
    fontSize: SIZES.large - 3,
  },

  RatingRow: {
    paddingBottom: SIZES.small,
    top: 5,
    width: SIZES.width - 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rating: {
    top: SIZES.large,
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ratingText: {
    color: COLORS.gray,
    marginHorizontal: 5,
  },

  descRow: {
    marginHorizontal: 22,
    marginTop: SIZES.large,
  },
  titleDesc: {
    fontWeight: "bold",
    fontSize: SIZES.large - 3,
    marginBottom: 3,
  },
  desc: {
    textAlign: "justify",
    color: COLORS.gray,
    fontSize: 13,
  },

  pro: {
    marginVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
  },
  pros: {
    flexDirection: "row",
    alignItems: "center",
  },
  shops: {
    marginLeft: 12,
    width: "65%",
    backgroundColor: COLORS.black,
    borderRadius: 20,
  },
  shopsText: {
    color: COLORS.lightWhite,
    padding: 12,
    fontWeight: "bold",
    fontSize: SIZES.large - 3,
  },

  shops2: {
    marginLeft: 12,
    backgroundColor: COLORS.black,
    borderRadius: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
