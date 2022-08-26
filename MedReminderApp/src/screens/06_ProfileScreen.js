import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import createStyles from '../view/SplitView';

//TODO:
// - user can select image from phone file
// - make the default image an empty icon
// - line everything up...
// - Signup/Login page

const splitScreenStyles = createStyles();

const ProfileScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topNav}>
                <Button title='Back' style={styles.button} onPress={() => navigation.navigate('Home')}></Button>
                <Text style={styles.title}> Profile </Text>
                <View></View>
            </View>
            <View style={styles.body}>
                <Image></Image>
                <Text> Username: username_here </Text> 
                <Text> Options: </Text>
                <Button title='Change password' style={styles.button} onPress={() => Alert("Put change password function here")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    topNav: { 
        backgroundColor : "#A3CEF1", 
        height : "15%", 
        width: "100%",
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 40,
    },
    button: {
        backgroundColor : "#A3CEF1", 
        height : "15%", 
        width: "10%",
    },
    title: {
        color : "#6096BA", 
        fontSize : 30, 
        fontWeight: "bold",
    },
    body: {
        width:'100%',
        height: '100%',
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: 'center'
    },
});


export default ProfileScreen;