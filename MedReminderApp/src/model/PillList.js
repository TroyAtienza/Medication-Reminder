import { useState } from "react";
import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Pill from "./Pill";

const temp = new Pill();
temp.pillName = "hi";
const temp1 = new Pill();
temp1.pillName = "hello";

export const data = [
    {
        day: "Monday",
        items: [temp, new Pill(), new Pill(), new Pill()]
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

const PillList = (props, deleteItem) => {
    const index = data.findIndex(e => e.day === props.day);   // Finds the index of the provided day.
    return (
    <ScrollView>
        {data[index].items.map((pill, index) => {
            const [taken, setTaken] = useState(false);
        return (
            <TouchableOpacity
                key={index}
                onPress = {() => (taken) ? setTaken(false) : setTaken(true)}
                //style = {[{backgroundColor: pill.isTaken ? "grey" : "white"}, styles.listItem]}
                style = {[(taken) ? styles.taken : styles.notTaken, styles.listItem]}
            >
            <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
            </TouchableOpacity>
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
})

export {PillList}