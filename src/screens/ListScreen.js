import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Person #1', age: '21'},
        { name: 'Person #2', age: '22'},
        { name: 'Person #3', age: '23'},
        { name: 'Person #4', age: '24'},
        { name: 'Person #5', age: '25'},
        { name: 'Person #6', age: '26'},
        { name: 'Person #7', age: '27'},
        { name: 'Person #8', age: '28'},
        { name: 'Person #9', age: '29'},
        { name: 'Person #10', age: '30'},
    ]

    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return (
                    <Text style={style.textStyle}>
                        { item.name } - Age { item.age }
                    </Text>)
            }} 
        />
    )
}

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
})

export default ListScreen