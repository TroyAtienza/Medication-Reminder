import { React, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RepeatSelection = () => {
    const state={
        selectedButton: '',
    };
    return(
    <View style ={detailsStyles.rowContainer}>
        <TouchableOpacity>
            <View style={detailsStyles.dayBox}>
                <Text style={detailsStyles.dayBoxText}> M </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={detailsStyles.dayBox}>
                <Text style={detailsStyles.dayBoxText}> T </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={detailsStyles.dayBox}>
                <Text style={detailsStyles.dayBoxText}> W </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={detailsStyles.dayBox}>
                <Text style={detailsStyles.dayBoxText}> T </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={detailsStyles.dayBox}>
                <Text style={detailsStyles.dayBoxText}> F </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={detailsStyles.dayBox}>
                <Text style={detailsStyles.dayBoxText}> S </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={detailsStyles.dayBox}>
                <Text style={detailsStyles.dayBoxText}> S </Text>
            </View>
        </TouchableOpacity>
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