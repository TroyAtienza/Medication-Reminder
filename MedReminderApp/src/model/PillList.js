import React from 'react';
import { useState, useEffect } from "react";
import { Text, TouchableOpacity, SectionList, ScrollView, StyleSheet, View, Button} from "react-native";
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
      title: 'Monday',
      data: [temp, temp1],
      id: 0,
    },
    {
      title: 'Tuesday',
      data: [temp, temp1],
      id: 1,
    },
    {
      title: 'Wednesday',
      data: [temp, temp1],
      id: 2,
    },
    {
      title: 'Thursday',
      data: [temp, temp1],
      id: 3,
    },
    {
      title: 'Friday',
      data: [temp, temp1],
      id: 4,
    },
    {
      title: 'Saturday',
      data: [temp, temp1],
      id: 5,
    },
    {
      title: 'Sunday',
      data: [temp, temp1],
      id: 6,
    },
    
  ];
  
/**
 * Renders a touchable, dynamic list.
 * @param {day} props 
 * @returns The list.
 */

  const PillList = (props) => {
    const [state, setState] = useState(data);
    const index = state.findIndex(e => e.day === props.day); // Finds the index of the provided day.
    
    const editItem = (itemId, newValue) => {
      let newState = [...state];
      let itemIndex = newState.find((item) => item.id == itemId);
      if (itemIndex < 0) return;
      newState[itemIndex] = {
        ...newState[itemIndex],
        ...newValue,
      };
      setState(newState);
    };
  
    const removePill = (itemId, pill) => {
      let currentItem = state.find((item) => item.id == itemId);
      currentItem.data = currentItem.data.filter((item) => item != pill);
      editItem(itemId, currentItem);
    };
  
    const Item = ({ item, section }) => {
      const [taken, setTaken] = useState(false);
      return (
        <View style={styles.row}>
          <Text> {item.pillName} </Text>
          <Text> {item.pillInformation} </Text>
          <Button title={'Delete'} onPress={() => { removePill(section.id, item); }}/>
          <TouchableOpacity
            onPress = {() => (taken) ? setTaken(false) : setTaken(true)}
            //style = {[{backgroundColor: pill.isTaken ? "grey" : "white"}, styles.listItem]}
            style = {[(taken) ? styles.taken : styles.notTaken, styles.listItem]}
            >
          </TouchableOpacity>   
        </View>
      );
    };
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        <View style={styles.container} key={index}>
            <SectionList 
                sections={state} 
                keyExtractor={(item, index) => item + index} 
                renderItem={Item}
            />
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      padding: 5,
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      paddingVertical: 5,
      width: '100%',
      borderBottomWidth: 1,
    },
    inputWrapper: {
      paddingVertical: 15,
      marginBottom: 10,
    },
    sectionListWrapper: {
      padding: 5,
    },
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taken: {
        backgroundColor: "grey",
        width: '20',
        height: '20',
    },
    notTaken: {
        backgroundColor: "red",
        width: '20',
        height: '20',
    },
  });

export {PillList, data}