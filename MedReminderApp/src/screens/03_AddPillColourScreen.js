import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, View, TouchableOpacity, Image, TouchableHighlightBase } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import TopNav from '../view/TopNav'
import { Component, useEffect } from 'react';
import imageList from '../assets/ImageList';
import indexes from '../assets/ImageIndex';

// TODO:
// - need to link chosen color to pill object (can do once add pill type is done)
// - change color of button to grey after press
// - live pill change - 1 state behind
// - need to implement for other pill types

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
    const {topColor, bottomColor, color} = this.state;
    const searchIndex = indexes.filter( imageID => imageID.id.includes(color));

    return (

      <View style={splitScreenStyles.container}>
        <TopNav/>

        {/* Top Screen */}
        <View style={splitScreenStyles.topScreen}>
          <Text>Select pill color!</Text>
          { searchIndex.map(item => <Image style={styles.image} source={imageList[item.index]}/> )}
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