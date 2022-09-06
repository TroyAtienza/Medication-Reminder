import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RepeatSelection = () => {  
    const [state, setState] = useState({
        selectedIndex: [],
        index: 0,
    });
    const {selectedIndex, index} = state;

    const SelectDays = ({item, id, callBack}) => {
        var color = "grey"
        if(selectedIndex[1] && selectedIndex.includes(id)){
          color ="lightblue"
        } 
        else if(selectedIndex[0] === id){
          color = "lightblue"
        }
        return (
            <TouchableOpacity onPress={() => { callBack(id); }} style={{ backgroundColor:color, 
                borderTopLeftRadius:10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,}}>
                <Text style={detailsStyles.dayBoxText}> {item.day} </Text>
            </TouchableOpacity>
        );
    };

    const selectedDays = [
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

    const selectedItem = (id) => { 
        if(selectedIndex.includes(id) === true){ //if item is already selected, remove from list.
            selectedIndex.splice(selectedIndex.indexOf(id),1);
            setState({selectedIndex: [...selectedIndex], index: index+1}); 
        }
        else if(selectedIndex.includes(id) === false){
          setState({selectedIndex: [...selectedIndex, id], index: index+1}); //add newly selected item to list.   
        }
      };  
      return (
        <View style={detailsStyles.rowContainer}>
              {selectedDays.map((data, key={id}) => (
                <SelectDays item={data} id={data.id.toString()} callBack={(id) => {selectedItem(id);}}/>         
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