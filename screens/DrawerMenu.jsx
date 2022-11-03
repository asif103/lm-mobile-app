import React from "react";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ClientHomeScreen from "./ClientHomeScreen";
import ClientProfileScreen from "./ClientProfileScreen";
import CarerProfileScreen from "./CarerProfileScreen";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import SignOut from "./SignOut";
import NotificationScreen from "./NotificationScreen";
// import { AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerMenu = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <Drawer.Navigator
      initialRouteName="Home Screen"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
        <Drawer.Screen
        name="Client Home"
        component={ClientHomeScreen}
        options={{
          title: "Homee",
        }}
      />
        <Drawer.Screen
            name="Client Profile"
            component={ClientProfileScreen}
            options={{
                title: "Client Profile",
            }}
        />
        <Drawer.Screen
            name="Carer Profile"
            component={CarerProfileScreen}
            options={{
                title: "Carer Profile",
            }}
        />
        <Drawer.Screen
            name="Terms of Service"
            component={TermsOfService}
            options={{
                title: "Terms of Service",
            }}
        />
        <Drawer.Screen
            name="Privacy Policy"
            component={PrivacyPolicy}
            options={{
                title: "Privacy Policy",
            }}
        />
        <Drawer.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
                title: "Notification",
            }}
        />
        <Drawer.Screen
            name="Sign Out"
            component={SignOut}
            options={{
                title: "Sign Out",
            }}
        />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
