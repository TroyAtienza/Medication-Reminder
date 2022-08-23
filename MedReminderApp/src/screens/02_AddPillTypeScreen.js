import { StyleSheet, Text, View } from 'react-native';
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import createStyles from '../view/SplitView'

const styles = createStyles()


const AddPillTypeScreen = (props) => {
  return (
    <View style={styles.container}>
        <TopNav/>
        <View style={styles.topAddScreen}>
            <PillboxCarousel/>
        </View>
        <View style={styles.bottomAddScreen}>
          
        </View>
      </View>
  );
}

export default AddPillTypeScreen;