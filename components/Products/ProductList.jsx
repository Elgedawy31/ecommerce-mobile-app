import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import UseFetch from "../../hooks/UseFetch";
import { SIZES, COLORS } from "../../constants/theme";
import ProductCardView from "../home/ProductCardView";

const ProductList = () => {
  const { data, loading, err } = UseFetch();
  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : err ? (
        <Text>{err}</Text>
      ) : (
        <View
          style={{
            alignItems: "center",
            paddingTop: SIZES.xxLarge,
          }}
        >
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ProductCardView item={item} />}
            contentContainerStyle={{
              alignItems: "center",
              paddingTop: SIZES.xxLarge,
              paddingLeft: SIZES.small / 2,
              overflow:"hidden"
            }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
          />
        </View>
      )}
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
