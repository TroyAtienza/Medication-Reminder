import {Alert, Dimensions, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import ProfileController from "../controller/ProfileController";
import ProfileOperations, {updateProfile} from "../controller/ProfileController";
import {useState} from "react";
import {auth} from "../Firebase";
import {reauthenticateWithCredential, updateEmail, updatePassword, signOut } from "firebase/auth"
import firebase from "firebase/compat";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
    const navigation = useNavigation();

    const [currentProfile, setProfile] = useState(ProfileController.profile);
    const [isInputVisible, setInputVisible] = useState(false);
    const [reauthVisible, setReauthVisible] = useState(false);
    const [reauthInput, setReuthInput] = useState("");
    const [textInput, setTextInput] = useState("");
    const [buttonPressed, setButtonPressed] = useState("");

    const confirmInput = () => {
        const userProvidedPassword = reauthInput;
        const credential = firebase.auth.EmailAuthProvider.credential(
            auth.currentUser.email,
            userProvidedPassword,
        )
        reauthenticateWithCredential(auth.currentUser, credential)
            .then(() => {
                toggleReauthVisibility();
                toggleInputVisibility();
                setReuthInput("");
            }).catch(error => {
            console.log("Re-authentication failed " + error)
        })
    }

    const enterInput = () => {
        toggleInputVisibility();
        switch (buttonPressed) {
            case "Email":
                ProfileOperations.editEmail(textInput)
                updateEmail(auth.currentUser, textInput)
                    .then(r => {
                    console.log("Email updated: " + r);
                }).catch(error => {
                    console.log("error occurred updating email: ");
                });
                break;
            case "Password":
                updatePassword(auth.currentUser, textInput)
                    .then(r => {
                        console.log("Password updated: " + r);
                    }).catch(error => {
                    console.log("error occurred updating password: ");
                });
                break;
        }

        setProfile(ProfileOperations.profile);
        updateProfile(ProfileOperations.profile)
            .then(r => console.log(r));
        setTextInput("");
    }

    const PromptForCredentials = () => {
        toggleReauthVisibility();
    }

    // Cancel user input
    const cancelInput = () => {
        toggleInputVisibility();
        setTextInput("")
    }

    // Cancel user input
    const cancelReauthInput = () => {
        toggleReauthVisibility();
        setReuthInput("")
    }

    // Toggles for input and re-authentication modals
    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    }
    const toggleReauthVisibility = () => {
        setReauthVisible(!reauthVisible);
    }

    const doSignOut = () => {
        signOut(auth).then(r => {
            ProfileOperations.profile = null;
            updateProfile();
            navigation.navigate("Login");
        });
    }

    return (
        <View style={styles.container}>
            {/* Modal for updating credentials */}
            <Modal
                animationType="slide"
                transparent visible={isInputVisible}
                presentationStyle="overFullScreen"
                onDismiss={toggleInputVisibility}
            >
                <View style={styles.inputWrapper}>
                    <View style={styles.modalView}>
                        <TextInput
                            placeholder= {textInput === "Password" ? "Enter New Password..." : "Enter Change"}
                            value={textInput} style={styles.textInput}
                            onChangeText={(value) => setTextInput(value)}
                            secureTextEntry={ textInput === "Password" }
                        />
                        <View style={styles.modalButtonView}>
                        <TouchableOpacity style={styles.Button} onPress={enterInput}>
                            <Text style={styles.ButtonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.CancelButton} onPress={cancelInput}>
                            <Text style={styles.CancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal for entering credentials */}
            <Modal
                animationType="slide"
                transparent visible={reauthVisible}
                presentationStyle="overFullScreen"
                onDismiss={toggleReauthVisibility}
            >
                <View style={styles.inputWrapper}>
                    <View style={styles.modalView}>
                        <TextInput
                            placeholder="Please Re-enter your password"
                            value={reauthInput} style={styles.textInput}
                            onChangeText={(value) => setReuthInput(value)}
                            secureTextEntry
                        />
                        <View style={styles.modalButtonView}>
                            <TouchableOpacity style={styles.Button} onPress={confirmInput}>
                                <Text
                                    style={styles.ButtonText}>Enter

                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CancelButton} onPress={cancelReauthInput}>
                                <Text style={styles.CancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Main content for the profile screen*/}
            <View style={styles.topNav}>
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
                    source={require("../assets/profile/avatars/placeholder.png")}>
                </Image>
                <View style={styles.userInfo}>
                    <View style={styles.mailWrapper}>
                        <Image style={styles.mailImage} source={require(`../assets/profile/email.png`)}/>
                        <Text style={styles.username}>{currentProfile.email}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.options}>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            setButtonPressed("Password");
                            PromptForCredentials();
                        }}
                    >
                        <Image source={require("../assets/profile/lock.png")} style={{ tintColor: "#919DA3"}}/>
                        <Text style={styles.optionText}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            setButtonPressed("Email");
                            PromptForCredentials();
                        }}
                    >
                        <Image source={require("../assets/profile/at-sign.png")} style={{ tintColor: "#919DA3"}}/>
                        <Text style={styles.optionText}>Change Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionLogout}
                        onPress={() => {
                            doSignOut();
                        }}
                    >
                        <Image source={require("../assets/profile/log-out.png")} style={{ tintColor: "#fc6a6a"}}/>
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
        backgroundColor : "#E7ECEF",
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
        alignItems: "center",
        justifyContent: "center",
    },
    mailImage: {
        height: 25,
        width: 25,
        marginRight: 5,
    },
    mailText: {
        marginLeft: 6,
        fontWeight: "normal",
        fontSize: 16,
    },
    options: {
        marginTop: 30,
        width:'100%',
        flex: 0.85,
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
        backgroundColor : "#274C77",
    },
    optionLogout: {
        flexDirection: "row",
        backgroundColor : "#274C77",
        alignItems: "center",
        padding: 10,
        marginTop: 25,
        borderRadius: 20,
        width: "90%",
    },
    optionText: {
        marginLeft: 20,
        color : "#E7ECEF",
        fontWeight: "bold",
        fontSize: 20,
    },
    logoutText: {
        marginLeft: 20,
        color: "#fc6a6a",
        fontWeight: "bold",
        fontSize: 20,
    },
    profilePicture:  {
        width: 100,
        height: 100,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    inputWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
            { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        width: width*2/3,
        padding: 10
    },
    Button: {
        backgroundColor: "#0066ff",
        borderRadius: 5,
        width: "40%",
        padding: 10
    },
    ButtonText: {
        color:'white',
        fontSize:20,
        fontWeight: "500",
        textAlign:"center",
    },
    CancelButton: {
        backgroundColor: 'white',
        borderColor: "#0066ff",
        borderWidth: 1,
        borderRadius: 5,
        width: "40%",
    },
    CancelButtonText: {
        color:'#0066ff',
        fontSize:20,
        fontWeight: "500",
        textAlign:"center",
        padding: 10,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },
});

export default ProfileScreen;
export {styles}