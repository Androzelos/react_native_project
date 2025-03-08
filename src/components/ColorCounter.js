import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text style={styles.text}>{color}</Text>
            <Button 
                title={`Increase ${color}`} 
                onPress={() => onIncrease()}
            />
            <Button 
                title={`Decrease ${color}`} 
                onPress={() => onDecrease()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: 20,
        marginVertical: 10
    }
})

export default ColorCounter;