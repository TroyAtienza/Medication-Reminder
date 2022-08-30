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

// Pill Shape & Size Constants
const optionSize = dimensions.fullWidth/5;
const largeOptionSize = dimensions.fullWidth/4;
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
    height: heightProportion,
    paddingTop: paddingTopBottom,
    paddingBottom: paddingTopBottom,
  },
  bottomScreen: {   
    backgroundColor: '#919DA3',
    width: widthProportion,
    height: heightProportion,
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
  largeOption: {
    width: largeOptionSize,
    height: largeOptionSize,
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
  },
  // Size Styling
  smallCapsule: {
    width: largeOptionSize/5.5,
    height: largeOptionSize*3/5.5,
    marginLeft: largeOptionSize/2 - largeOptionSize/5.5/2,
    marginTop: largeOptionSize/2 - largeOptionSize*3/5.5/2,
  },
  smallTablet:{
    width: largeOptionSize/2.5,
    height: largeOptionSize/2.5,
    marginLeft: largeOptionSize/2 - largeOptionSize/2.5/2,
    marginTop: largeOptionSize/2 - largeOptionSize/2.5/2,
  },
  mediumCapsule: {
    width: largeOptionSize/4.5,
    height: largeOptionSize*3/4.5,
    marginLeft: largeOptionSize/2 - largeOptionSize/4.5/2,
    marginTop: largeOptionSize/2 - largeOptionSize*3/4.5/2,
  },
  mediumTablet:{
    width: largeOptionSize/2,
    height: largeOptionSize/2,
    marginLeft: largeOptionSize/2 - largeOptionSize/2/2,
    marginTop: largeOptionSize/2 - largeOptionSize/2/2,
  },
  largeCapsule: {
    width: largeOptionSize/3.5,
    height: largeOptionSize*3/3.5,
    marginLeft: largeOptionSize/2 - largeOptionSize/3.5/2,
    marginTop: largeOptionSize/2 - largeOptionSize*3/3.5/2,
  },
  largeTablet:{
    width: largeOptionSize/1.5,
    height: largeOptionSize/1.5,
    marginLeft: largeOptionSize/2 - largeOptionSize/1.5/2,
    marginTop: largeOptionSize/2 - largeOptionSize/1.5/2,
  },
});