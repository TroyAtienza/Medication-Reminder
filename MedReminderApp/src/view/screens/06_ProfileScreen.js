import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
    Dimensions,
    Alert
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import ProfileController, {storeProfile} from "../../controller/ProfileController";
import {useEffect, useState} from "react";
import ProfileOperations from "../../controller/ProfileController";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
    const navigation = useNavigation();

    const [currentProfile, setProfile] = useState(ProfileController.profile);
    const [isInputVisible, setInputVisible] = useState(false);
    const [textInput, setTextInput] = useState("");
    const [buttonPressed, setButtonPressed] = useState("");

    const confirmInput = () => {
        // return if input is empty
        if (textInput.trim() === "") {
            Alert.alert(
                "Text field Empty!",
                `Please input something into the text field, or press cancel`,
                [
                    {
                        text: "OK",
                    },
                ]
            );
            return;
        }
        // confirm with user if input is what they desire
        Alert.alert(
            "Confirm",
            `Change ${buttonPressed} to ${textInput}?`,
            [
                {
                    text: "OK",
                    onPress: () => enterInput()
                },
                {
                    text: "Cancel",
                    style: "cancel"
                },
            ]
        );
    }

    const enterInput = () => {
        toggleInputVisibility();
        switch (buttonPressed) {
            case "Email":
                ProfileOperations.editEmail(textInput);
                break;
            case "Name" :
                ProfileOperations.editName(textInput);
                break;
        }
        setProfile(ProfileOperations.profile);
        storeProfile(ProfileOperations.profile)
            .then(r => console.log(r));
        setTextInput("");
    }

    const cancelInput = () => {
        toggleInputVisibility();
        setTextInput("")
    }

    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    }

    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent visible={isInputVisible}
                presentationStyle="overFullScreen"
                onDismiss={toggleInputVisibility}
            >
                <View style={styles.inputWrapper}>
                    <View style={styles.modalView}>
                        <TextInput
                            placeholder="Enter change"
                            value={textInput} style={styles.textInput}
                            onChangeText={(value) => setTextInput(value)}
                        />
                        <View style={styles.modalButtonView}>
                        <TouchableOpacity style={styles.Button} onPress={confirmInput}>
                            <Text style={styles.ButtonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.CancelButton} onPress={cancelInput}>
                            <Text style={styles.CancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.topNav}>
                <TouchableOpacity style={styles.navBackButton} onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../../assets/buttons/back.png')}
                    />
                </TouchableOpacity>
                <View></View>
            </View>
            <View style={styles.userWrapper}>
                <Image
                    style={styles.profilePicture}
                    source={currentProfile.picSource}>
                </Image>
                <View style={styles.userInfo}>
                    <Text style={styles.username}>{currentProfile.name}</Text>
                    <View style={styles.mailWrapper}>
                        <Image style={styles.mailImage} source={require(`../../assets/profile/email.png`)}/>
                        <Text style={styles.mailText}>{currentProfile.email}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.options}>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            //TODO ask to enter password first!
                        }}
                    >
                        <Image source={require("../../assets/profile/lock.png")} style={{ tintColor: "#919DA3"}}/>
                        <Text style={styles.optionText}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            setButtonPressed("Name");
                            setInputVisible(true);
                        }}
                    >
                        <Image source={require("../../assets/profile/edit.png")} style={{ tintColor: "#919DA3"}}/>
                        <Text style={styles.optionText}>Edit Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            setButtonPressed("Email");
                            setInputVisible(true);
                        }}
                    >
                        <Image source={require("../../assets/profile/at-sign.png")} style={{ tintColor: "#919DA3"}}/>
                        <Text style={styles.optionText}>Edit Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            //TODO need image picker
                            setButtonPressed("Profile picture");
                            setInputVisible(true);
                        }}
                    >
                        <Image source={require("../../assets/profile/avatar-small.png")}  />
                        <Text style={styles.optionText}>Update Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            console.log("Put function here")
                        }}
                    >
                        <Image source={require("../../assets/profile/settings.png")} style={{ tintColor: "#919DA3"}}/>
                        <Text style={styles.optionText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionLogout}
                        onPress={() => {
                            console.log("Put function here")
                        }}
                    >
                        <Image source={require("../../assets/profile/log-out.png")} style={{ tintColor: "#fc6a6a"}}/>
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
        flex: 0.85,
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