import { StyleSheet, View, Alert, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

/*
* Navigation bar component, fixed and displayed across all screens. Holds links to profile screen and logout 
* functionality.
*/
const TopNav = (props) => {
  const navigation = useNavigation();
    return (
    <View style={styles.topNav}>
      <View style={styles.fixToText}>
        <Button title = "Profile" style={styles.button} onPress={() => navigation.navigate("Profile")}/>
        <Text style={styles.title}> MedApp </Text>
        <Button title="Sign out" style={styles.button} onPress={() => Alert.alert("You are now signed out")}/>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: "15%",
  },
    topNav:{
    backgroundColor : "#A3CEF1", 
    paddingTop: 7,
    height : "15%", 
    width: "100%",
  },
    button: {
    backgroundColor : "#A3CEF1",
    height : "15%", 
    width: "100%",
  },
    title: {
    color : "#6096BA", 
    fontSize : 30, 
    fontWeight : "bold", 
    textAlign : "center",
  }
});

export default TopNav;