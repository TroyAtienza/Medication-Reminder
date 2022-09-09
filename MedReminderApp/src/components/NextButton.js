import { Text, TouchableOpacity } from 'react-native'

const buttonStyle = require('./ButtonStyle')
const NextButton = (props) => {
    return (
        <TouchableOpacity style={buttonStyle.footerButtons} onPress={props.onPress}>
            <Text style={buttonStyle.footerText}>Next</Text>
        </TouchableOpacity>
    )
}

export default NextButton;