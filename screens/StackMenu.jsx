import React from 'react';
import DrawerMenu from "./DrawerMenu";
import ScreenOne from "./ScreenOne";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenTwo from "./ScreenTwo";
import LoginScreen from "./AuthenticationScreens/Login/LoginScreen";
import ForgotPasswordScreen from "./AuthenticationScreens/ForgotPassword/ForgotPasswordScreen";
import ResetPasswordScreen from "./AuthenticationScreens/ResetPassword/ResetPasswordScreen";
import ChooseUserScreen from "./AuthenticationScreens/Register/ChooseUserScreen";
import RegisterFormScreen from "./AuthenticationScreens/Register/RegisterFormScreen";
import PinModal from "../components/shared/PinModal/PinModal";


const Stack = createNativeStackNavigator();
const StackMenu = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "" }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "" }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: "" }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: "" }} />
            <Stack.Screen name="resetPassword" component={ResetPasswordScreen} options={{ title: "" }} />
            <Stack.Screen name="chooseUserTypeDuringRegister" component={ChooseUserScreen} options={{ title: "" }} />
            <Stack.Screen name="Register" component={RegisterFormScreen} options={{ title: "" }} />
            <Stack.Screen name="pinScreen" component={PinModal} options={{ title: "" }} />
            <Stack.Screen name="DrawerScreen" component={DrawerMenu}/>
        </Stack.Navigator>
    );
};

export default StackMenu;

