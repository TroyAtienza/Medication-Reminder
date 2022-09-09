import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native';
import TopNav from '../view/TopNav'
import { Component } from 'react';
import imageList from '../assets/ImageList';
import indexes from '../assets/ImageIndex';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';

const splitScreenStyles = createStyles();
const buttonStyle = require('../styles/ButtonStyle');

// selected pill color information
const pillType = 'PTT'; // replace id with this infront to differentiate the pill types
const color = 'w';

// Touchable opacity style
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

class AddPillColourScreen extends Component {
  constructor() {
    super();
    this.state = {
      color: pillType + 'w',
    }
  }

  render() {
    const {color} = this.state; // keeps track of the current states' color
    const searchIndex = indexes.filter( imageID => imageID.id.includes(color)); // searches the index map for a given color id
    const renderImage = searchIndex.map( item => <Image key={item} style={styles.image} source={imageList[item.index]}/>) // renders the image on click

    return (

      <View style={splitScreenStyles.container}>
        <TopNav/>

        {/* Top Screen */}
        <View style={splitScreenStyles.topScreen}>
          <Text style={styles.topText}> Select Pill Colour Below:</Text>
          { renderImage }
        </View>

        {/* Bottom Screen */}
        <View style={splitScreenStyles.bottomScreen}>
        
          {/* Top capsule */}
          <Text style={styles.bottomText}> Pill Colour: </Text>
          <View style={styles.colorSelect}>
            <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { this.setState({color: pillType + 'r'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#58D68D' onPress={() => { this.setState({color: pillType + 'g'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#3498DB' onPress={() => { this.setState({color: pillType + 'b'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { this.setState({color: pillType + 'w'}), renderImage }}/>
          </View>

          {/* Buttons */}
          <View style={buttonStyle.footerContainer}>
            <BackButton onPress={() =>  this.props.navigation.navigate('PillType')}/>
            <NextButton onPress={() =>  this.props.navigation.navigate('PillDetails')}/>
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
    height: 100,
    width: 100,
    flex: 1,
    left: '38%', // im not sure why its at the middle at 38%
  },
  topText : {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#274C77',
  },
  bottomText : {
    color: 'white',
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
  }
});

export default AddPillColourScreen;