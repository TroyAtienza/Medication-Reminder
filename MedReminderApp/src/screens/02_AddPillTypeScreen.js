import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import createStyles from '../view/SplitView'
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';
import { setPillType, setPillSize } from '../controller/PillController';

const AddPillTypeScreen = (props) => {
  const navigation = useNavigation();
  const styles = createStyles();

  /* The images used. Requires static initialization.
   See: https://gitlab.ecs.vuw.ac.nz/course-work/swen325/2022/assignment2/t11/medication-reminder/-/issues/16#note_327886 */
  const images = [
    {src: require("../assets/Pill_Capsule.png"), optionStyle: [styles.option, styles.firstOption] , pillStyle: styles.capsules, type: "capsule"},
    {src: require("../assets/Pill_Capsule_Oval.png"), optionStyle: styles.option , pillStyle: styles.capsules, type: "capsule"},
    {src: require("../assets/Pill_Tablet.png"), optionStyle: styles.option , pillStyle: styles.tablets, type: "tablet"},
    {src: require("../assets/Pill_Tablet_No_Line.png"), optionStyle: styles.option , pillStyle: styles.tablets, type: "tablet"},
    {src: require("../assets/Pill_Tablet_Triangle.png"), optionStyle: styles.option , pillStyle: styles.tablets, type: "tablet"}
  ];

  // Arrays that hold the sizes for capsule and tablets.
  const capsuleSizes = [styles.smallCapsule, styles.mediumCapsule, styles.largeCapsule];
  const tabletSizes = [styles.smallTablet, styles.mediumTablet, styles.largeTablet];

  // Updates the image displayed to the one chosen by user.
  const [chosen, setChosen] = useState(
    {src: require("../assets/Pill_Capsule.png"), pillStyle: capsuleSizes},
  );

  /**
   * Calls pill type setter from PillController and updates the chosen image state.
   * Styling depends on the type of pill.
   * @param {*} item The item to set to.
   */
  const onPressShape = (item) => {
    setPillType(item.src);
    if (item.type === "capsule") {
      setChosen({src: item.src, pillStyle: capsuleSizes});
    }
    else if (item.type === "tablet") {
      setChosen({src: item.src, pillStyle: tabletSizes});
    }
  }

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
          {/* Shape Select */}
          <View style={pillTypeStyles.shapeSelect}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={ ({item, index}) => (
                <TouchableOpacity style={item.optionStyle} onPress={()=>{onPressShape(item)}}>
                  <Image source={item.src} style={item.pillStyle} key={index}/>
                </TouchableOpacity>
              )}
            />            
          </View>
          {/* Size Select */}
          <View style={pillTypeStyles.sizeSelect}>
            {/* Small Option */}
            <TouchableOpacity
              style={[styles.option, styles.largeOption, styles.firstOption]}
              onPress={()=>{setPillSize("Small")}}
            >
              <Image source={chosen.src} style={chosen.pillStyle[0]}/>
            </TouchableOpacity>

            {/* Medium Option */}
            <TouchableOpacity
              style={[styles.option, styles.largeOption]}
              onPress={()=>{setPillSize("Medium")}}
            >
              <Image source={chosen.src} style={chosen.pillStyle[1]}/>
            </TouchableOpacity>

            {/* Large Option */}
            <TouchableOpacity
              style={[styles.option, styles.largeOption]}
              onPress={()=>{setPillSize("Large")}}
            >
              <Image source={chosen.src} style={chosen.pillStyle[2]}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <BackButton onPress={() => navigation.navigate("Home")}/>
            <NextButton onPress={() => navigation.navigate("PillColour")}/>
          </View>
        </View>
      </View>
  );
}

const pillTypeStyles = createStyles({
  shapeSelect: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
  },
  sizeSelect: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default AddPillTypeScreen;