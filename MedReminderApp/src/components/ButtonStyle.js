import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    addButton: {
        backgroundColor: "#447199",
        borderRadius: 5,
        width: "30%",
        padding: 4,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    addButtonText: {
        color:'white',
        fontSize: 25,
        fontWeight: "500",
        textAlign:"center",
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 40,
    },
    footerButtons: {
        backgroundColor: "#447199",
        borderRadius: 10,
        width: "30%",
        height: 50,
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    footerText: {
        color:'white',
        fontSize: 25,
        fontWeight: "500",
        textAlign:"center",
    },
})