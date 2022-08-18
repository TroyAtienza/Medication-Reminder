import { View, Text, TouchableOpacity } from 'react-native'

const buttonStyle = require('./ButtonStyle')
const BackButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={buttonStyle.buttons} onPress={props.onPress}>
                <Text style={buttonStyle.text}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BackButton;