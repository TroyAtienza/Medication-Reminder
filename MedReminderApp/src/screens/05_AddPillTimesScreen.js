import { StyleSheet, Text, View } from 'react-native';
import createStyles from '../view/SplitView';
import TopNav from '../view/TopNav';

const splitScreenStyles = createStyles();

const AddPillTimesScreen = (props) => {
  return (
    <View style={splitScreenStyles.container}>
      <TopNav/>
      <View style={splitScreenStyles.topScreen}>  
        <Text>Customise your Dosage Schedule</Text>
      </View>

      <View style={splitScreenStyles.bottomScreen}>

        {/* Frequency Input */}
        <View style={styles.row}>
          <Text> Select Dosage per day: </Text>
        </View>

        {/* Live Dosage List */}

        {/* Buttons */}
        { /*<View style={styles.row}>
            <View style={styles.bottomButtons}>
              <Button style={styles.button} title="Back" onPress={() =>  this.props.navigation.navigate('PillType')}></Button>
            </View>
            <View style={styles.bottomButtons}>
              <Button style={styles.button} title="Next" onPress={() =>  this.props.navigation.navigate('PillDetails')}></Button>
        </View>*/ }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

});

export default AddPillTimesScreen;