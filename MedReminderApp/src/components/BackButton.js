import { Text, TouchableOpacity } from 'react-native'

const buttonStyle = require('../styles/ButtonStyle')
const BackButton = (props) => {
    return (
        <TouchableOpacity style={buttonStyle.footerButtons} onPress={props.onPress}>
            <Text style={buttonStyle.footerText}>Back</Text>
        </TouchableOpacity>
    )
}

export default BackButton;