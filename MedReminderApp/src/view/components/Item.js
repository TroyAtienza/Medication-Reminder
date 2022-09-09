import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";

const Item = ({ item, section, index, removePill }) => {
  const [taken, setTaken] = useState(false);
  
  if (section.id != index){
      return null;
  }
  return (
    <View>
        <TouchableOpacity 
         onPress = {() => (taken) ? setTaken(false) : setTaken(true)}
          style = {[(taken) ? styles.taken : styles.notTaken, styles.row]}>
          <View style={{flex:1,flexDirection:"row",alignContent:"flex-end"}}>
              <View style={styles.titleContainer}> 
                <Text style={styles.textTitle}> {item.pillName} </Text>
              </View>
              <View style={styles.infoContainer}> 
                <Text style={styles.textInfo}> {item.pillInformation} </Text>
              </View> 
          </View>
          <TouchableOpacity onPress={() => removePill(section.id, item)}> 
              <Image style={styles.trashImage} source={require(`../assets/buttons/trash.png`)}/>
          </TouchableOpacity>
          </TouchableOpacity>
        <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle:{
      textAlign: 'left',
      fontSize: 14,
      fontWeight : 'bold',
  },
  textInfo:{
    textAlign: 'left',
    fontSize: 14,
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      alignItems: 'center',
  },
  titleContainer: {
      justifyContent: 'space-evenly',
      width: '30%',
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    width: '70%',
  },
  taken: {
    backgroundColor: "grey",
    borderRadius: 10,
  },
  notTaken: {
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  trashImage: {
    marginTop: 4,
    width: 20,
    height: 20,
  }
});

export default Item;

