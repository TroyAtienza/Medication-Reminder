import React from 'react';
import { useState } from "react";
import { Text, ScrollView, TouchableOpacity, StyleSheet, View, Button} from "react-native";
import Pill from "./Pill";

const temp = new Pill();
temp.pillName = "Panadol";
temp.pillRepeats = 5;
temp.pillInformation = "Take 2 every 8 hours.";
const temp1 = new Pill();
temp1.pillName = "Pill";
temp1.pillRepeats = 3;
temp1.pillInformation = "Take twice a day with food.";

const data = [
    {
        id: 0,
        day: "Monday",
        items: [temp, temp1]
    },
    {
        id: 1,
        day: "Tuesday",
        items: []
    },
    {
        id: 2,
        day: "Wednesday",
        items: []
    },
    {
        id: 3,
        day: "Thursday",
        items: []
    },
    {
        id: 4,
        day: "Friday",
        items: []
    },
    {
        id: 5,
        day: "Saturday",
        items: []
    },
    {
        id: 6,
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
    const[list]=useState(data);    
    const index = list.findIndex(e => e.day === props.day); // Finds the index of the provided day.
    function removeHandler() {
        list[index].items.splice(index,1);
        console.log(list);
    }
    return (
    <ScrollView contentContainerStyle={styles.listContainer}>
        {list[index].items.map((pill, index) => { const [taken, setTaken] = useState(false);
        return (
            <View style={styles.container} key={index}>
                <TouchableOpacity
                    onPress = {() => (taken) ? setTaken(false) : setTaken(true)}
                    //style = {[{backgroundColor: pill.isTaken ? "grey" : "white"}, styles.listItem]}
                    style = {[(taken) ? styles.taken : styles.notTaken, styles.listItem]}
                >
                </TouchableOpacity>   
                <Text style={styles.text}>{pill.pillName}</Text>
                <Text>{pill.pillRepeats}</Text>
                <Text>{pill.pillInformation}</Text>
                <Button removePill = {pill.pillName} style={styles.deleteButton} title="removePill" onPress ={removeHandler}/>
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
    text: {
        fontSize: 13,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
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
})

export {PillList, data}