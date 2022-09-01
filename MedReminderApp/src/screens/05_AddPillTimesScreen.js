import { FlatList, TextInput, StyleSheet, Text, View } from 'react-native';
import createStyles from '../view/SplitView';
import TopNav from '../view/TopNav';
import React from 'react';

// TODO:
// - add time picker dependency
// - render list dependant on dosage amount
// - make this a class?
// - wrap bottom screen in a flat list.
// - finish button

const splitScreenStyles = createStyles();

const ColorSelectButton = ({ onPress, backgroundColor }) => (
  <View>
    <TouchableOpacity style={{
      borderRadius: 15,
      height: 60,
      width: 60,
      backgroundColor: backgroundColor,
      }}
      onPress={onPress}>
    </TouchableOpacity>
  </View>
);

const PillTime = ({}) => (
  <View style={styles.listText}>
  
  </View>
);

const AddPillTimesScreen = (props) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

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
        <View style={styles.row}>
          <Text style={styles.bottomScreenText}> Pill dosage per day: </Text>
          <TextInput 
          onChangeText={onChangeText}
          value={number} 
          placeholder="Enter dosage amount" style={styles.bottomScreenText}
          keyboardType="numeric"/>
        </View>

        {/* Live Dosage List */}
        <View style={styles.row}>
          <Text style={styles.bottomScreenText}> Select Dosage Times: </Text>
          <PillTime></PillTime>
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