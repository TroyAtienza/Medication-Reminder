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
    backgroundColor: '#fff',
    width: widthProportion,
    height: heightProportion,
    paddingTop: paddingTopBottom,
    paddingBottom: paddingTopBottom,
  },
  bottomScreen: {   
    backgroundColor: '#808080',
    width: widthProportion,
    height: heightProportion,
    paddingTop: paddingTopBottom,
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },
  topAddScreen: {
    position: 'relative',
    backgroundColor: '#fff',
    width: widthProportion,
    height: "30%",
    paddingVertical: 10,
  },
  bottomAddScreen: {   
    backgroundColor: '#808080',
    width: widthProportion,
    height: "70%",
    paddingBottom: paddingTopBottom,
  },
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
    backgroundColor: "red",
  },
});