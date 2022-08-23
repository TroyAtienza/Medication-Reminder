import React from 'react';
import { useState } from "react";
import { Text, ScrollView, TouchableOpacity, StyleSheet, View, Button, Alert } from "react-native";
import Pill from "./Pill";

const temp = new Pill();
temp.pillName = "hi";
const temp1 = new Pill();
temp1.pillName = "hello";

export const data = [
    {
        day: "Monday",
        items: [temp, temp1]
    },
    {
        day: "Tuesday",
        items: []
    },
    {
        day: "Wednesday",
        items: []
    },
    {
        day: "Thursday",
        items: []
    },
    {
        day: "Friday",
        items: []
    },
    {
        day: "Saturday",
        items: []
    },
    {
        day: "Sunday",
        items: []
    }
];

/**
 * Renders a touchable, dynamic list.
 * @param {day} props 
 * @returns The list.
 */

const PillList = (props) => {
    const index = data.findIndex(e => e.day === props.day);   // Finds the index of the provided day.
    const [items, setItems] = React.useState(data);
    const deleteItem = (index) => () => setItems((items) => items.filter((_, i) => i !== index));
    return (
    <ScrollView contentContainerStyle={styles.listContainer}>
        {data[index].items.map((pill, index) => { const [taken, setTaken] = useState(false);
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    key={index}
                    onPress = {() => (taken) ? setTaken(false) : setTaken(true)}
                    //style = {[{backgroundColor: pill.isTaken ? "grey" : "white"}, styles.listItem]}
                    style = {[(taken) ? styles.taken : styles.notTaken, styles.listItem]}
                >
                <Text> Name </Text>
                </TouchableOpacity>
                <Button style={styles.deleteButton} title="Delete" onPress={() => 
                    Alert.alert('Are you sure you want to delete?','You cannot undo...',[
                        {text: 'OK', onPress: deleteItem(index)},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                    ],{cancelable: false})}
                />
            </View>
        );
        })}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    taken: {
        backgroundColor: "grey",
    },
    notTaken: {
        backgroundColor: "white",
    },
    item: {
        margin: 10,
    },
    deleteButton: {
        height: 40,
        left: '85%',
        top: '20%',
        width: '30%',
        float: "right",
    },
    text: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'red',
    },
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    deleteButton: {
        height: 40,
        top: '2%',
        left: '10%',
        width: '30%',
        float: "right",
    },
    text:{
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'red',
    },
})

export {PillList}