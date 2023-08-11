import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import axios from "axios";
import SearchList from "../components/Products/SearchList";

const Search = () => {
  const [SearchKey, setSearchKey] = useState("");
  const [SearchResult, setSearchReult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://shopapp-bmps.onrender.com/products?title=${SearchKey}`
      );
      setSearchReult(response.data);
    } catch (error) {
      console.log("Failed To Get Products", error);
    }
    setLoading(false);
  };

  console.log(SearchResult);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.camera}>
          <Ionicons
            name="camera-outline"
            size={24}
            style={{ color: COLORS.lightWhite }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <TextInput
            value={SearchKey}
            onChangeText={setSearchKey}
            placeholder="What Are You Looking For"
          />
        </View>

        <TouchableOpacity onPress={handleSearch}>
          <Feather size={24} name="search" style={{ color: COLORS.gray }} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <>
          {SearchResult.length > 0 ? (
            <FlatList
              data={SearchResult}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <SearchList item={item} />}
            />
          ) : (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Image
                source={require("../assets/images/Pose23.png")}
                style={{
                  width: SIZES.width - 80,
                  height: SIZES.height - 380,
                  opacity: 0.9,
                }}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 50,
    marginHorizontal: 12,
    flex: 1,
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
