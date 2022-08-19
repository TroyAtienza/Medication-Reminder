import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/PillList';
import { StyleSheet, Button, Text, Alert, View } from 'react-native';
import AddButton from '../components/AddButton';
import { useNavigation } from "@react-navigation/native";

const PillListScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <Text>Top Screen!</Text>
        
        {/* Top Nav */}
        <View style={{backgroundColor : "#A3CEF1", height : "10%", width: "100%"}}>
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

        <AddButton onPress={() => navigation.navigate("PillType")}/>
      </View>
      <View style={styles.bottomScreen}>
        <Text>Bottom screen!</Text>
      </View>
      <PillList day={"Monday"}/>
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
    top: "10%",
  },
});

export default PillListScreen;