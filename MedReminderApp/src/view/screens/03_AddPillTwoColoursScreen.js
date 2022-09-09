import createStyles from '../../styles/GlobalStyles'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import TopNav from '../components/TopNav'
import { Component } from 'react';
import imageList from '../../model/images/ImageList';
import indexes from '../../model/images/ImageIndex';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';
import { setPillColour } from '../../controller/PillController';
import ColorSelectButton from '../components/ColorSelectButton';

// imported styles
const splitScreenStyles = createStyles();
const buttonStyle = require('../../styles/ButtonStyle');

// selected pill color information
const pillType = 'PT';
const { topColor, bottomColor } = 'w';
const color = 'ww';

class AddPillTwoColoursScreen extends Component {
  constructor() {
    super();
    this.state = { 
      topColor: 'w',
      bottomColor: 'w',
      color: pillType + 'ww',
    }
  }

  render() {
    const {topColor, bottomColor, color} = this.state; // keeps track of the current states' color, gets updated as color buttons are pressed
    const searchIndex = indexes.filter( imageID => imageID.id.includes(color)); // searches the index map for a given color id
    const renderImage = searchIndex.map( item => <Image key={item} style={styles.image} source={imageList[item.index]}/>) // renders the image on click

    return (

      <View style={splitScreenStyles.container}>
        <TopNav/>

        {/* Top Screen */}
        <View style={splitScreenStyles.topScreen}>
          <Text style={styles.topText}> Select Pill Colours Below:</Text>
          { renderImage }
        </View>

        {/* Bottom Screen */}
        <View style={splitScreenStyles.bottomScreen}>
        
          {/* Top capsule */}
          <Text style={styles.bottomText}> Top Pill Colour: </Text>
          <View style={styles.colorSelect}>
            <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { this.setState({color: pillType + 'r' + bottomColor, topColor: 'r'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#58D68D' onPress={() => { this.setState({color: pillType + 'g' + bottomColor, topColor: 'g'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#3498DB' onPress={() => { this.setState({color: pillType + 'b' + bottomColor, topColor: 'b'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { this.setState({color: pillType + 'w' + bottomColor, topColor: 'w'}), renderImage }}/>
          </View>

          {/* Bottom capsule */}
          <Text style={styles.bottomText}> Bottom Pill Colour: </Text>
          <View style={styles.colorSelect}>
            <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { this.setState({color: pillType + topColor + 'r', bottomColor: 'r'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#58D68D' onPress={() => { this.setState({color: pillType + topColor + 'g', bottomColor: 'g'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#3498DB' onPress={() => { this.setState({color: pillType + topColor + 'b', bottomColor: 'b'}), renderImage }}/>
            <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { this.setState({color: pillType + topColor + 'w', bottomColor: 'w'}), renderImage }}/>
          </View>

          {/* Buttons */}
          <View style={buttonStyle.footerContainer}>
            <BackButton onPress={() => this.props.navigation.navigate('PillType')}/>
            <NextButton onPress={() => {
              setPillColour(topColor+bottomColor); // updates current the new pills' colours information
              this.props.navigation.navigate('PillDetails');
            }}/>
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
    left: '38%',
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

export default AddPillTwoColoursScreen;