import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../../constants/theme";
import UseFetch from "../../hooks/UseFetch.js";

const Carousal = () => {
  const { data, err, loading } = UseFetch();
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : err ? (
        <Text>{err}</Text>
      ) : (
        <SliderBox
          images={data.map(e => e.imageUrl)}
          dotColor={COLORS.primary}
          ImageComponentStyle={{
            borderRadius: 13,
            width: "95%",
            marginRight: 20,
          }}
          autoplay={true}
          circleLoop
        />
      )}
    </View>
  );
};

export default Carousal;
