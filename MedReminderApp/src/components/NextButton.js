import { View, Text, TouchableOpacity } from 'react-native'


const buttonStyle = require('./ButtonStyle')
const NextButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={buttonStyle.buttons} onPress={props.onPress}>
                <Text style={buttonStyle.text}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NextButton;