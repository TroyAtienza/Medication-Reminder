import { StatusBar } from 'expo-status-bar';
import { startTransition } from 'react';
import { PillList } from './src/model/list';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Pill from './src/model/pill';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topScreen}>
      </View>
      <View style={styles.bottomScreen}>
        <PillList day={"Monday"}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>  
  );
}

const widthProportion = '100%';
const heightProportion = '50%';
const paddingTopBottom = 10;
const paddingLeftRight = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: paddingTopBottom,
  },
  topScreen:{
    backgroundColor: '#808080',
    width: widthProportion,
    height: heightProportion,  
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },
    bottomScreen:{
    backgroundColor: '#fff',
    width: widthProportion,
    height: heightProportion,
    paddingTop: paddingTopBottom,
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },  
});

export {styles};
