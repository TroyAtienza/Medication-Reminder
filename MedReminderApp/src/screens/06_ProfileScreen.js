import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import createStyles from '../view/SplitView';


const splitScreenStyles = createStyles();

const ProfileScreen = (profile) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topNav}>
                {/*<Button title='Back' style={styles.button} onPress={() => navigation.navigate('Home')}></Button>*/}
                <TouchableOpacity style={styles.navBackButton} onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../assets/buttons/back.png')}
                    />
                </TouchableOpacity>
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
            <View style={styles.body}>
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
            </View>
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    //TODO MAKE GLOBAL
    navBackButton: {
        marginLeft: 10,
    },
    title: {
        color : "#274C77", 
        fontSize : 30, 
        fontWeight: "bold",
        marginRight: 50,
    },
    body: {
        marginTop: 20,
        backgroundColor : "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width:'100%',
        flex: 1,
        alignItems: 'center'
    },
    userWrapper: {
        flexDirection: "column",
        width:'100%',
        flex: 0.2,
        paddingTop: 25,
        paddingBottom: 60,
        alignItems: 'center'
    },
    userInfo: {
        flexDirection: "column",
        alignItems: "center",
    },
    username: {
        fontWeight: "bold",
        fontSize: 25,
    },
    mailWrapper: {
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
        marginTop: 30,
        width:'100%',
        flex: 0.6,
        alignItems: 'flex-start',
        marginLeft: 40,
        justifyContent: "space-between",
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        width: "90%",
        backgroundColor : "#A3CEF1",
    },
    optionLogout: {
        flexDirection: "row",
        backgroundColor : "#A3CEF1",
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
});

export default ProfileScreen;