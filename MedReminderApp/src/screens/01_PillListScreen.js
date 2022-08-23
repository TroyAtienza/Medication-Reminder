import React, { Component } from 'react';
import { PillList } from '../model/PillList';
import AddButton from '../components/AddButton';
import { View } from 'react-native';
import createStyles from '../view/SplitView'
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import { useNavigation } from "@react-navigation/native";

const styles = createStyles()

const PillListScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNav/>
      <View style={styles.topScreen}>
        <AddButton onPress={() => navigation.navigate("PillType")}/>
        <PillboxCarousel/>
      </View>
      <View style={styles.bottomScreen}>
        <PillList day={"Monday"}/>
      </View>
    </View>
  );
}

export default PillListScreen;