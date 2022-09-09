import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";

// Updates the locally stored profile for the current user
const updateProfile = async () => {
    try {
        await AsyncStorageNative.setItem(
            "current_user",
            JSON.stringify(ProfileOperations.profile)
        );
        return "Profile saved successfully!";
    } catch (error) {
        console.error("Error while saving!")
    }
}

// Operations for a locally stored profile/user
const ProfileOperations = {
    profile: null,

    editEmail(email) {
        this.profile.email = email;
    },
}

export default ProfileOperations;
export { updateProfile };
