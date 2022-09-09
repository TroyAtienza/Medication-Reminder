import { Text, TouchableOpacity, View } from 'react-native'

const buttonStyle = require('../styles/ButtonStyle')
const AddButton = (props) => {
    return (
        <View style={buttonStyle.buttonContainer}>
            <TouchableOpacity style={buttonStyle.addButton} onPress={props.onPress}>
                <Text style={buttonStyle.addButtonText}>Add Pill</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddButton;