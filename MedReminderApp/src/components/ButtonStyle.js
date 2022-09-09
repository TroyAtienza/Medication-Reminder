import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    addButton: {
        backgroundColor: "#447199",
        borderRadius: 5,
        width: "20%",
        padding: 4,
    },
    addButtonText: {
        color:'white',
        fontSize:20,
        fontWeight: "500",
        textAlign:"center",
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    footerButtons: {
        backgroundColor: "#447199",
        borderRadius: 5,
        width: "20%",
        padding: 4,
    },
    footerText: {
        color:'white',
        fontSize:20,
        fontWeight: "500",
        textAlign:"center",
    },
})