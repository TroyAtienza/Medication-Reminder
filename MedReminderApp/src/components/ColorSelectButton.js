import { View, TouchableOpacity } from 'react-native'

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

export default ColorSelectButton;