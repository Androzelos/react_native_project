import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import ImageScreen from "../screens/ImageScreen";

const ImageDetails = ({ title, imgSrc }) => {
    console.log(imgSrc)
    return(
        <View>
            <Image source={imgSrc}/>
            <Text>No mein Führer pls don't {title}</Text>
        </View>
    );
}

const style = StyleSheet.create({

})

export default ImageDetails