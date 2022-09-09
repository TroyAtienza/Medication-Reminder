import { View, TouchableOpacity } from 'react-native'

/* 
* Component for the color buttons used for AddPillColourScreen and AddPillTwoColourScreen
* Passes given onPress and backgroundColor parameters.
*/
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

export default ColorSelectButton;