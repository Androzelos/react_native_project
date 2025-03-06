import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return(
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} />
            <Button title="Reset" onPress={() => {
                setCounter(0);
            }} />
            <Text style={styles.text} >Current count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        paddingTop: '40',
        textAlign: 'center',
    },
})

export default CounterScreen