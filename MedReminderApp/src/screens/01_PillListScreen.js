import React, { Component, useState } from 'react';
import { PillList } from '../model/PillList';
import AddButton from '../components/AddButton';
import { View } from 'react-native';
import createStyles from '../view/SplitView'
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import { useNavigation } from "@react-navigation/native";

const styles = createStyles()

const PillListScreen = (props) => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNav/>
      <View style={styles.topScreen}>
        <AddButton onPress={() => navigation.navigate("PillType")}/>
         <PillboxCarousel setIndex = {setIndex}/>
      </View>
      <View style={styles.bottomScreen}>
        <PillList index = {index}/>
      </View>
    </View>
  );
}

export default PillListScreen;