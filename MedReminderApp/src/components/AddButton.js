import { View, Text, TouchableOpacity } from 'react-native'

const buttonStyle = require('./ButtonStyle')
const AddButton = (props) => {
    return (
        <TouchableOpacity style={buttonStyle.Button} onPress={props.onPress}>
            <Text style={buttonStyle.ButtonText}>Add</Text>
        </TouchableOpacity>
    )
}

export default AddButton;