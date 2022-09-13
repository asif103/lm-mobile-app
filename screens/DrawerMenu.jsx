import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenTwo from "./ScreenTwo";


const Drawer = createDrawerNavigator();
const DrawerMenu = () => {

    return (
            <Drawer.Navigator initialRouteName="Screen Two">
                <Drawer.Screen name="Screen Two" component={ScreenTwo} />
            </Drawer.Navigator>
    );
};

export default DrawerMenu;

