import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, View, Text, Dimensions, useWindowDimensions} from 'react-native';
import PillboxCarousel from "./src/components/PillboxCarousel";

export default function App() {
  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.masthead, {width}]}>
        <Text>MASTHEAD GOES HERE!</Text>
      </View>
        <PillboxCarousel />
      <View style={[styles.options, {width}, {height}]}>
        <Text>Rest of options go here!</Text>
      </View>
        <StatusBar style= "auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  masthead: {
    backgroundColor: 'grey',
    flex: 0.08,
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    backgroundColor: 'grey',
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
