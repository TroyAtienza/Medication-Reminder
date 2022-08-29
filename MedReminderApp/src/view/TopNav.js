import { StyleSheet, View, Alert, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
    height : "15%", 
    width: "100%",
  },
    button: {
    backgroundColor : "#A3CEF1", 
    height : "15%", 
    width: "100%",
  },
    title: {
    color : "#274C77", 
    fontSize : 30, 
    fontWeight : "bold", 
    textAlign : "center",
  }
});

export default TopNav;