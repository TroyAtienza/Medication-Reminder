import {AsyncStorage} from "react-native";
import Profile from "../model/Profile";

const ProfileOperations = {
    profile: null, // TODO

    editName(name) {
        this.profile.name = name;
    },
    editPhoto(source) {
        this.profile.pic = source;
    },
    editEmail(email) {
        this.profile.email = email;
    },
    assignID(id) {
        this.profile.id = id;
    },
}

const storeProfile = async () => {
    try {
        await AsyncStorage.setItem(
            "current_user_profile",
            JSON.stringify(ProfileOperations.profile)
        );
    } catch (error) {
        console.error("Error while saving!")
    }
}

const retrieveProfile = async (id) => {
    try {
        const result = await AsyncStorage.getItem("current_user_profile");
        if (result !== null) {
            let toConvert = JSON.parse(result);
            ProfileOperations.profile = new Profile(
                toConvert.id,
                toConvert.name,
                toConvert.email,
                toConvert.pic,
            );
            console.log("Profile updated")
        }
    } catch (err) {
        console.error("Error while retrieving!")
    }
}

export default ProfileOperations;
