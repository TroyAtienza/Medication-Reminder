import { Text, View, TouchableOpacity, Image } from 'react-native';
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import createStyles from '../view/SplitView'
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';

const styles = createStyles()


const AddPillTypeScreen = (props) => {
  return (
    <View style={styles.container}>
        <TopNav/>
        <View style={styles.topAddScreen}>
          {/* <PillboxCarousel/> */}
        </View>
        <View style={styles.bottomAddScreen}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Pick Pill Type</Text>
          </View>
          <View style={styles.shapeSelect}>
            <TouchableOpacity style={styles.option} onPress={()=>{alert("you clicked me")}}>
              <Image source={require("../assets/Pill_Tablet.png")} style={styles.image} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.sizeSelect}>
            
          </View>

          <View style={styles.buttonContainer}>
            <BackButton/>
            <NextButton/>
          </View>
        </View>
      </View>
  );
}

export default AddPillTypeScreen;