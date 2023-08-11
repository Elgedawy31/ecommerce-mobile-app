import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {

    const navigate = useNavigation()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt}>Find The Most</Text>
        <Text style={styles.welcomeTxt2}>Luxorious Furnuitre</Text>
      </View>
      <View style={styles.search}>
        <TouchableOpacity>
          <Feather size={24} name="search" style={{ color: COLORS.gray }} />
        </TouchableOpacity>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <TextInput onPressIn={() => navigate.navigate('Search')} value="" placeholder="What Are You Looking For" />
        </View>
        <TouchableOpacity style={styles.camera}>
          <Ionicons
            name="camera-outline"
            size={24}
            style={{ color: COLORS.lightWhite }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: {
    fontWeight: "bold",
    fontSize: SIZES.xxLarge - 6,
    top: SIZES.xSmall,
    color: COLORS.black,
  },
  welcomeTxt2: {
    fontWeight: "bold",
    fontSize: SIZES.xxLarge - 6,
    top: 0,
    color: COLORS.primary,
  },

  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginVertical: 12,
    height: 50,
    paddingHorizontal: 5,
  },
  camera: {
    backgroundColor: COLORS.primary,
    height: "90%",
    width: 50,
    borderRadius: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
