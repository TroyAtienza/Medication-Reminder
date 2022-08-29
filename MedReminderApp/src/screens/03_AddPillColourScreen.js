import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, View, TouchableOpacity, Image, TouchableHighlightBase } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import TopNav from '../view/TopNav'
import { Component } from 'react';
import imageList from '../assets/ImageList';
import indexes from '../assets/ImageIndex';

// TODO:
// - need to link chosen color to new pill object (can do once add pill type is done)
// - change color of button to grey after press
// - navigation
// - implement for different pills

const splitScreenStyles = createStyles();

// selected pill color information
const pillType = 'PC'; // replace id with this infront to differentiate the pill types
const { topColor, bottomColor } = 'w';
const color = 'ww';

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

  // explore this
  static navigationOptions = {
    header: null,
  };

  render() {
    const {topColor, bottomColor, color} = this.state; // keeps track of the current states' color
    const searchIndex = indexes.filter( imageID => imageID.id.includes(color)); // searches the index map for a given color id
    const renderImage = searchIndex.map( item => <Image style={styles.image} source={imageList[item.index]}/>) // renders the image on click

    return (

      <View style={splitScreenStyles.container}>
        <TopNav/>

        {/* Top Screen */}
        <View style={splitScreenStyles.topScreen}>
          <Text style={styles.bodyText}> Select Pill Colors Below:</Text>
          { renderImage }
        </View>

        {/* Bottom Screen */}
        <View style={splitScreenStyles.bottomScreen}>
        
          {/* Top capsule */}
          <View style={styles.colorSelect}>
            <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { this.setState({color: 'r' + bottomColor, topColor: 'r'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#58D68D' onPress={() => { this.setState({color: 'g' + bottomColor, topColor: 'g'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#3498DB' onPress={() => { this.setState({color: 'b' + bottomColor, topColor: 'b'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { this.setState({color: 'w' + bottomColor, topColor: 'w'}), renderImage }}/>
          </View>

          {/* Bottom capsule */}
          <View style={styles.colorSelect}>
            <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { this.setState({color: topColor + 'r', bottomColor: 'r'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#58D68D' onPress={() => { this.setState({color: topColor + 'g', bottomColor: 'g'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#3498DB' onPress={() => { this.setState({color: topColor + 'b', bottomColor: 'b'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { this.setState({color: topColor + 'w', bottomColor: 'b'}), renderImage }}/>
          </View>

          {/* Buttons */}
          <View style={styles.colorSelect}>
            <View style={styles.bottomButtons}>
              <Button style={styles.button} title="Back" onPress={() => navigation.navigate('PillType')}></Button>
            </View>
            <View style={styles.bottomButtons}>
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
    height: 80,
    width: 80,
    flex: 1,
    left: '40%', // im not sure why its at the middle at 40%
  },
  bottomButtons: {
    marginBottom: 50,
    justifyContent: 'space-between'
  },
  button : {
    
  },
  bodyText : {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#274C77',
  },
});

export default AddPillColourScreen;