import Images from '../model/Images';
import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, View, TouchableOpacity, Image, TouchableHighlightBase } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import TopNav from '../view/TopNav'
import { Component, useEffect } from 'react';

// TODO:
// - need to link chosen color to pill object (can do once add pill type is done)
// - change color of button to grey after press
// - live pill change - 1 state behind
// - need to implement for other pill types
// - implement mvc architecture

const splitScreenStyles = createStyles();

// selected pill color information
const pillType = 'PC'; // replace id with this infront to differentiate the pill types
const { topColor, bottomColor } = 'w';
const color = 'ww';

// index and images (can add to models)
const indexes = [{id : 'rr', index : 0}, {id : 'rg', index : 1}, {id : 'rb', index : 2}, {id : 'rw', index : 3},
  {id : 'gr', index : 4}, {id : 'gg', index : 5}, {id : 'gb', index : 6}, {id : 'gw', index : 7},
  {id : 'br', index : 8}, {id : 'bg', index : 9}, {id : 'bb', index : 10}, {id : 'bw', index : 11},
  {id : 'wr', index : 12}, {id : 'wg', index : 13}, {id : 'wb', index : 14}, {id : 'ww', index : 15},];

const images = [Images.PCRedRed, Images.PCRedGreen, Images.PCRedBlue, Images.PCRedWhite,
  Images.PCGreenRed, Images.PCGreenGreen, Images.PCGreenBlue, Images.PCGreenWhite,
  Images.PCBlueRed, Images.PCBlueGreen, Images.PCBlueBlue, Images.PCBlueWhite,
  Images.PCWhiteRed, Images.PCWhiteGreen, Images.PCWhiteBlue, Images.PCWhiteWhite,];


// Touchable opacity style
const ColorSelectButton = ({ onPress, backgroundColor}) => (
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

class AddPillColourScreen extends Component {
  constructor() {
    super();
    this.state = { 
      topColor: 'w',
      bottomColor: 'w',
      color: 'ww',
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const {topColor, bottomColor, color} = this.state;
    const searchIndex = indexes.filter( imageID => imageID.id.includes(color));

    return (

      <View style={splitScreenStyles.container}>
        <TopNav/>

        {/* Top Screen */}
        <View style={splitScreenStyles.topScreen}>
          <Text>Select pill color!</Text>
          { searchIndex.map(item => <Image style={styles.image} source={images[item.index]}/> )}
        </View>

        {/* Bottom Screen */}
        <View style={splitScreenStyles.bottomScreen}>
        
          {/* Top capsule */}
          <View style={styles.colorSelect}>
            <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { this.setState({topColor: 'r', color: topColor + bottomColor}) }}/>
            <ColorSelectButton backgroundColor='#58D68D' onPress={() => { this.setState({topColor: 'g', color: topColor + bottomColor}) }}/>
            <ColorSelectButton backgroundColor='#3498DB' onPress={() => { this.setState({topColor: 'b', color: topColor + bottomColor}) }}/>
            <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { this.setState({topColor: 'w', color: topColor + bottomColor}) }}/>
          </View>

          {/* Bottom capsule */}
          <View style={styles.colorSelect}>
            <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { this.setState({bottomColor: 'r', color: topColor + bottomColor}) }}/>
            <ColorSelectButton backgroundColor='#58D68D' onPress={() => { this.setState({bottomColor: 'g', color: topColor + bottomColor}) }}/>
            <ColorSelectButton backgroundColor='#3498DB' onPress={() => { this.setState({bottomColor: 'b', color: topColor + bottomColor}) }}/>
            <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { this.setState({bottomColor: 'w', color: topColor + bottomColor}) }}/>
          </View>

          {/* Buttons */}
          <View style={styles.colorSelect}>
            <View style={styles.bottomButton}>
              <Button style={styles.button} title="Back" onPress={() => navigation.navigate('PillType')}></Button>
            </View>
            <View style={styles.bottomButton}>
              <Button style={styles.button} title="Next" onPress={() => navigation.navigate('PillDetails')}></Button>
          </View>
          </View>

        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorSelect: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  image: {
    height: 130,
    width: 130,
    justifyContent: 'center',
  },
  bottomButton: {
    marginBottom: 50,
    justifyContent: 'space-between'
  },
  button : {
    
  },
});

export default AddPillColourScreen;