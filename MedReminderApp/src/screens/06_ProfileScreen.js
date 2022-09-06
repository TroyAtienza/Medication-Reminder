import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import createStyles from '../view/SplitView';

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
            <View style={styles.userWrapper}>
                <Image
                    style={styles.profilePicture}
                    source={require('../assets/profile/pfp-placeholder.png')}>
                </Image>
                <View style={styles.userInfo}>
                    <Text style={styles.username}>John Smith</Text>
                    <View style={styles.mailWrapper}>
                        <Image style={styles.mailImage} source={require('../assets/profile/email.png')}/>
                        <Text style={styles.mailText}>example@email.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.options}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => {console.log("Put function here")}}
                >
                    <Image source={require("../assets/profile/lock.png")} style={{ tintColor: "black"}}/>
                    <Text style={styles.optionText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => {console.log("Put function here")}}
                >
                    <Image source={require("../assets/profile/edit.png")} style={{ tintColor: "black"}}/>
                    <Text style={styles.optionText}>Update Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => {console.log("Put function here")}}
                >
                    <Image source={require("../assets/profile/settings.png")} style={{ tintColor: "black"}}/>
                    <Text style={styles.optionText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionLogout}
                    onPress={() => {console.log("Put function here")}}
                >
                    <Image source={require("../assets/profile/log-out.png")} style={{ tintColor: "red"}}/>
                    <Text style={styles.logoutText}>Sign out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.finalPadding}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : "#A3CEF1",
        flex: 1,
        height : "100%",
        width : "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
    topNav: { 
        backgroundColor : "#A3CEF1",
        width: "100%",
        flex: 0.1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    button: {
        backgroundColor : "#A3CEF1",
        height : "15%",
        width: "10%",
    },
    title: {
        color : "#274C77", 
        fontSize : 30, 
        fontWeight: "bold",
        marginRight: 50,
    },
    body: {
        width:'100%',
        flex:0.3,
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: 'center'
    },
    userWrapper: {
        flexDirection: "row",
        width:'100%',
        flex: 0.2,
        paddingTop: 40,
        paddingBottom: 40,
        marginLeft: 40,
        alignItems: 'center'
    },
    userInfo: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    username: {
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 25,
    },
    mailWrapper: {
        marginLeft: 20,
        flexDirection: "row",
    },
    mailImage: {
        height: 20,
        width: 20,
    },
    mailText: {
        marginLeft: 6,
        fontWeight: "normal",
        fontSize: 16,
    },
    options: {
        marginTop: 10,
        width:'100%',
        flex: 0.55,
        alignItems: 'flex-start',
        marginLeft: 40,
        justifyContent: "space-around",

    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        width: "90%",
        backgroundColor: '#fff',
    },
    optionLogout: {
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: "center",
        padding: 10,
        marginTop: 25,
        borderRadius: 20,
        width: "90%",
    },
    optionText: {
        marginLeft: 20,
        color : "#274C77",
        fontWeight: "bold",
        fontSize: 20,
    },
    logoutText: {
        marginLeft: 20,
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
    },
    profilePicture:  {
        width: 100,
        height: 100,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    finalPadding: {
        flex: 0.25,
    }
});

export default ProfileScreen;