import React, { useState } from 'react';
import { PillList } from '../../model/PillList';
import AddButton from '../components/AddButton';
import { View } from 'react-native';
import createStyles from '../../styles/GlobalStyles'
import TopNav from '../components/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import { useNavigation } from "@react-navigation/native";
import { createNewPill } from '../../controller/PillController';

const styles = createStyles()


/**  
 * Pill list screen shows the list of pills for each day of the week.
 * These pills can be deleted and highlighted to show that the pill has been taken.
 */
const PillListScreen = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNav/>
      <View style={styles.topScreen}>
        <AddButton onPress={() => {
          createNewPill(); //create new pill when add button is pressed
          navigation.navigate("PillType"); //navigate to pill type screen
          return;
          }}/>
         <PillboxCarousel setIndex = {setIndex}/>
      </View>
      <View style={styles.bottomScreen}>
        <PillList index = {index}/>
      </View>
    </View>
  );
}


export default PillListScreen;