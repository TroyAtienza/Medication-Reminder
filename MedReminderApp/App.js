import { StatusBar } from 'expo-status-bar';
import { startTransition } from 'react';
import { PillList } from './src/model/PillList';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from './src/components/BackButton';
import AddButton from './src/components/AddButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <AddButton onPress={() => navigation.navigate("AddPillTypeScreen")}/>
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
});
