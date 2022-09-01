import { React, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RepeatSelection = () => {
    const [selected, setSelected] = useState(null);
    const handleSelected = (value) => {
      setSelected(value);
    };
    return(
     <View style ={detailsStyles.rowContainer}>
        <HighlightAndSelectDay title={'Monday'} onPress={handleSelected} value={selected} id={'M'}/>
        <HighlightAndSelectDay title={'Tuesday'} onPress={handleSelected} value={selected} id={'T'}/>
        <HighlightAndSelectDay title={'Wednesday'} onPress={handleSelected} value={selected} id={'W'}/>
        <HighlightAndSelectDay title={'Thursday'} onPress={handleSelected} value={selected} id={'T'}/>
        <HighlightAndSelectDay title={'Friday'} onPress={handleSelected} value={selected} id={'F'}/>
        <HighlightAndSelectDay title={'Saturday'} onPress={handleSelected} value={selected} id={'S'}/>
        <HighlightAndSelectDay title={'Sunday'} onPress={handleSelected} value={selected} id={'S'}/>
    </View>
    );
}

function HighlightAndSelectDay({ title, onPress, value, id }) {
    return (
      <TouchableOpacity style={[detailsStyles.dayBox, { backgroundColor: value === title?"lightblue":"white" }]} onPress={()=>onPress(title)}>
        <Text style={detailsStyles.dayBoxText}> {id} </Text>
      </TouchableOpacity>
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