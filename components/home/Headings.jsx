import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";

const Headings = () => {

  
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={{fontSize:SIZES.large -2 , fontWeight:'bold' , color:COLORS.black}}>New Rivals</Text>
      <TouchableOpacity onPress={() => navigation.navigate('New Rivals')}>
        <Ionicons size={24} name="ios-grid" style={{ color: COLORS.primary }} />
      </TouchableOpacity>
    </View>
  );
};

export default Headings;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
