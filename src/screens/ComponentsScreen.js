import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const someText = <Text style={styles.textStyle}>Rise and shine!!</Text>;

    return  <View>
                <Text style={styles.textStyle}>Not so experimental</Text>
                {someText}
            </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
    }
});

export default ComponentsScreen;