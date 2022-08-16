import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { PillList } from './src/model/list';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Top Nav */}
      <View style={{backgroundColor : "#A3CEF1", height : "10%", width: "100%"}}>
        
        <View style={styles.fixToText}>
          <Button
          title="Profile"
          onPress={() => Alert.alert("insert profile link here")}
          />
          
          <Text style={{color : "#6096BA", fontSize : 30, fontWeight : "bold", textAlign : "center"}}> MedApp </Text>

          <Button
          title="Sign out"
          onPress={() => Alert.alert("You are now signed out")}
          />
        </View>

      </View>
        
      <PillList day={"Monday"}/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: "10%",
  },
});
