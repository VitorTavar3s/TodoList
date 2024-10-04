import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import AddTask from "./src/screens/AddTask";
import TabRoutes from "./src/utils/tab.routes";
import { Header } from "./src/components/Header";
import TasksProvider from "./src/context/tasksContext";
import Principal from "./src/screens/Principal";

export default function App() {

  const Stack = createStackNavigator();

  return(
    <TasksProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Principal" screenOptions={{header:Header}}>
          <Stack.Screen name="Principal" component={Principal}/>
          <Stack.Screen name="Tabs" component={TabRoutes}/>
          <Stack.Screen name="AddTask" component={AddTask}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TasksProvider>
  );
}