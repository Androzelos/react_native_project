import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="pet those kitties"
        imgSrc={require("../../assets/beach.jpg")}
      />
      <ImageDetails
        title="buckle up your seatbelt"
        imgSrc={require("../../assets/forest.jpg")}
      />
      <ImageDetails
        title="make me cigubugule"
        imgSrc={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
