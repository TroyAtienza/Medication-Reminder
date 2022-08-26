import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import createStyles from '../view/SplitView'
import TopNav from '../view/TopNav'

const styles = createStyles();

const ProfileScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Profile!</Text>
        </View>
    );
}

export default ProfileScreen;