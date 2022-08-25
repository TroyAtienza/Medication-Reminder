import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import createStyles from '../view/SplitView'
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';
import { setPillType } from '../controller/PillController';

const styles = createStyles()

const AddPillTypeScreen = (props) => {
  /* The images used. Requires static initialization.
   See: https://gitlab.ecs.vuw.ac.nz/course-work/swen325/2022/assignment2/t11/medication-reminder/-/issues/16#note_327886 */
  const [images, setImages] = useState([
    {src: require("../assets/Pill_Capsule.png"), optionStyle: [styles.option, styles.firstOption] , pillStyle: styles.capsules},
    {src: require("../assets/Pill_Tablet_Oval.png"), optionStyle: styles.option , pillStyle: styles.capsules},
    {src: require("../assets/Pill_Tablet.png"), optionStyle: styles.option , pillStyle: styles.tablets},
    {src: require("../assets/Pill_Tablet_No_Line.png"), optionStyle: styles.option , pillStyle: styles.tablets},
    {src: require("../assets/Pill_Tablet_Triangle.png"), optionStyle: styles.option , pillStyle: styles.tablets}
  ]);

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
          <View style={pillTypeStyles.shapeSelect}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={ ({item, index}) => (
                <TouchableOpacity style={item.optionStyle} onPress={()=>{setPillType(item.src)}}>
                  <Image source={item.src} style={item.pillStyle} key={index}/>
                </TouchableOpacity>
              )}
            />            
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

const pillTypeStyles = createStyles({
  shapeSelect: {
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
  },
});

export default AddPillTypeScreen;