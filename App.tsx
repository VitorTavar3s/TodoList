import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";


export default function App() {
  const Stack = createStackNavigator();
  
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}