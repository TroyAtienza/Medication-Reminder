import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/00_HomeScreen";
import PillListScreen from "./src/screens/01_PillListScreen";
import AddPillTypeScreen from "./src/screens/02_AddPillTypeScreen";
import AddPillColourScreen from "./src/screens/03_AddPillColourScreen";
import AddPillDetailsScreen from "./src/screens/04_AddPillDetailsScreen";
import AddPillTimesScreen from "./src/screens/05_AddPillTimesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // TODO: When Home screen is completed change home component to actual home screen.
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={PillListScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillType" component={AddPillTypeScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillColour" component={AddPillColourScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillDetails" component={AddPillDetailsScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillTimes" component={AddPillTimesScreen} options ={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};