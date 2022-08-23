import { StyleSheet, Text, View } from 'react-native';
import TopNav from '../view/TopNav';
import PillboxCarousel from "../components/PillboxCarousel";
import createStyles from '../view/SplitView'

const styles = createStyles()

const AddPillTypeScreen = (props) => {
  return (
    <View style={styles.container}>
        <TopNav/>
        <View style={styles.topScreen}>
          <PillboxCarousel/>
        </View>
        <View style={styles.bottomScreen}>
          
        </View>
      </View>
  );
}


export default AddPillTypeScreen;