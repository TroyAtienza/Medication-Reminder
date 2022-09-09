import { Text, TouchableOpacity } from 'react-native'

/**
 * Styles for add, next, and back.
 */
const buttonStyle = require('../../styles/ButtonStyle');

/**
 * Back button component. Seen during the pill addition screens.
 * @param {props.onPress} props Navigation. 
 * @returns 
 */
const BackButton = (props) => {
    return (
        <TouchableOpacity style={buttonStyle.footerButtons} onPress={props.onPress}>
            <Text style={buttonStyle.footerText}>Back</Text>
        </TouchableOpacity>
    )
}

export default BackButton;