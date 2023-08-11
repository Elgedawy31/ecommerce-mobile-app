import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants/index";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    const data = async () => {
      const value = await AsyncStorage.getItem("id");
      const userID = JSON.parse(value);

      const userData = await AsyncStorage.getItem(`user${userID}`);
      if (userData) {
        setIsLogin(true);
      }

      setData(JSON.parse(userData));
    };

    data();
  }, []);

  const navigation = useNavigation();

  const logout = () => {
    Alert.alert("Logout", "Are You Sure You Want To Logout", [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel1",
      },
      {
        text: "Continue",
        onPress: async () => {
          await AsyncStorage.clear();
          navigation.replace("Button Navigation");
        },
      },
    ]);
  };
  const cached = () => {
    Alert.alert("Clear Cached", "Are You Sure You Want To Delete Every Data ", [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel1",
      },
      {
        text: "Continue",
        onPress: () => console.log("confirm"),
      },
    ]);
  };
  const DeleteAcc = () => {
    Alert.alert(
      "Delete Account ",
      "Are You Sure You Want To Delete Your Account ",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel1",
        },
        {
          text: "Continue",
          onPress: () => console.log("confirm"),
        },
      ]
    );
  };

  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View>
        <Image
          source={require("../assets/images/space.jpg")}
          style={styles.image}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("../assets/images/profile.jpeg")}
          style={styles.profile}
        />
        <Text style={styles.name}>
          {isLogin ? data?.User?.username : "Please Login "}
        </Text>
        <TouchableOpacity
          style={styles.login}
          onPress={() => !data?.User?.email && navigation.navigate("Login")}
        >
          <Text>{isLogin ? data?.User?.email : "L O G I N"}</Text>
        </TouchableOpacity>

        {isLogin && (
          <ScrollView style={{ width: "100%" }}>
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Favorites")}
              >
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color={COLORS.primary}
                />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontWeight: "600",
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                >
                  Favorites
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Orders")}
              >
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={24}
                  color={COLORS.primary}
                />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontWeight: "600",
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                >
                  Orders
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Cart")}
              >
                <SimpleLineIcons name="bag" size={24} color={COLORS.primary} />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontWeight: "600",
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                >
                  Cart
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity style={styles.item} onPress={cached}>
                <MaterialCommunityIcons
                  name="cached"
                  size={24}
                  color={COLORS.primary}
                />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontWeight: "600",
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                >
                  Clear Cach
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity style={styles.item} onPress={logout}>
                <AntDesign name="logout" size={24} color={COLORS.primary} />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontWeight: "600",
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity style={styles.item} onPress={DeleteAcc}>
                <AntDesign name="deleteuser" size={24} color={COLORS.primary} />
                <Text
                  style={{
                    color: COLORS.gray,
                    fontWeight: "600",
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                >
                  Delete Account
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 290,
    resizeMode: "cover",
  },
  profile: {
    width: 156,
    height: 156,
    borderRadius: 78,
    resizeMode: "contain",
    top: -78,
  },
  name: {
    color: COLORS.primary,
    top: -68,
    fontWeight: "bold",
    fontSize: SIZES.large - 2,
  },
  login: {
    top: -58,
    backgroundColor: COLORS.secondary,
    padding: 8,
    borderRadius: 8,
  },
  item: {
    flexDirection: "row",
    padding: 15,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
});
