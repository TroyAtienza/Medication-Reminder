import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PillListScreen from "./src/view/screens/01_PillListScreen";
import AddPillTypeScreen from "./src/view/screens/02_AddPillTypeScreen";
import AddPillColourScreen from "./src/view/screens/03_AddPillColourScreen";
import AddPillTwoColoursScreen from "./src/view/screens/03_AddPillTwoColoursScreen";
import AddPillDetailsScreen from "./src/view/screens/04_AddPillDetailsScreen";
import AddPillTimesScreen from "./src/view/screens/05_AddPillTimesScreen";
import ProfileScreen from "./src/view/screens/06_ProfileScreen";
import LoginScreen from "./src/view/screens/LoginScreen";
import RegistrationScreen from "./src/view/screens/RegistrationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegistrationScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="Home" component={PillListScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillType" component={AddPillTypeScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillOneColour" component={AddPillColourScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillTwoColours" component={AddPillTwoColoursScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillDetails" component={AddPillDetailsScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="PillTimes" component={AddPillTimesScreen} options ={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options ={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};