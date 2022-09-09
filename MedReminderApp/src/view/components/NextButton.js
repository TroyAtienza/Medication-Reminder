import { Text, TouchableOpacity } from 'react-native'

/**
 * Styles for add, next, and back.
 */
const buttonStyle = require('../../styles/ButtonStyle');

/**
 * Next button component. Seen during the pill addition screens.
 * @param {props.onPress} props Navigation. 
 * @returns 
 */
const NextButton = (props) => {
    return (
        <TouchableOpacity style={buttonStyle.footerButtons} onPress={props.onPress}>
            <Text style={buttonStyle.footerText}>Next</Text>
        </TouchableOpacity>
    )
}

export default NextButton;