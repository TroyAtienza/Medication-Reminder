import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarouselController, {CarouselItem} from "./src/components/Pillbox";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>HELLO WORLD!</Text>
    //   <StatusBar style="auto" />
    //   <CarouselController>
    //     <CarouselItem>1</CarouselItem>
    //     <CarouselItem>2</CarouselItem>
    //     <CarouselItem>3</CarouselItem>
    //   </CarouselController>
    // </View>
    <div className="App">
      <CarouselController>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </CarouselController>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
