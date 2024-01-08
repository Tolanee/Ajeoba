import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { windowWidth } from "../../utils/Dimension";

export default function Carousels() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const info = [
    {
      desc: "Get high quality farm products and inputs",
      image: require("../../assets/HomeImages/desc.png")
    },
    {
      desc: "Get high quality farm products and inputs",
      image: require("../../assets/HomeImages/desc.png")
    },
    {
      desc: "Get high quality farm products and inputs",
      image: require("../../assets/HomeImages/desc.png")
    },
    {
      desc: "Get high quality farm products and inputs",
      image: require("../../assets/HomeImages/desc.png")
    }
  ];
  const renderItem = ({ item }) => (
    <View className="w-full h-[150] relative  rounded-lg">
      <Image source={item.image} className="w-full h-full rounded-lg" />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
        end={{ x: 0.3, y: 0 }} // Adjust the x value to control the start position
        start={{ x: 1, y: 0 }}
        style={styles.overlay}
      />
      <Text
        style={{ fontFamily: "Poppins-SemiBold" }}
        className="absolute top-5 px-4 text-white font-bold text-xl w-2/3"
      >
        {item.desc}
      </Text>
    </View>
  );

  return (
    <View className=" rounded-lg py-6 mx-3">
      <Carousel
        data={info}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 100}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
        autoplay={true}
        loop={true}
        enableMomentum={true}
        className="w-full"
        slideStyle={{ marginRight: 10 }}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={info.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },

  paginationDot: {
    width: 19,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#006D33"
  },
  paginationInactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9"
  }
});
