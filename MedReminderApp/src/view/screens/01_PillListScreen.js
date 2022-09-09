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

const PillListScreen = (props) => {
  const [index, setIndex] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopNav/>
      <View style={styles.topScreen}>
        <AddButton onPress={() => {
          createNewPill();
          navigation.navigate("PillType");
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