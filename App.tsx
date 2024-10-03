import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import AddTask from "./src/screens/AddTask";
import TabRoutes from "./src/utils/tab.routes";
import Home from "./src/screens/Home/Home";
import { Header } from "./src/components/Header";

export default function App() {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{header:Header}}>
          <Stack.Screen name="Tabs" component={TabRoutes}/>
          <Stack.Screen name="AddTask" component={AddTask}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}