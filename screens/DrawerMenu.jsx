import React from 'react';
import {createDrawerNavigator, DrawerToggleButton} from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
// import { AntDesign } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const DrawerMenu = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return (
        <Drawer.Navigator initialRouteName="Home Screen" screenOptions={{drawerPosition: "right",
            // headerShown: false,
            headerLeft: false,
            headerRight: () => <DrawerToggleButton />}}

        >
            <Drawer.Screen name="Home Screen" component={HomeScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerMenu;

