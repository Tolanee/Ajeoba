import React, { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import * as Font from "expo-font";
import { Text, View } from "react-native";

const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {

    loadFonts()
        .then(() => setFontsLoaded(true))
        .catch((error) => {
          console.error("Error loading fonts:", error);

        });
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return <Redirect href="/Home" />
}
