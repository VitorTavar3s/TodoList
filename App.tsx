import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";
import AddTask from "./src/screens/AddTask";
import Principal from "./src/screens/Principal";

export default function App() {
  const Stack = createStackNavigator();
  
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Principal" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Principal" component={Principal}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="AddTask" component={AddTask}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}