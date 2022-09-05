import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RepeatSelection = () => {  
    const [state, setState] = useState({
        selectedIndex: [],
        index: 0,
    });
    const {selectedIndex, index} = state;

    const Days = ({item, id, callBack}) => {
        var color = "grey"
        if(selectedIndex[1] && selectedIndex.includes(id)){
          color ="lightblue"
        } 
        else if(selectedIndex[0] === id){
          color = "lightblue"
        }
        return (
            <TouchableOpacity key={id} onPress={() => { callBack(id); }} style={{ backgroundColor:color, 
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
            id: 1,
            day: "M",
        },
        {
            id: 2,
            day: "T",
        },
        {
            id: 3,
            day: "W",
        },
        {
            id: 4,
            day: "T",
        },
        {
            id: 5,
            day: "F",
        },
        {
            id: 6,
            day: "S",
        },
        {
            id: 7,
            day: "S",
        },
    ];

    const selectedItem = (id) => { 
        if (selectedIndex == 0) {
          setState({selectedIndex:[ id], index: 1});         
        } 
        else {
          if(selectedIndex.includes(id) === false){
            setState({selectedIndex: [...selectedIndex, id], index: index + 1});          
          }
        }
      };  
      return (
        <View style={detailsStyles.rowContainer}>
              {selectedDays.map((data, id) => (
                <Days item={data} id={data.id.toString()} callBack={(id) => {selectedItem(id);}}/>         
              ))}
        </View>
      );
}

const detailsStyles = StyleSheet.create({
    dayBox:{
      backgroundColor: '#A9A9A9',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      paddingLeft: '1%',
      paddingRight: '1%',
      position: 'relative',
      borderWidth: 1,
      borderRadius: 8,
    },
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