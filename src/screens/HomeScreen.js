import React from "react";
import { Text, StyleSheet, Button, View, FlatList } from "react-native";
import NavButton from "../components/NavButton";

const HomeScreen = ({ navigation }) => {
  const screens = [
    {name: "Components"},
    {name: "List"},
    {name: "Image"},
    {name: "ImageDetails"},
    {name: "Counter"},
    {name: "Color"},
    {name: "Square"},
  ]

  return(
    <View>
      <Text style={styles.text}>Experimental</Text>
      <NavButton
       screensList={screens}
       navigation={navigation}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;
