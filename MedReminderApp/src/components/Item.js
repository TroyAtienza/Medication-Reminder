import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";

const Item = ({ item, section, index }) => {
  const [taken, setTaken] = useState(false);
  if (section.id != index){
      return null;
  }
  return (
      <TouchableOpacity 
          onPress = {() => setTaken(!taken)}
          style = {[(taken) ? styles.taken : styles.notTaken, styles.row]}>
          <View style={{flex:2,flexDirection:"row",justifyContent:'space-between',padding:10}}>
              <Text style={styles.textStyle}> {item.pillName} </Text>
              <Text style={styles.textStyle}> {item.pillInformation} </Text>
              <TouchableOpacity onPress={() => removePill(section.id, item)}> 
                  <View style={styles.circle2}/>
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle:{
      textAlign: 'left',
  },
  taken: {
    backgroundColor: "grey",
  },
  notTaken: {
      backgroundColor: "lightgrey",
  },
  circle2: {
    width: 15,
    height: 15,
    borderRadius: 44/2,
    backgroundColor: 'red',
  },
});

export default Item;