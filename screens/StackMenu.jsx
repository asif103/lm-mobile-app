import React from 'react';
import DrawerMenu from "./DrawerMenu";
import ScreenOne from "./ScreenOne";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
const StackMenu = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "" }} />
            <Stack.Screen name="DrawerScreen" component={DrawerMenu}/>
        </Stack.Navigator>
    );
};

export default StackMenu;

