import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import createStyles from '../view/SplitView';
import TopNav from '../view/TopNav';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

// TODO:
// - add time picker dependency
// - render list dependant on dosage amount
// - make this a class?
// - wrap bottom screen in a flat list.
// - finish button

const splitScreenStyles = createStyles();

const AddPillTimesScreen = (props) => {
  const [open, setOpen] = useState(false);
  const [dosageAmount, setValue] = useState(null);
  const [dosageItems, setItems] = useState([
    { label: 'Once a day', value: '1' }, 
    { label: 'Twice a day', value: '2' },
    { label: 'Three times a day', value: '3' }, 
    { label: 'Four times a day', value: '4' },
    { label: 'Five times a day', value: '5' }, 
  ]);

  return (
    <View style={splitScreenStyles.container}>
      <TopNav/>

      {/* Top Screen */}
      <View style={splitScreenStyles.topScreen}>  
        <Text style={styles.topText}>Set a Time to Take Your Pill:</Text>
      </View>

      {/* Bottom Screen */}
      <View style={splitScreenStyles.bottomScreen}>

        {/* Frequency Input */}
        <View style={styles.dropdown}>
          <Text style={styles.bottomScreenText}> Select Dosage Amount per day: </Text>
          <DropDownPicker 
          open={open}
          value={dosageAmount}
          items={dosageItems}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}>
          </DropDownPicker>
        </View>

        {/* Live Dosage List */}
        <View style={styles.row}>
          <Text style={styles.bottomScreenText}> Select Dosage Times: </Text>
          <FlatList
          data={[
          {key: 'Pill 1:'},
          {key: 'Pill 2:'},
          {key: 'Pill 3:'},
          {key: 'Pill 4:'},
          {key: 'Pill 5:'},
          {key: 'Pill 6:'},
        ]}
        renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
        />
        </View>

        {/* Buttons */}
        {/*<View style={styles.row}>
          <View style={styles.bottomButtons}>
            <Button style={styles.button} title="Back" onPress={() =>  this.props.navigation.navigate('PillType')}></Button>
          </View>
          <View style={styles.bottomButtons}>
            <Button style={styles.button} title="Finish" onPress={() =>  this.props.navigation.navigate('Home')}></Button>
        </View> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
  },
  row: {
    flex: 1,
  },
  topText : {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#274C77',
  },
  bottomScreenText : {
    color: 'white',
    marginBottom: 10,
    fontSize: 16,
  },
  bottomButtons: {
    justifyContent: 'space-between'
  },
  listText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
});

export default AddPillTimesScreen;