import { View, Text, TouchableOpacity } from 'react-native'


const buttonStyle = require('./ButtonStyle')
const AddButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={buttonStyle.buttons} onPress={props.onPress}>
                <Text style={buttonStyle.text}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddButton;