import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/List';
import { StyleSheet, Text, View } from 'react-native';

const PillListScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <Text>Top Screen!</Text>
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

export default PillListScreen;