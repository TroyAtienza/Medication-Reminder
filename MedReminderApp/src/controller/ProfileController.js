import Profile from "../model/Profile";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";

const storeProfile = async () => {
    try {
        await AsyncStorageNative.setItem(
            "current_user_profile",
            JSON.stringify(ProfileOperations.profile)
        );
        return "Profile saved successfully!";
    } catch (error) {
        console.error("Error while saving!")
    }
}

const retrieveProfile = async () => {
    try {
        const result = await AsyncStorageNative.getItem("current_user_profile");
        if (result !== null) {
            let toConvert = JSON.parse(result);
            ProfileOperations.profile = new Profile(
                toConvert.name,
                toConvert.email,
                toConvert.picSource,
            );
            return "Profile successfully Loaded";
        }
        else {
            // TODO PLACEHOLDER DELETE THIS ONCE LOGIN INTEGRATION COMPLETED
            ProfileOperations.profile = new Profile(
                "PLACEHOLDER NAME",
                "placeholder@placeholder.com",
                require("../assets/profile/avatars/placeholder.png"),
            )
        }
    } catch (err) {
        console.error("Error while retrieving!")
    }
}

const ProfileOperations = {
    profile: retrieveProfile(),

    editName(name) {
        this.profile.name = name;
    },
    editPhoto(source) {
        this.profile.picSource = source;
    },
    editEmail(email) {
        this.profile.email = email;
    },
}

export default ProfileOperations;
export {storeProfile, retrieveProfile};
