import { useState } from "react";
import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Pill from "./pill";

const temp = new Pill();
temp.pillName = "hi";

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
const PillList = (props) => {
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
    listItem: {
        
    },
})

export {PillList}