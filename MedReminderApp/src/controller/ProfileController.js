import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";

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



const ProfileOperations = {
    profile: null,

    editEmail(email) {
        this.profile.email = email;
    },
}

export default ProfileOperations;
export { updateProfile };
