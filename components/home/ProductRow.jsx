import { FlatList, StyleSheet, Text, View , ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import ProductCardView from "./ProductCardView";
import useFetch from '../../hooks/UseFetch'
const ProductRow = () => {

  const {data , loading , err }  = useFetch()

  return (
  <>
  {loading ? <ActivityIndicator  size='large' color={COLORS.primary} /> : err ? <Text>{err}</Text> :    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => <ProductCardView item={item} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>}
  </>
  );
};

export default ProductRow;

const styles = StyleSheet.create({});
