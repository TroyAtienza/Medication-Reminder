import { StyleSheet, Dimensions } from "react-native";

export default function createStyles(overrides = {}) {
  return StyleSheet.create({...styles, ...overrides})
}

export const pos = {
  position: 'absolute',
  top: 0, 
  alignItems: 'center',
  justifyContent:'center',
}

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

const widthProportion = '100%';
const heightProportion = '50%';
const paddingTopBottom = 40;
const paddingLeftRight = 20;
const paddingBottom = 20;

// Pill Shape & Size Constants
const optionSize = 80;
const tabletWidth = optionSize/2;
const tabletHeight = optionSize/2;
const capsuletWidth = optionSize/4;
const capsuletHeight = optionSize*3/4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: paddingTopBottom,
  },
  topScreen: {
    position: 'relative',
    backgroundColor: '#E7ECEF',
    width: widthProportion,
    height: "40%",
    paddingTop: paddingTopBottom,
    paddingBottom: paddingBottom,
  },
  bottomScreen: {   
    backgroundColor: '#919DA3',
    width: widthProportion,
    height: "60%",
    paddingTop: paddingTopBottom,
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },
  topAddScreen: {
    position: 'relative',
    backgroundColor: '#E7ECEF',
    width: widthProportion,
    height: "30%",
    paddingVertical: 10,
  },
  bottomAddScreen: {   
    backgroundColor: '#919DA3',
    width: widthProportion,
    height: "70%",
    paddingBottom: paddingTopBottom,
  },
  
  // Pill Shape Screen
  // Title Section
  titleContainer: {
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleText: {
    paddingHorizontal: paddingLeftRight,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    color: "#365F88",
    fontWeight : "bold", 
    fontSize: 20,
  },
  // Button Section
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // Individual Buttons
  option: {
    backgroundColor: '#82B2D6',
    borderRadius: 20,
    width: optionSize,
    height: optionSize,
    marginLeft: 10,
  },
  firstOption: {
    marginLeft: 0,
  },
  // Image Styling
  tablets: {
    width: tabletWidth,
    height: tabletHeight,
    marginLeft: optionSize/2 - tabletWidth/2,
    marginTop: optionSize/2 - tabletHeight/2,
  },
  capsules: {
    width: capsuletWidth,
    height: capsuletHeight,
    marginLeft: optionSize/2 - capsuletWidth/2,
    marginTop: optionSize/2 - capsuletHeight/2,
  }
});