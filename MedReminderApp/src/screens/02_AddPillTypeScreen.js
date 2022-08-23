import { StyleSheet, Text, View } from 'react-native';

const AddPillTypeScreen = (props) => {
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

const styles = StyleSheet.create({

});

export default AddPillTypeScreen;