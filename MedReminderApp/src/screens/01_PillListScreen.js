import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/PillList';
import { StyleSheet, Button, Text, Alert, View } from 'react-native';
import AddButton from '../components/AddButton';
import { useNavigation } from "@react-navigation/native";

const PillListScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Top Nav */}
      <View style={{backgroundColor : "#A3CEF1", height : "15%", width: "100%"}}>
          <View style={styles.fixToText}>
            <Button
            title="Profile"
            onPress={() => Alert.alert("insert profile link here")}/>
            <Text style={{color : "#6096BA", fontSize : 30, fontWeight : "bold", textAlign : "center"}}> MedApp </Text>
            <Button
            title="Sign out"
            onPress={() => Alert.alert("You are now signed out")}/>
          </View>
        </View>
      
      <View style={styles.topScreen}>
        <Text>Top Screen!</Text>
        <AddButton onPress={() => navigation.navigate("PillType")}/>
      </View>

      <View style={styles.bottomScreen}>
        <PillList day={"Monday"}/>
      </View>
      <StatusBar style="auto" />
    </View>  
  );
}

const widthProportion = '100%';
const heightProportion = '50%';
const paddingTopBottom = 40;
const paddingLeftRight = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: paddingTopBottom,
  },
  topScreen:{
    backgroundColor: '#fff',
    width: widthProportion,
    height: heightProportion,  
    paddingTop: paddingTopBottom,
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },
    bottomScreen:{
    backgroundColor: '#808080',
    width: widthProportion,
    height: heightProportion,
    paddingTop: paddingTopBottom,
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },  
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: "15%",
  },
});

export default PillListScreen;