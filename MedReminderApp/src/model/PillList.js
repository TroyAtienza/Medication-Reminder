import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Pill from "./Pill";

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
        return (
            <TouchableOpacity
                key={index}
                onPress = {() => toggle(pill)}
                //style = {[{backgroundColor: pill.isTaken ? "grey" : "white"}, styles.listItem]}
                style = {[(pill.isTaken) ? styles.taken : styles.notTaken, styles.listItem]}
            >
            <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
            </TouchableOpacity>
        );
        })}
    </ScrollView>
    )
}

function toggle(pill) {
    (pill.isTaken) ? pill.isTaken = false : pill.isTaken = true;
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