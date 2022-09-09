import { Text, TouchableOpacity, View } from 'react-native'

/**
 * Styles for add, next, and back.
 */
const buttonStyle = require('../../styles/ButtonStyle');

/**
 * Add button component. Seen in PillListScreen.
 * @param {props.onPress} props Navigation. 
 * @returns 
 */
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