import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../screens/Home/Home";
import OpenTasks from "../screens/OpenTasks/OpenTasks";
import ClosedTasks from "../screens/ClosedTasks/ClosedTasks";
import ArchivedTasks from "../screens/ArchivedTasks/ArchivedTasks";
import { TabLabel } from "../components/TabLabel";
import { TouchableOpacity, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#9A5CD0',
                tabBarInactiveTintColor: '#ccc',
                tabBarStyle: { backgroundColor: '#f0f0f0'},
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color})=> <TabLabel title="All" count={2} tabColor={color}/>,
                    tabBarShowLabel: false,
                    tabBarIconStyle: {width:'100%'},
                }}
            />
            <Tab.Screen
                name="openTasks"
                component={OpenTasks}
                options={{
                    tabBarIcon: ({color})=> <TabLabel title="Open" count={1} tabColor={color}/>,
                    tabBarShowLabel: false,
                    tabBarIconStyle: {width:'100%'}
                }}
            />
            <Tab.Screen
                name="closedTasks"
                component={ClosedTasks}
                options={{
                    tabBarIcon: ({color})=> <TabLabel title="Closed" count={1} tabColor={color}/>,
                    tabBarShowLabel: false,
                    tabBarIconStyle: {width:'100%'}
                }}
            />
            <Tab.Screen
                name="archivedTasks"
                component={ArchivedTasks}
                options={{
                    tabBarIcon: ({color})=> <TabLabel title="Archived" count={2} tabColor={color}/>,
                    tabBarShowLabel: false,
                    tabBarIconStyle: {width:'100%'}
                }}
            />
        </Tab.Navigator>
    );
}