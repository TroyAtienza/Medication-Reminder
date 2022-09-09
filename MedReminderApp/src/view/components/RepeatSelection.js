import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

/**
 * RepeatSelection lets the user select what days they want the pill 
 * to repeat on. The user can select and unselect days.
 * 
 * @param {*} setSelectedDays
 */
const RepeatSelection = ({ setSelectedDays }) => {  
    const [state, setState] = useState({
        selectedIndex: [],
        index: 0,
    });

    const [array, setArray] = useState([0,0,0,0,0,0,0]); //set use state to return to details

    const {selectedIndex, index} = state; //set the initial state of the list

    const SelectDays = ({item, id, callBack}) => { //callback function that highlights the selected days
        var color = "grey"
        if(selectedIndex[1] && selectedIndex.includes(id)){
          color ="lightblue" //highlight the day boxes blue when they are selected
        } 
        else if(selectedIndex[0] === id){
          color = "lightblue"
        }
        return (
            <TouchableOpacity onPress={() => { callBack(id); }} style={{ backgroundColor:color, //styling for the day boxes dependent on colour.
                borderTopLeftRadius:10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,}}>
                <Text style={detailsStyles.dayBoxText}> {item.day} </Text>
            </TouchableOpacity>
        );
    };

    const selectedDays = [ //days list
        {
            id: 0,
            day: "M",
        },
        {
            id: 1,
            day: "T",
        },
        {
            id: 2,
            day: "W",
        },
        {
            id: 3,
            day: "T",
        },
        {
            id: 4,
            day: "F",
        },
        {
            id: 5,
            day: "S",
        },
        {
            id: 6,
            day: "S",
        },
    ];
    /**
     * Gets the id of a selection and add it to the array of selected days.
     * Deletes day from list if it is already selected.
     * 
     * @param {*} id 
     */

    const selectedItem = (id) => { 
      array[id] = !array[id];
      setArray(array);
        if(selectedIndex.includes(id) === true){ //if item is already selected, remove from list.
            selectedIndex.splice(selectedIndex.indexOf(id),1);
            setState({selectedIndex: [...selectedIndex], index: id}); 
        }
        else if(selectedIndex.includes(id) === false){
          setState({selectedIndex: [...selectedIndex, id], index: id}); //add newly selected item to list.   
        }
        setSelectedDays(array);
      };  
      return (
        <View style={detailsStyles.rowContainer}>
              {selectedDays.map((data, key={index}) => ( //maps index and calls callback function to change colour of selection.
                <SelectDays key={data.id} item={data} id={key.toString()} callBack={(key) => {selectedItem(key);}}/>
              ))}
        </View>
      );
}

const detailsStyles = StyleSheet.create({
    dayBoxText:{
      fontSize: 30,
      fontWeight: 'bold',
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
})

export default RepeatSelection;
