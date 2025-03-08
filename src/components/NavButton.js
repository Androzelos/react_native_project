import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { FlatList } from "react-native-gesture-handler";

const NavButton = ({ screensList, navigation }) => {
    return(
       <View>
        <FlatList 
            keyExtractor={(screen) => screen.name}
            data={screensList}
            renderItem={({ item }) => {
                return (
                    <Button 
                        title={`Go to ${item.name} Demo`}
                        onPress={() => {
                            if (navigation) {
                                navigation.navigate(`${item.name}`);
                            } else {
                                console.log(item.name);
                            }
                        }}
                    />
                )
            }}
        />
       </View>
    );
}

const style = StyleSheet.create({

})

export default NavButton